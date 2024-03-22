function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../img/filmes/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.querySelector(`.content.${title}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}