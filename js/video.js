var video;

function getVid() {
    video = document.querySelector("#myVideo");
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
    video.currentTime = video.currentTime + 60
    console.log("Current location is " + video.currentTime);
}

function mute() {
    if (video.muted) {
        video.muted = false;
        console.log("Unmuted");
    } else {
        video.muted = true;
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