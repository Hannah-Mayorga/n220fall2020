// Application level stuff
// Cluttering the global namespace!!!
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
// App vars
var camera, scene, ball, goal, timeoutId, particleSystem;

// Create the Scene
scene = createScene();
engine.runRenderLoop(function() {
    scene.render();
})

scene.registerAfterRender(function() {
   if(ball.intersectsMesh(goal, false)) {
       // Move Goal
      goal.position.x = (Math.random() * 8) - 4;
      // Play a particle burst
      particleSystem.manualEmitCount = 21;
      particleSystem.start();
      // Position Particles
      particleSystem.minEmitBox = ball.position;
      particleSystem.minEmitBox = ball.position;
      // Put Ball Back
      resetBall();
   }
})

function createScene() {
    var scene = new BABYLON.Scene(engine);
    // Basic Scene Setup
    camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0,0,-15), scene);
    var light = new BABYLON.DirectionalLight("lighty", new BABYLON.Vector3(0, -.5, 1), scene);
    // Enable Physics
    var gravityVector = BABYLON.Vector3(0, -9.81, 0);
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);
    // Setup Ball
    ball = BABYLON.MeshBuilder.CreateSphere("sphero", { diameter: 1 }, scene);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(
        ball, BABYLON.PhysicsImpostor.SphereImpostor,
        { mass: 1, restitution: .2 }, scene
        );
    // Setup Ground for Ball to Exist On
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 20, width: 20, subdivisions: 4}, scene);
    ground.position.y = -3;
    ground.position.z = 9;
    ground.PhysicsImpostor = new BABYLON.PhysicsImpostor(
        ground, BABYLON.PhysicsImpostor.BoxImpostor,
        { mass: 0, restitution: .9}, scene
    );
    // Make the Goal
    goal = new BABYLON.MeshBuilder.CreateBox("goal", {height: 5, width: 5}, scene);
    goal.position.z = 7;
    goal.position.x = (Math.random() * 8) - 4;
    // Make Particle System
    particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.emitter = new BABYLON.Vector3(0,0,0);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.addVelocityGradient(0,2);
    // load particle texture
    particleSystem.particleTexture = new BABYLON.Texture("images/particle.png", scene);
    return scene;
}

function resetBall() {
    // Reset Position
    ball.position = new BABYLON.Vector3();
    // Reset Velocity
    ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3() );
    ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3() );
    // Get Rid of Timeout
    clearTimeout(timeoutId);
}

window.addEventListener("click", function() {
    // Get the Mesh That Was Click On
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    // null check
    if(selectedObject) {

        // Get a Direction Away From Where the User Clicked the Ball
        var surfaceNormal = pickResult.getNormal(true);
        var forceDirection = surfaceNormal.scale(-1000);

        // Kick the Object
        selectedObject.physicsImpostor.applyForce(
            forceDirection,
            selectedObject.getAbsolutePosition()
        )

        // Reset Ball After 3 Seconds
        timeoutId = setTimeout(resetBall, 3000);
    }
})