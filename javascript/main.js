// Global variables
let btnTimer = document.querySelector('.btn-work');
let timer = document.querySelector('.time');
let msg = document.querySelector('.msg');
let pageTitle = document.querySelector('title');

let timerSpeed = 1000;

let audioSound = new Audio('../sound/end-sound.mp3');

let minutes = 24;
let seconds = 59;
let interval = -1;

btnTimer.addEventListener('click', function() {
    if (interval == -1) {
        interval = setInterval(function() {

            // Pomodoro timer active
            timer.innerHTML = minutes + ':' + seconds;
            btnTimer.innerText = `Stop`;

            // Adjust timer speed due to browser limitations // When the user is in another tab, the browser slow down the timer speed, the code below fixes this problem.
            if (document.hidden === true) {
                timerSpeed = 1000;
            }

            // Add an zero when seconds is under 10 = 21:09
            if (seconds < 10) {
                seconds = String(seconds).padStart(2, '0');
                timer.innerHTML = minutes + ':' + seconds;

                // When seconds reach 0
                if (seconds < 0) {
                    seconds = 0;
                    timer.innerHTML = minutes + ':' + seconds;
                    seconds = 59;
                    minutes--;
                    timer.innerHTML = minutes + ':' + seconds;
                }
            }

            // Display pomodoro time left in page TITLE
            pageTitle.innerText = `( ${minutes}:${seconds} ) | Pomodoro`;

            if (minutes < 0) {
                // End pomodoro timer
                minutes = 0;
                seconds = '00';
                timer.innerHTML = minutes + ':' + seconds;

                clearInterval(interval);
                interval = -1;

                // Final message
                audioSound.play();
                pageTitle.innerText = `TIME'S UP | Pomodoro`;
                msg.innerHTML = `Refresh the browser for more.`
                return btnTimer.innerText = `Time to rest.`;
            }

            seconds--;
        }, timerSpeed);

    } else {
        // Pause Pomodoro Timer
        btnTimer.innerText = `Back to work`;
        clearInterval(interval);
        interval = -1;
    }
});
