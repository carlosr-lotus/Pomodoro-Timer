// Get main html BODY
let mainBody = document.querySelector('body');

// Get user current system 
let systemHours = new Date().getHours();

// Active dark mode at 18h till 6h
if(systemHours >= 18 || systemHours < 6) {
    btnTimer.style.color = 'var(--Dark-Theme)';
    mainBody.style.backgroundColor = 'var(--Dark-Theme)';
}