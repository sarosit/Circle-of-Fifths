let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");




// document.getElementById('C').addEventListener('mouseenter', (e) => {
//     let x = e.clientX;
//     let y = e.clientY;
//     toggle.style.visibility = "visible";
//     toggle.style.left = x + 'px';
//     toggle.style.top = y + 'px';
// });
// document.getElementById('C').addEventListener('mouseleave', (e) => {
//     toggle.style.visibility = "hidden";
// });

// document.getElementById('content-toggle').addEventListener('mouseenter', (e) => {
//     toggle.style.visibility = "visible";
// });
// document.getElementById('content-toggle').addEventListener('mouseleave', (e) => {
//     toggle.style.visibility = "hidden";
// });

// function displayModes(el){
//     for (let i = 0; i < 7; i++) {
//         let modeDisplay = document.createElement("SPAN");
//         modeDisplay.innerHTML = el;
//         document.getElementsByClassName('mode').appendChild(modeDisplay);
//     };
// }


let circle = document.getElementsByClassName("segment");


// circle.addEventListener("click", function () {

//     let note = this.id;
//     let tonicScale = getNamedScale(note);
//     scaleBox = document.createElement("div");
//     contentScale.appendChild(scaleBox);

//     contentScale.style.visibility = (contentScale.dataset.toggled ^= 1) ? "visible" : "hidden";
//     contentChord.style.visibility = "hidden"
//     userMess.style.visibility = "hidden"

//     for (let i = 0; i < 7; i++) {
//         let parentScale = document.createElement("SPAN");
//         parentScale.innerHTML = tonicScale[i];
//         scaleBox.appendChild(parentScale);
//     };
// }, { once: true });


$(".segment").one('click', function () {
    let note = this.id;
    let tonicScale = getNamedScale(note);
    scaleBox = document.createElement("div");
    contentScale.appendChild(scaleBox);
    contentScale.style.visibility = (contentScale.dataset.toggled ^= 1) ? "visible" : "hidden";
    contentChord.style.visibility = "hidden"
    userMess.style.visibility = "hidden"
    for (let i = 0; i < 7; i++) {
        let parentScale = document.createElement("SPAN");
        parentScale.innerHTML = tonicScale[i];
        scaleBox.appendChild(parentScale);
    };

});




// circle.addEventListener("click", function () {
//     contentScale.style.visibility = (contentScale.dataset.toggled ^= 1) ? "visible" : "hidden";
//     contentChord.style.visibility = "hidden"
//     userMess.style.visibility = "hidden"
// });

toggleChord.addEventListener("click", function () {
    contentChord.style.visibility = (contentChord.dataset.toggled ^= 1) ? "visible" : "hidden";
    contentScale.style.visibility = "hidden"
    userMess.style.visibility = "hidden"
});
