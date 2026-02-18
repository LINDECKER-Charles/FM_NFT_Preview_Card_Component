const image = document.getElementById('image');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

image.addEventListener('click', () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});