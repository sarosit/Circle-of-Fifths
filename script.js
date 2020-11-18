let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");

let notesMaj = { 1: 'C', 2: 'G', 3: 'D', 4: 'A', 5: 'E', 6: 'B', 7: 'F♯', 8: 'C♯', 9: 'G♯', 10: 'E♭', 11: 'B♭', 12: 'F' };
let notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
let stencilMaj = [0, 2, 4, 5, 7, 9, 11];

let getNamedScale = function (starterNote){
  let startingIndex = notes.indexOf(starterNote);
  i = 0;
  let currentNote = starterNote;
  let myNewScale = [];
  do {
    myNewScale.push(currentNote);
    currentNote = notes[(startingIndex  + ++i)%12];
    
  } while(currentNote != starterNote)
    return myNewScale;
}

notes.forEach((x)=>{
    console.log(getNamedScale(x).filter((element,i)=>stencilMaj.some(j => i === j)));
});








document.getElementById('C').addEventListener('mouseenter', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    toggle.style.visibility = "visible";
    toggle.style.left = x + 'px';
    toggle.style.top = y + 'px';
});
document.getElementById('C').addEventListener('mouseleave', (e) => {
    toggle.style.visibility = "hidden";
});

document.getElementById('content-toggle').addEventListener('mouseenter', (e) => {
    toggle.style.visibility = "visible";
});
document.getElementById('content-toggle').addEventListener('mouseleave', (e) => {
    toggle.style.visibility = "hidden";
});



var parentScale = document.createElement("SPAN");
parentScale.innerHTML = getNamedScale('C').filter((element,i)=>stencilMaj.some(j => i === j));
document.getElementById('ionian').appendChild(parentScale);



toggleScale.addEventListener("click", function () {
    contentScale.style.visibility = (contentScale.dataset.toggled ^= 1) ? "visible" : "hidden";
    contentChord.style.visibility = "hidden"
    userMess.style.visibility = "hidden"
});

toggleChord.addEventListener("click", function () {
    contentChord.style.visibility = (contentChord.dataset.toggled ^= 1) ? "visible" : "hidden";
    contentScale.style.visibility = "hidden"
    userMess.style.visibility = "hidden"
});