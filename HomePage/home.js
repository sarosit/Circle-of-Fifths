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

// document.getElementById('scales').addEventListener('onclick', (e) => {
//     document.getElementById('.dropdown-scale-display').style.visibility = 'visible';
//     document.getElementById('.dropdown-chord-display').style.visibility = 'hidden';
//     document.getElementById('.user-message').style.visibility = 'hidden';
// });

// document.getElementById('chords').addEventListener('onclick', (e) => {
//     document.getElementById('.dropdown-chord-display').style.visibility = 'visible';
//     document.getElementById('.dropdown-scale-display').style.visibility = 'hidden';
//     document.getElementById('.user-message').style.visibility = 'hidden';
// });




var toggle  = document.getElementById("scales");
var content = document.getElementById(".dropdown-scale-display");

toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});