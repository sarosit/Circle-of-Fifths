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
let scaleName = document.getElementsByClassName("name");

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
scaleNameMap.set('melodicMinor', ['Ionian ♭3', 'Dorian ♭2', 'Lydian Augmented', 'Lydian Dominant', 'Mixolydian ♭6', 'Aeolian ♭5', 'Altered Scale']);
scaleNameMap.set('harmonicMinor', ['Aeolian ♯7', 'Locrian 6', 'Ionian Augmented', 'Dorian ♯4', 'Phrygian Dominant', 'Lydian ♯2', 'Super Locrian ♭♭7']);
scaleNameMap.set('harmonicMajor', ['Ionian ♭6', 'Dorian ♭5', 'Phrygian ♭4', 'Lydian ♭3', 'Mixolydian ♭2', 'Lydian Augmented ♯2', 'Locrian ♭♭7']);

let chordIntervalSymbol = new Map();
chordIntervalSymbol.set('∆', ['1', '3', '5', '7']);
chordIntervalSymbol.set('-7', ['1', '♭3', '5', '♭7']);
chordIntervalSymbol.set('7', ['1', '3', '5', '♭7']);
chordIntervalSymbol.set('ø', ['1', '♭3', '♭5', '♭7']);
chordIntervalSymbol.set('-∆', ['1', '♭3', '5', '7']);
chordIntervalSymbol.set('∆(♯5)', ['1', '3', '♯5', '7']);
chordIntervalSymbol.set('∆(♭5)', ['1', '3', '♭5', '7']);
chordIntervalSymbol.set('o7', ['1', '♭3', '♭5', '♭♭7']);

let chordIntervalLetter = new Map();
chordIntervalLetter.set('maj7', ['1', '3', '5', '7']);
chordIntervalLetter.set('min7', ['1', '♭3', '5', '♭7']);
chordIntervalLetter.set('7', ['1', '3', '5', '♭7']);
chordIntervalLetter.set('min7(♭5)', ['1', '♭3', '♭5', '♭7']);
chordIntervalLetter.set('minMaj7', ['1', '♭3', '5', '7']);
chordIntervalLetter.set('maj7(♯5)', ['1', '3', '♯5', '7']);
chordIntervalLetter.set('maj7(♭5)', ['1', '3', '♭5', '7']);
chordIntervalLetter.set('dim7', ['1', '♭3', '♭5', '♭♭7']);

function toggleDisplay() {
    switch(article.getAttribute('mode')){
        case 'scaleMode':
            contentScale.style.display = 'grid';
            contentChord.style.display = 'none';
            break;
        
        case 'chordMode':
            contentScale.style.display = 'none';
            contentChord.style.display = 'grid';
            break

        default:
            contentScale.style.display = 'grid';
            contentChord.style.display = 'none';

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
    mainDisplay.style.display = 'grid';
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
    for (let i = 0; i < 7; i++) {
        let scaleNameBox = document.createElement("span");
        scaleNameBox.className = 'scale-name';
        scaleName[i].appendChild(scaleNameBox);
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
        if(contentChord.getAttribute('display-type')==='symbol'){
            let chords = setKeyTonality(musicManager, note).chordSymbol();
            populateChords(chords);
        } else {
            let chords = setKeyTonality(musicManager, note).chords();
            populateChords(chords);
        }
        
    }
};

function populateChords(chords) {
    for (let i = 0; i < 7; i++) {
        let chordBox = document.getElementById(`chord${i}`)
        let chordSpan = document.createElement("span");
        chordSpan.className = 'chord-container';
        chordBox.appendChild(chordSpan);
        chordSpan.innerHTML = chords[i];

        let chord = chords[i];
        let chordColour = chord[1]==='♭'||chord[1]==='♯'?
            chord.slice(2) : chord.slice(1);

        
        let intervals = contentChord.getAttribute('display-type')==='symbol'?
        chordIntervalSymbol.get(chordColour) : chordIntervalLetter.get(chordColour);
        
        let intervalSpan = document.createElement("span");
        intervalSpan.className = 'chord-intervals';
        chordBox.appendChild(intervalSpan);
        intervalSpan.innerHTML = `Chord Intervals:\n ${intervals}`;
    }
}

function clearContent(){
    $(".note-container").remove();
    $(".chord-container").remove();
    $(".chord-intervals").remove();
}

$(".segment").click(function () {

    article.setAttribute('tonality', 'major');
    if(article.hasAttribute('mode')!==true){
        article.setAttribute('mode', 'scaleMode');
    }

    displayMode();
    clearContent();
    
    toggleDisplay();
    
    let note = this.id;
    harmony.setAttribute('noteValue', note);
    createHarmony();
});

$("#major").click(() => {
    article.setAttribute('tonality', 'major');
    clearContent();
    toggleDisplay();
    createHarmony();
});

$("#melMinor").click(() => {

    article.setAttribute('tonality', 'melodicMinor');
    clearContent();
    toggleDisplay();
    createHarmony();

});

$("#harmMinor").click(() => {

    article.setAttribute('tonality', 'harmonicMinor');
    clearContent();
    toggleDisplay();
    createHarmony();
});

$("#harmMajor").click(() => {

    article.setAttribute('tonality', 'harmonicMajor');
    clearContent();
    toggleDisplay();
    createHarmony();
});

$("#scales").click(() => {
    article.setAttribute('mode', 'scaleMode');
    clearContent();
    toggleDisplay();
    createHarmony();
});

$("#chords").click(() => {
    clearContent();
    article.setAttribute('mode', 'chordMode');
    contentChord.setAttribute('display-type', 'symbol');
    toggleDisplay();
    createHarmony();
});

$("input").on("click", function() {
    clearContent();
    if(contentChord.getAttribute('display-type')==="symbol"){
        contentChord.setAttribute('display-type', "letter");
    } else {
        contentChord.setAttribute('display-type', "symbol");
    }
    toggleDisplay();
    createHarmony();

});