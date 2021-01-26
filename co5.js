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



function getModes (tonicScale) {
  let myModes = [];
  for (let i = 0; i < 6; i++) {
    tonicScale.push(tonicScale.shift());
    myModes.push(Array.from(tonicScale));
  };
  return myModes
};




// function makeMelodic(scale, n) {
//   if (scale.some(el => el.includes('#') === true && scale[n] !== 'C')) {
//     scale[n] = notesSharp[notesSharp.indexOf(scale[n]) - 1];

//   } else if (scale.some(el => el.includes('b') === true && scale[n] !== 'C')) {
//     scale[n] = notesb[notesb.indexOf(scale[n]) - 1];

//   } else if (scale.some(el => el.includes('#') === true)) {
//     scale[n] = notesSharp[notesSharp.indexOf(scale[n]) + 11];

//   } else {
//     scale[n] = notesb[notesb.indexOf(scale[n]) + 11];
//   };
//   return scale
// };

// console.log(makeMelodic(getNamedScale('C')), 2)

// let myNewScale = myScale.makeHarmonicMajor().makeMelodicMinor()

// function makeHarmonic(scale) {
//   scale = makeMelodic(scale, 2);
//   scale = makeMelodic(scale, 5);
//   return scale
// };
