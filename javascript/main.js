// Global variables
let btnTimer = document.querySelector('.btn-work');
let timer = document.querySelector('.time');
let msg = document.querySelector('.msg');
let pageTitle = document.querySelector('title');

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

            // Display pomodoro time left in page TITLE
            pageTitle.innerText = `( ${minutes}m ) | Pomodoro`;

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
        }, 1000);

    } else {
        // Pause Pomodoro Timer
        btnTimer.innerText = `Back to work`;
        clearInterval(interval);
        interval = -1;
    }
})
