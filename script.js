let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");

$(".segment").click(function () {
    userMess.style.visibility = 'hidden'
    let note = this.id;
    let tonicScale = getNamedScale(note);
    let scaleBox = document.createElement("div");
    scaleBox.id = "ionian"
    contentScale.appendChild(scaleBox);
    let modeArray = getModes(note);
    

    for (let i = 0; i < 7; i++) {
        let parentScale = document.createElement("SPAN");
        parentScale.innerHTML = tonicScale[i];
        scaleBox.appendChild(parentScale);
    };


    for (let i = 0; i < 6; i++) {
        let modeBox = document.createElement("div");
        modeBox.className = "modeSpan"
        modeBox.id = "mode"+ (i+1);
        contentScale.appendChild(modeBox);
        let currentMode = modeArray[i]
        for (let i = 0; i < 7; i++){
            let modeSpan = document.createElement("SPAN");
            modeSpan.innerHTML = currentMode[i];
            modeBox.appendChild(modeSpan);
        }
    };

});