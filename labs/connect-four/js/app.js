// ISSUES
// - How to turn board into an array while also keeping it as an SVG. For some reason, this confused me
// - Getting respective colors to show up on the board
// - Having proper win elements (they don't work cause I didn't create an array)

// Global
let currentplayer = 'red';
var freeSpace = document.getElementsByClassName("empty");
let yellowCheck = document.getElementById("yellowChecker");
let redCheck = document.getElementById("redChecker");
// Create checker class, used for both pieces (red and yellow)
class Checker {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
    } // Create the checker piece
    create() {
        fill(this.color);
        circle(this.x, this.y, this.radius);
    } // Move Checker into place <- doesn't work
    place(cx,cy) {
        this.x = cx;
        this.y = cy;
    }
}
// Set the canvas
function setup() {
    createCanvas(1000, 1000);
}
// Put the pieces on the canvas
function draw() { 
    // Checking each "free space"
    for (var i = 0; i < freeSpace.length; i++) {
        freeSpace[i].addEventListener('click', checkSpace);
    }
    // Creating game pieces
    var red = new Checker(50, 50, 70, "#f54b42");
    var yellow = new Checker(150,50, 70, "#e6af0b")
    red.create();
    yellow.create();
    // Checking if space is free, red, or yellow
    function checkSpace() {
        if (currentplayer = 'red') {
            console.log("red");
            // Either change the color of the SVG circle or "move" the red object into the spot that was clicked
            // Can't figure out why I can't make the object move
            currentplayer = 'yellow'; // Once red color has been laid down, switch to other players color
            console.log(currentplayer)
        } else if (currentplayer = 'yellow'){
            console.log("yellow");
            // Same problem as earlier. Not sure how to change the colors...
            currentplayer = 'red';
        }
    }
    checkWins();
}
// Turn Indicators Animations 
yellowCheck.addEventListener("click", turnYOff);
redCheck.addEventListener("click", turnROff);
function turnYOff() {
    yellowCheck.setAttribute("fill", "#ffff");
    redCheck.setAttribute("fill", "#f54b42")
}
function turnROff(){
    redCheck.setAttribute("fill", "#ffff");
    yellowCheck.setAttribute("fill", "#e6af0b")
}
// Check different win options, I wasn't able to implement them due to not setting this up correctly,
// but here is the code I think would work for a winning game
function checkWins(){
 // Horizontal 
 // var win = 0;
 // for row = 0; row < board.length; row++
 //     for col = 0; col < board.length; col++
 //         if(board[row][col] == currentperson) 
 //             win++;
//          else win = 0;
//          if win == 4;
//              return connect4;
 // Vertical 
 // for col = 0; col < board.length; col++
 //     for row = 0; row < board.length; row++
//          if(board[row][col] == currentperson)
//              win++;
//          else win = 0;
//          if win == 4;
//              return connect4;
 // Diagonal 
//for row = 0; row < board.length; row++
//   for col = 0; col < board.length; col++
//      for(var i = 0; i < 4; i++) 
//          if(board[row + i][col + i] == currentperson)
//              win++
//          else win = 0;
//          if win == 4;
//              return connect4;
}