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
