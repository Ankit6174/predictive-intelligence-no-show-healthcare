const cursor = document.getElementById('cursor-circle');
const text = document.querySelector('.navbar-icon');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});