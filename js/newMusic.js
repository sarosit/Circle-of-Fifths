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

class ScaleManager {
    #notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    #notesb = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    #sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'A#', 'G#', 'F#', 'C#', 'D#'];
    rootNote = 'C';
    #stencilArray = [
        [0, 2, 4, 5, 7, 9, 11],
        [0, 2, 3, 5, 7, 9, 11],
        [0, 2, 3, 5, 7, 8, 11],
        [0, 2, 4, 5, 7, 8, 11]
    ];
    #chordSymbolArray = [
        ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5'],
        ['minMaj7', 'min7', 'maj7#5', '7', '7', 'min7b5', 'min7b5'],
        ['minMaj7', 'min7b5', 'maj7b5', 'min7', '7', 'maj7', 'dim7'],
        ['maj7', 'min7b5', 'min7', 'minMaj7', '7', 'maj7#5', 'dim7']
    ];
    rootNote = 'C';
    
    constructor() {
    }
    root(v) {
        this.rootNote = v;
        return this;
    }
    major() {
        this.#stencilArray = this.#stencilArray[0];
        this.#chordSymbolArray = this.#chordSymbolArray[0];
        return this;
    }
    melodicMinor() {
        this.#stencilArray = this.#stencilArray[1];
        this.#chordSymbolArray = this.#chordSymbolArray[1];
        return this;
    }
    harmonicMinor() {
        this.#stencilArray = this.#stencilArray[2];
        this.#chordSymbolArray = this.#chordSymbolArray[2];
        return this;
    }
    harmonicMajor() {
        this.#stencilArray = this.#stencilArray[3];
        this.#chordSymbolArray = this.#chordSymbolArray[3];
        return this;
    }
    scale() {
        let accidental = this.#sharpKeys.includes(this.rootNote) ? this.#notesSharp : this.#notesb;
        return accidental.circularArray(this.rootNote).filter((el, i) => this.#stencilArray.some(j => i === j));
    }
    chords() {
        return this.scale().map((el, index) => el.concat(this.#chordSymbolArray[index]));
    }
    modes() {
        let myModes = [];
        for (let i = 0; i < this.scale().length; i++) {
            myModes.push(this.scale().circularArrayByIndex(i));
        }
        return myModes;
    }
}