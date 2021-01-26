let toggleChord = document.getElementById("chords");
let contentChord = document.getElementById("chord-display");
let toggleScale = document.getElementById("scales");
let contentScale = document.getElementById("scale-display");
let toggle = document.getElementById("content-toggle");
let userMess = document.getElementById("user-message");

function makeScales(tonicScale){
    let scaleBox = document.createElement("div");
    scaleBox.id = "ionian"
    contentScale.appendChild(scaleBox);
    for (let i = 0; i < 7; i++) {
        let parentScale = document.createElement("div");
        parentScale.className = 'note-container'
        parentScale.innerHTML = tonicScale[i];
        scaleBox.appendChild(parentScale);
    }

    let modeArray = getModes(tonicScale);

    for (let i = 0; i < 6; i++) {
        let modeBox = document.createElement("div");
        modeBox.className = "modeDiv"
        modeBox.id = "mode" + (i + 1);
        contentScale.appendChild(modeBox);
        let currentMode = modeArray[i]
        for (let i = 0; i < 7; i++) {
            let modeDiv = document.createElement("div");
            modeDiv.className = 'note-container'
            modeDiv.innerHTML = currentMode[i];
            modeBox.appendChild(modeDiv);
        }
    }  
}

$(".segment").click(function () {

    $("#ionian").remove();
    $(".modeDiv").remove();
    userMess.style.visibility = 'hidden'
    let note = this.id;
    let tonicScale = getMajorScale(note);
    makeScales(tonicScale)

});

function createHarmony(tonicScale) {

    $("#ionian").remove();
    $(".modeDiv").remove();

    makeScales(tonicScale)
}
function getRootNote(){
    return document.getElementsByClassName('note-container')[0].innerHTML;
}
$("#melMinor").click(() => createHarmony(getMelMinorScale(getRootNote())));
$("#harmMinor").click(() => createHarmony(getHarmMinorScale(getRootNote())));
$("#harmMajor").click(() => createHarmony(getHarmMajorScale(getRootNote())));
$("#major").click(() => createHarmony(getMajorScale(getRootNote())));