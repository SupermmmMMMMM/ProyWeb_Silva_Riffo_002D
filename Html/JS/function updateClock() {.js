function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const clockElement = document.getElementById('clock');
    const messageElement = document.getElementById('mensaje');

    clockElement.textContent = formattedTime;

    if (hours >= 21 ||hours<=11) {
        clockElement.classList.add('closed');
        messageElement.textContent = 'Cerrado';
        messageElement.classList.add('closed');
        messageElement.classList.remove('open');
    } else {
        clockElement.classList.remove('closed');
        messageElement.textContent = 'Abierto';
        messageElement.classList.remove('closed');
        messageElement.classList.add('open');
    }
}

setInterval(updateClock, 1000);
updateClock();