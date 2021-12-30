const cylinder = document.querySelector('.cylinder');
const articles = cylinder.querySelectorAll('article');

for (article of articles) {
    article.addEventListener('mouseenter', e => {
        cylinder.style.animationPlayState = 'paused';
    });

    article.addEventListener('mouseleave', e => {
        cylinder.style.animationPlayState = 'running';
    });
}
