const button = document.getElementById('_button');
const border = document.querySelector('.border');
const allTextElements = document.querySelectorAll('.border *');

button.addEventListener('click', function() {
    border.style.backgroundColor = 'white';
    border.style.borderColor = 'darkred';
    allTextElements.forEach(element => {
        element.style.color = 'darkred';
    });
});

button.addEventListener('mouseover', function() {
    button.style.color = 'white';
    button.style.borderColor = 'lightpink';
});

button.addEventListener('mouseout', function() {
    button.style.color = 'white';
    button.style.borderColor = 'black';
    border.style.outline = '1px solid black';
});