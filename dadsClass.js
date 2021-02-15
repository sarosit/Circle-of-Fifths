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
  #majorChordSymbols = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5'];
  #melodicChordSymbols = ['minMaj7', 'min7', 'maj7#5', '7', '7', 'min7b5', 'min7b5'];
  #harmMinorChordSymbols = ['minMaj7', 'min7b5', 'maj7b5', 'min7', '7', 'maj7', 'dim7'];
  #harmMajChordSymbols = ['maj7', 'min7b5', 'min7', 'minMaj7', '7', 'maj7#5', 'dim7'];
  #sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'A#', 'G#', 'F#', 'C#', 'D#'];
  // #stencilMajor = [0, 2, 4, 5, 7, 9, 11];
  // #stencilMelodicMinor = [0, 2, 3, 5, 7, 9, 11];
  // #stencilHarmonicMinor = [0, 2, 3, 5, 7, 8, 11];
  // #stencilHarmonicMajor = [0, 2, 4, 5, 7, 8, 11];
  #stencilArray = [
    [0, 2, 4, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 8, 11],
    [0, 2, 4, 5, 7, 8, 11]
  ];

  #kindsofScale = Object.freeze({ "Major": 1, "MelodicMinor": 2, "HarmonicMinor": 3, "HarmonicMajor": 4 });
  rootNote = 'C';
  kind = this.#kindsofScale.Major;
  constructor() {
  }
  root(v) {
    this.rootNote = v;
    return this;
  }
  major() {
    this.kind = this.#kindsofScale.Major;
    return this;
  }
  melodicMinor() {
    this.kind = this.#kindsofScale.MelodicMinor;
    return this;
  }
  harmonicMinor() {
    this.kind = this.#kindsofScale.HarmonicMinor;
    return this;
  }
  harmonicMajor() {
    this.kind = this.#kindsofScale.HarmonicMajor;
    return this;
  }
  scale() {
    let accidental = this.#sharpKeys.includes(this.rootNote) ? this.#notesSharp : this.#notesb;
    return accidental.circularArray(this.rootNote).filter((el, i) => this.getStencil().some(j => i === j));
  }

  chords() {
    return this.scale().map((el, index) => el.concat(this.getChordSymbols()[index]));
  }
  modes() {
    let myModes = [];
    for (let i = 0; i < this.scale().length; i++) {
      myModes.push(this.scale().circularArrayByIndex(i));
    }
    return myModes;
  }
  getChordSymbols() {
    switch (this.kind) {
      case this.#kindsofScale.Major:
        return this.#majorChordSymbols;
      case this.#kindsofScale.HarmonicMajor:
        return this.#harmMajChordSymbols;
      case this.#kindsofScale.HarmonicMinor:
        return this.#harmMinorChordSymbols;
      case this.#kindsofScale.MelodicMinor:
        return this.#melodicChordSymbols;
      default:
        return this.#majorChordSymbols;
    }
  }
  getStencil() {
    switch (this.kind) {
      case this.#kindsofScale.Major:
        return this.#stencilMajor;
      case this.#kindsofScale.HarmonicMajor:
        return this.#stencilHarmonicMajor;
      case this.#kindsofScale.HarmonicMinor:
        return this.#stencilHarmonicMinor;
      case this.#kindsofScale.MelodicMinor:
        return this.#stencilMelodicMinor;
      default:
        return this.#stencilMajor;
    }
  }
}

let note = 'D';
console.table(new ScaleManager().root(note).major().scale());
console.table(new ScaleManager().root(note).major().chords());
console.table(new ScaleManager().root(note).major().modes());

console.table(new ScaleManager().root(note).harmonicMinor().scale());
console.table(new ScaleManager().root(note).harmonicMinor().chords());
console.table(new ScaleManager().root(note).harmonicMinor().modes());