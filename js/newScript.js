"use strict"
import { MusicManager } from './newMusic.js';

let article = document.getElementById("content");
let mainDisplay = document.getElementById("content-wrapper");
let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");
let harmony = document.getElementById("melMinor");
let scaleName = document.getElementById("scale-name-container")

let ionian = document.getElementById("ionian");
let dorian = document.getElementById("dorian");
let phrygian = document.getElementById("phrygian");
let lydian = document.getElementById("lydian");
let mixolydian = document.getElementById("mixolydian");
let aeolian = document.getElementById("aeolian");
let locrian = document.getElementById("locrian");

let scaleContainerArray = [ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian];

let scaleNameMap = new Map();
scaleNameMap.set('major', ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian']);
scaleNameMap.set('melodicMinor', ['Ionian b3', 'Dorian b2', 'Lydian Augmented', 'Lydian Dominant', 'Mixolydian b6', 'Aeolian b5', 'Altered Scale']);
scaleNameMap.set('harmonicMinor', ['Aeolian #7', 'Locrian 6', 'Ionian Augmented', 'Dorian #4', 'Phrygian Dominant', 'Lydian #2', 'Super Locrian bb7']);
scaleNameMap.set('harmonicMajor', ['Ionian b6', 'Dorian b5', 'Phrygian b4', 'Lydian b3', 'Mixolydian b2', 'Lydian Augmented #2', 'Locrian bb7']);

function toggleDisplay() {
    switch(article.getAttribute('mode')){
        case 'scaleMode':
            contentScale.style.visibility = 'visible';
            contentChord.style.visibility = 'hidden';
            break;
        
        case 'chordMode':
            contentScale.style.visibility = 'hidden';
            contentChord.style.visibility = 'visible';
            break

        default:
            contentScale.style.visibility = 'visible';
            contentChord.style.visibility = 'hidden';

    }
    

};

function setKeyTonality(el, note) {
    switch (article.getAttribute('tonality')) {
        case 'major':
            return el.root(note).major();

        case 'melodicMinor':
            return el.root(note).melodicMinor();

        case 'harmonicMinor':
            return el.root(note).harmonicMinor();

        case 'harmonicMajor':
            return el.root(note).harmonicMajor();

        default:
            return el.root(note).major();
    }
}

function displayMode() {
    mainDisplay.style.display = 'flex';
    article.style.display = 'grid';
    userMess.style.display = 'none';
}

function getRootNote() {
    return harmony.getAttribute('noteValue');
};

function populateNotes(scale, div) {
    for (let i = 0; i < 7; i++) {
        let noteBox = document.createElement("div");
        noteBox.setAttribute('id', `${i + 1}`);
        noteBox.className = 'note-container';
        div.appendChild(noteBox);
        div.childNodes[i].innerHTML = scale[i];
    }
};

function displayScaleNames(key){
    $(".scale-name").remove();
    let scaleNameArray = scaleNameMap.get(key)
    console.log(scaleNameArray)
    for (let i = 0; i < 7; i++) {
        let scaleNameBox = document.createElement("div");
        scaleNameBox.className = 'scale-name';
        scaleName.appendChild(scaleNameBox);
        scaleNameBox.innerHTML = scaleNameArray[i];
    }
}

function populateScales(tonicScale) {
    populateNotes(tonicScale, ionian);
    let note = getRootNote()
    let modeManager = new MusicManager();
    let modeArray = setKeyTonality(modeManager, note).modes();
    for (let i = 1; i < 7; i++) {
        populateNotes(modeArray[i], scaleContainerArray[i]);
    }
};

function createHarmony(){
    let note = getRootNote()
    let musicManager = new MusicManager();

    if (article.getAttribute('mode') === 'scaleMode') {
        let scale = setKeyTonality(musicManager, note).scale();
        displayScaleNames(
            article.getAttribute('tonality')
        )
        populateScales(scale);
    } else {
        let chords = setKeyTonality(musicManager, note).chords();
        populateChords(chords);
    }
};

function populateChords(chords) {
    for (let i = 1; i < 8; i++) {
        contentChord.childNodes[2 * i - 1].innerHTML = chords[i - 1];
        contentChord.childNodes[2 * i - 1].className = 'chord-container';
    }
}

$(".segment").click(function () {

    article.setAttribute('tonality', 'major');
    if(article.hasAttribute('mode')!==true){
        article.setAttribute('mode', 'scaleMode');
    }

    displayMode();
    $(".note-container").remove();
    
    toggleDisplay();
    
    let note = this.id;
    harmony.setAttribute('noteValue', note);
    createHarmony();
});

$("#major").click(() => {
    article.setAttribute('tonality', 'major');
    $(".note-container").remove();
    toggleDisplay()
    createHarmony()
});

$("#melMinor").click(() => {

    article.setAttribute('tonality', 'melodicMinor');
    $(".note-container").remove();
    toggleDisplay()
    createHarmony()

});

$("#harmMinor").click(() => {

    article.setAttribute('tonality', 'harmonicMinor');
    $(".note-container").remove();
    toggleDisplay()
    createHarmony()
});

$("#harmMajor").click(() => {

    article.setAttribute('tonality', 'harmonicMajor');
    $(".note-container").remove();
    toggleDisplay()
    createHarmony()
});

$("#scales").click(() => {
    article.setAttribute('mode', 'scaleMode');
    $(".note-container").remove();
    toggleDisplay();
    createHarmony();
});

$("#chords").click(() => {
    $(".note-container").remove();
    article.setAttribute('mode', 'chordMode');
    toggleDisplay();
    createHarmony();
});