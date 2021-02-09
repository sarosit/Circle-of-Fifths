'use strict'

Array.prototype.circularArrayByIndex = function(index) {
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

Array.prototype.circularArray = function(note) {
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
const stencilMajor = [0, 2, 4, 5, 7, 9, 11];
const stencilMelodicMinor = [0, 2, 3, 5, 7, 9, 11];
const stencilHarmonicMinor = [0, 2, 3, 5, 7, 8, 11];
const stencilHarmonicMajor = [0, 2, 4, 5, 7, 8, 11];

class ScaleManager {

  constructor(starterNote){
    this.starterNote = starterNote;
  }

  getMajorScale(){
    let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
    return accidental.circularArray(this.starterNote).filter((el, i) => stencilMajor.some(j => i === j));
  }
  getMelMinorScale(){
    let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
    return accidental.circularArray(this.starterNote).filter((el, i) => stencilMelodicMinor.some(j => i === j));
  }
  getHarmMinorScale(){
    let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
    return accidental.circularArray(this.starterNote).filter((el, i) => stencilHarmonicMinor.some(j => i === j));
  }
  getHarmMajorScale(){
    let accidental = sharpKeys.includes(this.starterNote) ? notesSharp : notesb
    return accidental.circularArray(this.starterNote).filter((el, i) => stencilHarmonicMajor.some(j => i === j));
  }

  // getModes() {
  //   let myModes = [];
  //   for (let i = 0; i < 6; i++) {
  //     this.getMajorScale().push(this.getMajorScale().shift());
  //     myModes.push(Array.from(this.getMajorScale()));
  //   };
  //   return myModes
  // }

  getModes() {
    let myModes = [];
    for (let i in this){
      myModes.push(this.circularArrayByIndex(i))
    }
    return myModes
  }

  getChords(tonicScale, symbols) {
    
    return tonicScale.map((el, index) => el.concat(symbols[index]));
  }
}

// console.log(music.getNotesByAccidental('C', notesb))

let scale = new ScaleManager('F')

console.log(scale.getMajorScale().getModes())