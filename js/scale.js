'use strict'

const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notesb = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'A#', 'G#', 'F#', 'C#', 'D#'];
const stencilMajor = [0, 2, 4, 5, 7, 9, 11];
const stencilMelodicMinor = [0, 2, 3, 5, 7, 9, 11];
const stencilHarmonicMinor = [0, 2, 3, 5, 7, 8, 11];
const stencilHarmonicMajor = [0, 2, 4, 5, 7, 8, 11];

function getScale (starterNote, stencil) {
  return getNotesByAccidental(
      starterNote, 
      sharpKeys.includes(starterNote) ? notesSharp : notesb)
        .filter((el, i) => stencil.some(j => i === j));
};

function getNotesByAccidental(starterNote , accidental){
  let i = 0;
  let myNewScale = [];
  let currentNote = starterNote;
  let startingIndex = accidental.indexOf(starterNote);
    do {
      myNewScale.push(currentNote);
      currentNote = accidental[(startingIndex + ++i) % 12];

    } while (currentNote != starterNote)
    return myNewScale;
};

function getModes (tonicScale) {
  let myModes = [];
  for (let i = 0; i < 6; i++) {
    tonicScale.push(tonicScale.shift());
    myModes.push(Array.from(tonicScale));
  };
  return myModes
};

