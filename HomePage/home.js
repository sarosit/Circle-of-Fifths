// document.getElementById('segC').addEventListener('mouseover', mouseOver);
// document.getElementById('segC').addEventListener('onclick', onclick);

// function mouseOver (e) {
//     document.getElementById("content-toggle").style.visibility = "visible";
// }

// function onclick() {
//     document.getElementById("content-toggle").style.visibility = "hidden";
//   }



document.getElementById('segC').addEventListener('mouseenter', (e) => {
    let toggle = document.getElementById('content-toggle');
    let x = e.clientX;
    let y = e.clientY;
    toggle.style.visibility = "visible";
    toggle.style.left = x + 'px';
    toggle.style.top = y + 'px';
});

document.getElementById('segC').addEventListener('mouseleave', (e) => {
    let toggle = document.getElementById('content-toggle');
    toggle.style.visibility = "hidden";
});

document.getElementById('content-toggle').addEventListener('mouseenter', (e) => {
    let toggle = document.getElementById('content-toggle');
    toggle.style.visibility = "visible";
});

document.getElementById('content-toggle').addEventListener('mouseleave', (e) => {
    let toggle = document.getElementById('content-toggle');
    toggle.style.visibility = "hidden";
});





var toggleScale  = document.getElementById("scales");
var contentScale = document.getElementById("scale-display");

toggleScale.addEventListener("click", function() {
    contentScale.style.display = (contentScale.dataset.toggled ^= 1) ? "grid" : "none";
    contentChord.style.display = "none"
    document.getElementById("user-message").style.visibility = "hidden"
});

var toggleChord  = document.getElementById("chords");
var contentChord = document.getElementById("chord-display");

toggleChord.addEventListener("click", function() {
    contentChord.style.display = (contentChord.dataset.toggled ^= 1) ? "grid" : "none";
    contentScale.style.display = "none"
    document.getElementById("user-message").style.visibility = "hidden"
});

// var buttonScale = document.getElementById('scales');
// var buttonChord = document.getElementById('chords');

// buttonScale.onclick = function() {
//     var divScale = document.getElementById('scale-display');
//     var divMessage = document.getElementById('user-message')
//     if (divScale.style.display !== 'none') {
//         divScale.style.display = 'none';
        
//     }
//     else {
//         divScale.style.display = 'grid';
//         divChord.style.display = 'none';
//         divMessage.style.visibility = 'hidden'
//     }
// };

// buttonChord.onclick = function() {
//     var divChord = document.getElementById('chord-display');
//     var divMessage = document.getElementById('user-message')
//     if (divChord.style.display !== 'none') {
//         divChord.style.display = 'none';
        
//     }
//     else {
//         divChord.style.display = 'grid';   
//     }
//     divScale.style.display = 'none';
//     divMessage.style.visibility = 'hidden'
// };