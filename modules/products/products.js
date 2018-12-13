setTimeout(() => {
let imageHeight = document.querySelector('.pro-pic img').scrollHeight;
document.querySelector('.pro').style.minHeight = imageHeight;

window.addEventListener('resize', function() {
let imageHeight = document.querySelector('.pro-pic img').scrollHeight;
document.querySelector('.pro').style.minHeight = imageHeight;
});

}, 300);
