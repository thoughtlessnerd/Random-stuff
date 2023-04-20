const softKeyCount = 7; // since its just an octave
const sharpKeyCount = 5;
const sharpArr = [1, 2, 4, 5, 6]; // to set after how many keys will the next sharp key will be placed
const softOctaves = [];
const sharpOctaves = [];
const alpha = "abcdefg"; // order of the keys according to the file name
const sharpAlpha = "acdfg";
const softKeyBinds = ["D", "F", "G", "H", "J", "K", "L"];
const sharpKeyBinds = ["R", "T", "U", "I", "O"];
const softKeys = document.querySelectorAll("div.W");
const sharpKeys = document.querySelectorAll("div.b");
const frequencyMap = {
    0: { c: 16.35, "c#": 17.32, D: 18.35 },
};

function setupSharpKeys() {
    const sharpKeys = document.querySelectorAll("div.b");
    let sharpCount = 0;

    sharpKeys.forEach((elem) => {
        elem.style.left = `${(100 / softKeyCount) * sharpArr[sharpCount]}%`;
        sharpCount++;
    });
}

function assignAudios() {
    for (let i = 0; i < softKeys.length; i++) {
        softKeys[i].addEventListener("mousedown", (e) => {
            softOctaves[i].currentTime = 0;
            softOctaves[i].play();
            softKeys[i].classList.add("active");
        });
        softKeys[i].addEventListener("mouseup", (e) => {
            softOctaves[i].pause();
            softKeys[i].classList.remove("active");
        });
    }

    for (let i = 0; i < sharpKeys.length; i++) {
        sharpKeys[i].addEventListener("mousedown", (e) => {
            sharpOctaves[i].currentTime = 0;
            sharpOctaves[i].play();
            sharpKeys[i].classList.add("active");
        });
        sharpKeys[i].addEventListener("mouseup", (e) => {
            sharpOctaves[i].pause();
            sharpKeys[i].classList.remove("active");
        });
    }
}

function loadAudios() {
    for (let i = 0; i < softKeyCount; i++) {
        softOctaves.push(new Audio(`./wav/${alpha[i]}4.mp3`));
        if (sharpAlpha.indexOf(alpha[i]) !== -1)
            sharpOctaves.push(new Audio(`./wav/${alpha[i]}4s.mp3`));
    }
}

function assignKeys() {
    document.addEventListener("keydown", (e) => {
        let index = softKeyBinds.indexOf(e.key.toUpperCase());
        if (index == -1) {
            index = sharpKeyBinds.indexOf(e.key.toUpperCase());
            if (index == -1) return;
            sharpOctaves[index].currentTime = 0;
            sharpOctaves[index].play();
            sharpKeys[index].classList.add("active");
        } else {
            softKeys[index].classList.add("active");
            softOctaves[index].currentTime = 0;
            softOctaves[index].play();
        }
    });

    document.addEventListener("keyup", (e) => {
        let index = softKeyBinds.indexOf(e.key.toUpperCase());
        if (index == -1) {
            index = sharpKeyBinds.indexOf(e.key.toUpperCase());
            if (index == -1) return;
            sharpKeys[index].classList.remove("active");
        } else {
            softKeys[index].classList.remove("active");
        }
    });
}

function intialization() {
    setupSharpKeys();
    loadAudios();
    assignAudios();
    assignKeys();
}

intialization();
