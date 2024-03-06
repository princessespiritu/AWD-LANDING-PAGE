document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    
    words.forEach(word => {
        word.addEventListener('click', function() {
            const gif = this.dataset.gif;
            displayGifModal(gif);
        });
    });

    function displayGifModal(gif) {

        const modal = document.createElement('div');
        modal.classList.add('modal');
        

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <img src="${gif}" alt="Sign Language GIF">
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);


        const closeBtn = modalContent.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });
    }
});
