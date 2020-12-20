

const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notesb = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];


const notes = [{
  "Name" : "C"
},
{
  "Name" : "C#",
  "FlatName" : "Db"
},
{
  "Name" : "D"
},
{
  "Name" : "D#",
  "FlatName" : "Eb"
},
{
  "Name" : "E"
},
{
  "Name" : "F"
},
{
  "Name" : "F#",
  "FlatName" : "Gb"
},
{
  "Name" : "G"
},
{
  "Name" : "G#",
  "FlatName" : "Ab"
},
{
  "Name" : "A"
},
{
  "Name" : "A#",
  "FlatName" : "Bb"
},
{
  "Name" : "B"
}];


const sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'A#', 'G#', 'F#', 'C#', 'D#'];
const stencilMaj = [0, 2, 4, 5, 7, 9, 11];

function getNamedScale (starterNote) {
  return getNotesByAccidental(
      starterNote, 
      sharpKeys.includes(starterNote) ? notesSharp : notesb)
        .filter((el, i) => stencilMaj.some(j => i === j));
};

function getNotesByAccidental(starterNote , accidental){
  i = 0;
  let myNewScale = [];
  let currentNote = starterNote;
  let startingIndex = accidental.indexOf(starterNote);
    do {
      myNewScale.push(currentNote);
      currentNote = accidental[(startingIndex + ++i) % 12];

    } while (currentNote != starterNote)
    return myNewScale;
};

function getMajScales() {
  let arrOfMaj = [];
  for (let i of notesSharp) {
    arrOfMaj.push(getNamedScale(i));
  };
  for (let i of notesb) {
    arrOfMaj.push(getNamedScale(i));
  };
  arrOfMaj.pop()
  return arrOfMaj;
};

const getModes = function (starterNote) {
  let myModes = [];
  let tonicScale = getNamedScale(starterNote);
  for (let i = 0; i < 6; i++) {

    tonicScale.push(tonicScale.shift());
    myModes.push(Array.from(tonicScale));
  };
  return myModes
};

let modes = new Map()

for (let i = 0; i < 6; i++) {
  modes.set(i, getModes('C')[i])
};

function makeMelodic(scale, n) {
  if (scale.some(el => el.includes('#') === true && scale[n] !== 'C')) {
    scale[n] = notesSharp[notesSharp.indexOf(scale[n]) - 1];

  } else if (scale.some(el => el.includes('b') === true && scale[n] !== 'C')) {
    scale[n] = notesb[notesb.indexOf(scale[n]) - 1];

  } else if (scale.some(el => el.includes('#') === true)) {
    scale[n] = notesSharp[notesSharp.indexOf(scale[n]) + 11];

  } else {
    scale[n] = notesb[notesb.indexOf(scale[n]) + 11];
  };
  return scale
};

function makeHarmonic(scale) {
  scale = makeMelodic(scale, 2);
  scale = makeMelodic(scale, 5);
  return scale
}




