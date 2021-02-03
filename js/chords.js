'use strict'

const majorChordSymbols = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5'];
const melodicChordSymbols = ['minMaj7', 'min7', 'maj7#5', '7', '7', 'min7b5', 'min7b5'];
const harmMinorChordSymbols = ['minMaj7', 'min7b5', 'maj7b5', 'min7', '7', 'maj7', 'dim7'];
const harmMajChordSymbols = ['maj7', 'min7b5', 'min7', 'minMaj7', '7', 'maj7#5', 'dim7'];

function getChords(scale, symbols) {
    return scale.map((el, index) => el.concat(symbols[index]));
}

function makeChords(chordArr) {
    $("#ionian").remove();
    $(".modeDiv").remove();
    $(".chordBox").remove();
    userMess.style.visibility = 'hidden'
    for (let i = 0; i < 7; i++) {
        let chords = document.createElement("div")
        chords.className = "chordBox"
        chords.innerHTML = chordArr[i]
        contentChord.append(chords)
    }
}

$("#chords").click(function () {
    toggleChord.setAttribute('chordMode', 'chordMode');
    toggleChord.removeAttribute('scaleMode', '');
    makeChords(getChords(getScale(getRootNote(), stencilMajor), majorChordSymbols));

})