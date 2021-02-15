'use strict'

Array.prototype.circularArrayByIndex = function (index) {
    let newArr = [];
    if (index > this.length - 1) {
        throw 'Index is too damn high.'
    }
    for (let i = index; i < this.length; i++) {
        newArr.push(this[i]);
    }
    for (let i = 0; i < index; i++) {
        newArr.push(this[i]);
    }
    return newArr;
}

Array.prototype.circularArray = function (note) {
    let newArr = [];
    if (this.includes(note) === false) {
        throw 'Content not in Array'
    }
    for (let i = this.indexOf(note); i < this.length; i++) {
        newArr.push(this[i]);
    }
    for (let i = 0; i < this.indexOf(note); i++) {
        newArr.push(this[i]);
    }
    return newArr;
}

const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notesb = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const majorChordSymbols = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5'];
const melodicChordSymbols = ['minMaj7', 'min7', 'maj7#5', '7', '7', 'min7b5', 'min7b5'];
const harmMinorChordSymbols = ['minMaj7', 'min7b5', 'maj7b5', 'min7', '7', 'maj7', 'dim7'];
const harmMajChordSymbols = ['maj7', 'min7b5', 'min7', 'minMaj7', '7', 'maj7#5', 'dim7'];

const sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'A#', 'G#', 'F#', 'C#', 'D#'];
const major = [0, 2, 4, 5, 7, 9, 11];
const melodicMinor = [0, 2, 3, 5, 7, 9, 11];
const harmonicMinor = [0, 2, 3, 5, 7, 8, 11];
const harmonicMajor = [0, 2, 4, 5, 7, 8, 11];

class MusicManager {

    constructor() {}

    root(starterNote){
        this.starterNote = starterNote;
        return this
    }

    major() {
        let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
        this.scale = accidental.circularArray(this.starterNote).filter((el, i) => major.some(j => i === j));
        this.chords = majorChordSymbols;
        return this
    }
    melodicMinor() {
        let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
        this.scale = accidental.circularArray(this.starterNote).filter((el, i) => melodicMinor.some(j => i === j));
        this.chords = melodicChordSymbols;
        return this
    }
    harmonicMinor() {
        let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
        this.scale = accidental.circularArray(this.starterNote).filter((el, i) => harmonicMinor.some(j => i === j));
        this.chords = harmMinorChordSymbols;
        return this
    }
    harmonicMajor() {
        let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
        this.scale = accidental.circularArray(this.starterNote).filter((el, i) => harmonicMajor.some(j => i === j));
        this.chords = harmMajChordSymbols;
        return this
    }

    getModes() {
        this.modes = []
        for (let i = 1; i < this.scale.length; i++) {
            this.modes.push(this.scale.circularArrayByIndex(i));
        }
        return this.modes;
    }

    getChords() {
        return this.scale.map((el, index) => el.concat(this.chords[index]));
    }
}

let scaleManager = new MusicManager();

console.log(scaleManager.root('C').harmonicMinor())