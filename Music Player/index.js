let progress1 = document.getElementById("progress1");
let song1  = document.getElementById("song1");
let ctrlIcon1 = document.getElementById("ctrlIcon1");

let progress2 = document.getElementById("progress2");
let song2  = document.getElementById("song2");
let ctrlIcon2 = document.getElementById("ctrlIcon2");

let progress3 = document.getElementById("progress3");
let song3  = document.getElementById("song3");
let ctrlIcon3 = document.getElementById("ctrlIcon3");

// Function to handle play and pause for any song
function playPause(songId, ctrlIconId, progressId) {
    let song = document.getElementById(songId);
    let ctrlIcon = document.getElementById(ctrlIconId);
    let progress = document.getElementById(progressId);

    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }

    // Progress bar update
    song.ontimeupdate = function() {
        progress.value = song.currentTime;
    };

    // Manually change progress
    progress.onchange = function() {
        song.currentTime = progress.value;
    };
}

// Set the maximum value of progress based on song duration
song1.onloadedmetadata = function() {
    progress1.max = song1.duration;
};

song2.onloadedmetadata = function() {
    progress2.max = song2.duration;
};

song3.onloadedmetadata = function() {
    progress3.max = song3.duration;
};

// Update progress bar while the song is playing
if (song1.play) {
    setInterval(() => {
        progress1.value = song1.currentTime;
    }, 500);
}

if (song2.play) {
    setInterval(() => {
        progress2.value = song2.currentTime;
    }, 500);
}

if (song3.play) {
    setInterval(() => {
        progress3.value = song3.currentTime;
    }, 500);
}

// Update the song current time based on progress bar position
progress1.onchange = function() {
    song1.currentTime = progress1.value;
    song1.play();
    ctrlIcon1.classList.remove("fa-play");
    ctrlIcon1.classList.add("fa-pause");
};

progress2.onchange = function() {
    song2.currentTime = progress2.value;
    song2.play();
    ctrlIcon2.classList.remove("fa-play");
    ctrlIcon2.classList.add("fa-pause");
};

progress3.onchange = function() {
    song3.currentTime = progress3.value;
    song3.play();
    ctrlIcon3.classList.remove("fa-play");
    ctrlIcon3.classList.add("fa-pause");
};
