let toggleChord  = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale  = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");

document.getElementById('segC').addEventListener('mouseenter', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    toggle.style.visibility = "visible";
    toggle.style.left = x + 'px';
    toggle.style.top = y + 'px';
});
document.getElementById('segC').addEventListener('mouseleave', (e) => {
    toggle.style.visibility = "hidden";
});
document.getElementById('content-toggle').addEventListener('mouseenter', (e) => {
    toggle.style.visibility = "visible";
});
document.getElementById('content-toggle').addEventListener('mouseleave', (e) => {
    toggle.style.visibility = "hidden";
});
toggleScale.addEventListener("click", function() {
    contentScale.style.display = (contentScale.dataset.toggled ^= 1) ? "grid" : "none";
    contentChord.style.display = "none"
    document.getElementById("user-message").style.visibility = "hidden"
});
toggleChord.addEventListener("click", function() {
    contentChord.style.display = (contentChord.dataset.toggled ^= 1) ? "grid" : "none";
    contentScale.style.display = "none"
    document.getElementById("user-message").style.visibility = "hidden"
});





let notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
let stencil = [0, 2, 4, 5, 7, 9, 11];

console.log(
    notes.filter((el,i)=>stencil.some(j => i === j))
)