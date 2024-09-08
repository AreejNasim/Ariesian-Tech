let stopwatchDisplay = document.querySelector('.stopwatch-display');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let startTime, updatedTime;
let isRunning = false;
let interval;
let elapsedTime = 0;

// Function to update the display
function updateDisplay() {
    let time = new Date(elapsedTime);
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    let milliseconds = String(Math.floor(time.getMilliseconds() / 10)).padStart(2, '0');

    stopwatchDisplay.innerText = `${minutes}:${seconds}:${milliseconds}`;
}

// Start the stopwatch
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;

        interval = setInterval(() => {
            updatedTime = Date.now() - startTime;
            elapsedTime = updatedTime;
            updateDisplay();
        }, 10);
    }
});

// Stop the stopwatch
stopButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
});
