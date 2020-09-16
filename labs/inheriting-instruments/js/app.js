class Instrument {
    constructor(loudness, family, playVerb) {
        this.loudness = loudness;
        this.family = family;
        this.playVerb = playVerb;
    }

    playInstruments() {
        console.log(this.family + " " + this.playVerb + " at " + this.loudness);
    }
}
class Woodwind extends Instrument {
    constructor(loudness) {
        super(loudness, "flute", "blow");
    }
}
class Percussion extends Instrument {
    constructor(loudness) {
        super(loudness, "drum", "hit");
    }
}
class Stringed extends Instrument {
    constructor(loudness) {
        super(loudness, "violin", "strum");
    }
}

var orchestra = [];
orchestra[0] = new Woodwind(10);
orchestra[1] = new Percussion(20);
orchestra[2] = new Stringed(15);
for(var i = 0; i < orchestra.length; i++){
    var currentInstrument = orchestra[i];
    currentInstrument.playInstruments();
    console.log(currentInstrument);
}