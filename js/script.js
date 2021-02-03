'use strict'

let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");
let harmony = document.getElementById("melMinor")

function makeScales(tonicScale) {
    let scaleBox = document.createElement("div");
    scaleBox.id = "ionian"
    contentScale.appendChild(scaleBox);
    for (let i = 0; i < 7; i++) {
        let parentScale = document.createElement("div");
        parentScale.className = 'note-container'
        parentScale.innerHTML = tonicScale[i];
        scaleBox.appendChild(parentScale);
    }

    let modeArray = getModes(tonicScale);

    for (let i = 0; i < 6; i++) {
        let modeBox = document.createElement("div");
        modeBox.className = "modeDiv"
        modeBox.id = "mode" + (i + 1);
        contentScale.appendChild(modeBox);
        let currentMode = modeArray[i]
        for (let i = 0; i < 7; i++) {
            let modeDiv = document.createElement("div");
            modeDiv.className = 'note-container'
            modeDiv.innerHTML = currentMode[i];
            modeBox.appendChild(modeDiv);
        }
    }
}

$("#scales").click(function () {
    toggleScale.setAttribute('scaleMode', '');
    toggleChord.removeAttribute('chordMode', '');
    createHarmony(getScale(getRootNote(), stencilMajor));

});

$(".segment").click(function () {

    $("#ionian").remove();
    $(".modeDiv").remove();
    $(".chordBox").remove();
    userMess.style.visibility = 'hidden'
    let note = this.id;
    harmony.setAttribute('noteValue', note)

    // if(toggleScale.getAttribute('scaleMode') === true){
    //     let tonicScale = getScale(note, stencilMajor);
    //     makeScales(tonicScale);
    // }    
    if (toggleScale.getAttribute('chordMode') === true) {
        let tonicScale = getScale(note, stencilMajor);
        getChords(tonicScale, majorChordSymbols);
    } else {
        let tonicScale = getScale(note, stencilMajor);
        makeScales(tonicScale);
    }

});


function createHarmony(tonicScale) {

    $("#ionian").remove();
    $(".modeDiv").remove();
    $(".chordBox").remove();
    makeScales(tonicScale)
}

function getRootNote() {
    return harmony.getAttribute('noteValue');
}



$("#melMinor").click(() => {
    if (toggleChord.getAttribute('chordMode') === 'chordMode') {
        makeChords(getChords(getScale(getRootNote(), stencilMelodicMinor), melodicChordSymbols))
    } else {
        createHarmony(getScale(getRootNote(), stencilMelodicMinor))
    }
});

$("#harmMinor").click(() => {
    if (toggleChord.getAttribute('chordMode') === 'chordMode') {
        makeChords(getChords(getScale(getRootNote(), stencilHarmonicMinor), harmMinorChordSymbols))
    } else {
        createHarmony(getScale(getRootNote(), stencilHarmonicMinor))
    }
});

$("#harmMajor").click(() => {
    if (toggleChord.getAttribute('chordMode') === 'chordMode') {
        makeChords(getChords(getScale(getRootNote(), stencilHarmonicMajor), harmMajChordSymbols))
    } else {
        createHarmony(getScale(getRootNote(), stencilHarmonicMajor))
    }
});

$("#major").click(() => {
    if (toggleChord.getAttribute('chordMode') === 'chordMode') {
        makeChords(getChords(getScale(getRootNote(), stencilMajor), majorChordSymbols))
    } else {
        createHarmony(getScale(getRootNote(), stencilMajor))
    }
});

console.log(toggleChord.attributes)





