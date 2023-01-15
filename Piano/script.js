const keyCount = 7; // since its just an octave
const softOctaves = [];
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const keys = ["D", "F", "G", "H", "J", "K", "L"];

function setupSharpKeys()
{
    const sharpKeys = document.querySelectorAll("div.b");
    const sharpArr = [1, 2, 4, 5, 6];
    let sharpCount = 0;
    
    sharpKeys.forEach(elem => {
        elem.style.left = `${(100/keyCount)*sharpArr[sharpCount]}%`;
        sharpCount++;
    });
}

function assignAudios()
{
    const softKeys = document.querySelectorAll('div.W');
    for(let i = 0; i < softKeys.length; i++)
    {
        softKeys[i].addEventListener('mousedown', (e) => {
            softOctaves[i].currentTime = 0;
            softOctaves[i].play();
            console.log('played');
        })
        softKeys[i].addEventListener('mouseup', (e) => {
            softOctaves[i].pause();
            console.log('paused');
        })
    }
}

function loadAudios()
{
    for(let i = 0; i < keyCount; i++)
    {
        softOctaves.push(new Audio(`./wav/${alpha[i]}1.wav`));
    }
}

function assignKeys()
{
    document.addEventListener('keydown', (e) => {
        switch(e.key.toUpperCase())
        {
            case keys[0]:
                softOctaves[0].currentTime = 0;
                softOctaves[0].play();
            case keys[1]:
                softOctaves[1].currentTime = 0;
                softOctaves[1].play();
            case keys[2]:
                softOctaves[2].currentTime = 0;
                softOctaves[2].play();
            case keys[3]:
                softOctaves[3].currentTime = 0;
                softOctaves[3].play();
            case keys[4]:
                softOctaves[4].currentTime = 0;
                softOctaves[4].play();
            case keys[5]:
                softOctaves[5].currentTime = 0;
                softOctaves[5].play();
            case keys[6]:
                softOctaves[6].currentTime = 0;
                softOctaves[6].play();
        }
        // console.log('pressed ' + e.key)
    })
}

setupSharpKeys();
loadAudios();
assignAudios();