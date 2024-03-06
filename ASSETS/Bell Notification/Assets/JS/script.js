const button = document.getElementById('_button');
const notification = document.getElementById('_notification');

button.addEventListener('click', () => {
    let counter = Number(notification.getAttribute('data-count')) || 0; 
    counter++; 
    notification.setAttribute('data-count', counter); 
    notification.classList.add('count');
    notification.classList.add('notify');

    button.classList.add('active');
});

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
    button.classList.remove('active');
});
