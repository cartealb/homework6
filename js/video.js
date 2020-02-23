var video;

function getVid() {
    video = document.querySelector("#myVideo");
    video.preload = "auto"
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    console.log(video)

}

function playVid() {
    video.play();

    console.log("Play Video");
}

function pauseVid() {

    video.pause();

    console.log("Pause Video");
}

function decreaseSpeed() {
    video.playbackRate = video.playbackRate - (video.playbackRate * .20);
    console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
    video.playbackRate = video.playbackRate + (video.playbackRate * .25);
    console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
    if (!video.ended) {
        video.currentTime = video.currentTime + 60;
    } else {
        video.currentTime = 0;
    }

    console.log("Current location is " + video.currentTime);
}

function mute() {
    if (video.muted) {
        video.muted = false;
        document.querySelector('#mute').innerHTML = "Mute";
        console.log("Unmuted");
    } else {
        video.muted = true;
        document.querySelector('#mute').innerHTML = "Unmute";
        console.log("Muted");
    }


}

function changeVolume() {
    video.volume = document.querySelector("#volumeSlider").value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    console.log("Volume is " + video.volume);
}


function gray() {
    video.style = "filter: grayscale(100%)";
    console.log("In grayscale")
}

function color() {
    video.style.filter = null;
    console.log("In color")
}