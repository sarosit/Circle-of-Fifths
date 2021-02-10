"use strict"
let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");
let harmony = document.getElementById("melMinor");

let ionian = document.getElementById("ionian");
let dorian = document.getElementById("dorian");
let phrygian = document.getElementById("phrygian");
let lydian = document.getElementById("lydian");
let mixolydian = document.getElementById("mixolydian");
let aeolian = document.getElementById("aeolian");
let locrian = document.getElementById("locrian");

let scaleContainerArray = [ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian];

function toggleDisplay(visibility1, visibility2){
    contentScale.style.visibility = `${visibility1}`
    contentChord.style.visibility = `${visibility2}`
    userMess.style.visibility = 'hidden';
};

function getRootNote() {
    return harmony.getAttribute('noteValue');
};

function populateNotes(scale, div){
    for (let i = 0; i < 7; i++) {
        let noteBox = document.createElement("div");
        noteBox.setAttribute('id', `${i+1}`);
        noteBox.className = 'note-container';
        div.appendChild(noteBox);
        div.childNodes[i].innerHTML = scale[i];
    }
};

function populateMajorScales(tonicScale){
    populateNotes(tonicScale, ionian);
    let modeManager = new ScaleManager(tonicScale[0]);
    let modeArray = modeManager.getMajorModes();
    for(let i = 1; i< 7; i++){
        populateNotes(modeArray[i-1], scaleContainerArray[i]);
    }
};

function populateMelodicMinorScales(tonicScale){
    populateNotes(tonicScale, ionian);
    let modeManager = new ScaleManager(tonicScale[0]);
    let modeArray = modeManager.getMelodicMinorModes();
    for(let i = 1; i< 7; i++){
        populateNotes(modeArray[i-1], scaleContainerArray[i]);
    }
};

function populateHarmonicMinorScales(tonicScale){
    populateNotes(tonicScale, ionian);
    let modeManager = new ScaleManager(tonicScale[0]);
    let modeArray = modeManager.getHarmonicMinorModes();
    for(let i = 1; i< 7; i++){
        populateNotes(modeArray[i-1], scaleContainerArray[i]);
    }
};
function populateHarmonicMajorScales(tonicScale){
    populateNotes(tonicScale, ionian);
    let modeManager = new ScaleManager(tonicScale[0]);
    let modeArray = modeManager.getHarmonicMajorModes();
    for(let i = 1; i< 7; i++){
        populateNotes(modeArray[i-1], scaleContainerArray[i]);
    }
};

function populateChords(chords){
    for (let i = 0; i < 7; i++) {
        contentChord.childNodes[i].innerHTML = chords[i];
    }
}

$(".segment").click(function () {

    $(".note-container").remove();
    toggleDisplay('visible', 'hidden')
    let note = this.id;
    harmony.setAttribute('noteValue', note);
    let scaleManager = new ScaleManager(this.id);
    let scale = scaleManager.getMajorScale();
    populateMajorScales(scale);
});

$("#major").click(()=>{
    $(".note-container").remove();
    toggleDisplay('visible', 'hidden')
    let root = getRootNote()
    let note = new ScaleManager(root);
    let scale = note.getMajorScale();
    populateMajorScales(scale);
});
$("#melMinor").click(()=>{
    $(".note-container").remove();
    toggleDisplay('visible', 'hidden')
    let root = getRootNote()
    let note = new ScaleManager(root);
    let scale = note.getMelodicMinorScale();
    populateMelodicMinorScales(scale);
});
$("#harmMinor").click(()=>{
    $(".note-container").remove();
    toggleDisplay('visible', 'hidden')
    let root = getRootNote()
    let note = new ScaleManager(root);
    let scale = note.getHarmonicMinorScale();
    populateHarmonicMinorScales(scale);
});
$("#harmMajor").click(()=>{
    $(".note-container").remove();
    toggleDisplay('visible', 'hidden')
    let root = getRootNote()
    let note = new ScaleManager(root);
    let scale = note.getHarmonicMajorScale();
    populateHarmonicMajorScales(scale);
});

$("#chords").click(()=>{
    toggleChord.setAttribute('chordMode', 'chordMode');
    toggleDisplay('hidden', 'visible');
    let note = getRootNote();
    let chordManager = new ScaleManager(note);
    let chords = chordManager.getMajorChords()
    console.log(chords);
    populateChords(chords);
})