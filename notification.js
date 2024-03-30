function notify(message, duration = 3000) {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');
    const timeoutBar = document.getElementById('notificationTimeout');

    messageElement.textContent = message;
    notification.classList.remove('hidden');

    timeoutBar.style.width = '100%';
    timeoutBar.style.transition = `width ${duration}ms linear`;

    setTimeout(() => {
        timeoutBar.style.width = '0%';
    }, 10);

    setTimeout(() => {
        notification.classList.add('hidden');
    }, duration);
}
