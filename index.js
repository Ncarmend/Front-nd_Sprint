let word = 'prout'.split('');

const inter = setInterval(() => {
    console.log(word[0]);
    word = word.slice(1);

    if (!word.length) { clearInterval(inter); }
}, 1000);

let times = 0;
function typwrite() {
    //   console.log([${ getElapsedTime() }])
    console.log("secondes écoulées " + times + " times!");
    times++;
    const tps1 = 20;
    const tps2 = 40;
    tps3 = 60;
    const nextCall = Math.floor(Math.random() * 1000); // Random delay until heyYou() is called again
    setTimeout(typwrite, nextCall);
    if (times == tps1) {
        console.log("" + times + "1 minute écoulée")
    }
    if (times == tps2) {
        console.log("" + times + "2 minute écoulée")
    }
    if (times >= tps3) { clearInterval(times); }
}
setInterval(typwrite, 10000);

//1bis111111111
const startTim = 0;

function chrono() {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    const sec = diff.getSeconds()
    const min = diff.getMinutes()
    const hr = diff.getHours() - 1
    if (min < 10) {
        min = "0" + min
    }
    if (sec === 60) {
        alert('vous etez sur le site depuis 1 minute')
    }
    if (sec === 120) {
        alert('vous etez sur le site depuis 2 minutes')
    }
    else if (sec < 10) {
        sec = "0" + sec
    }

    document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
    timerID = setTimeout("chrono()", 10)
}
///2222222222222222222222
const startTime = 0

function chrono() {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    const sec = diff.getSeconds()
    const min = diff.getMinutes()
    const hr = diff.getHours() - 1
    if (min < 10) {
        min = "0" + min
    }
    if (sec === 60) {
        alert('vous etez sur le site depuis 1 minute')
    }
    if (sec === 120) {
        alert('vous etez sur le site depuis 2 minutes')
    }
    else if (sec < 10) {
        sec = "0" + sec
    }

    document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
    timerID = setTimeout("chrono()", 10)
}

