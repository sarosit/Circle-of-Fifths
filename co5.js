// const notes = [{
//   "Name" : "C"
// },
// {
//   "Name" : "C#",
//   "FlatName" : "Db"
// },
// {
//   "Name" : "D"
// },
// {
//   "Name" : "D#",
//   "FlatName" : "Eb"
// },
// {
//   "Name" : "E"
// },
// {
//   "Name" : "F"
// },
// {
//   "Name" : "F#",
//   "FlatName" : "Gb"
// },
// {
//   "Name" : "G"
// },
// {
//   "Name" : "G#",
//   "FlatName" : "Ab"
// },
// {
//   "Name" : "A"
// },
// {
//   "Name" : "A#",
//   "FlatName" : "Bb"
// },
// {
//   "Name" : "B"
// }];


const majorChordSymbols = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5'];
const melodicChordSymbols = ['minMaj7', 'min7', 'maj7#5', '7', '7', 'min7b5', 'min7b5'];
const harmMinorChordSymbols = ['minMaj7', 'min7b5', 'maj7b5', 'min7', '7', 'maj7', 'dim7'];
const harmMajChordsSymbols = ['maj7', 'min7b5', 'min7', 'minMaj7', '7', 'maj7#5', 'dim7'];

const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notesb = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'A#', 'G#', 'F#', 'C#', 'D#'];
const stencilMajor = [0, 2, 4, 5, 7, 9, 11];
const stencilMelodicMinor = [0, 2, 3, 5, 7, 9, 11];
const stencilHarmonicMinor = [0, 2, 3, 5, 7, 8, 11];
const stencilHarmonicMajor = [0, 2, 4, 5, 7, 8, 11];

function getMajorScale (starterNote) {
  return getNotesByAccidental(
      starterNote, 
      sharpKeys.includes(starterNote) ? notesSharp : notesb)
        .filter((el, i) => stencilMajor.some(j => i === j));
};
function getMelMinorScale (starterNote) {
  return getNotesByAccidental(
      starterNote, 
      sharpKeys.includes(starterNote) ? notesSharp : notesb)
        .filter((el, i) => stencilMelodicMinor.some(j => i === j));
};
function getHarmMinorScale (starterNote) {
  return getNotesByAccidental(
      starterNote, 
      sharpKeys.includes(starterNote) ? notesSharp : notesb)
        .filter((el, i) => stencilHarmonicMinor.some(j => i === j));
};
function getHarmMajorScale (starterNote) {
  return getNotesByAccidental(
      starterNote, 
      sharpKeys.includes(starterNote) ? notesSharp : notesb)
        .filter((el, i) => stencilHarmonicMajor.some(j => i === j));
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


function getMajChords(scale){
  let majChords = [];
  for(let i = 0, j = 0; i < 7, j < 7; i++, j++){
    majChords.push(scale[i].concat(majorChordSymbols[j]))
  }
  return majChords
}

console.log(getMajChords(getMajorScale('C')))