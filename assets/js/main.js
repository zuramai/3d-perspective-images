let app = document.getElementById('app');
let scrollAmount = document.body.clientWidth*1/3;
let rows = document.querySelectorAll('.row');

document.querySelector('.slide-right').addEventListener('click', (e) => {
    let currentPage = parseInt(app.getAttribute('data-page'));
    let targetPixel = (currentPage+1) * scrollAmount;

    for(let i = 0; i < rows.length; i++) {
        rows[i].style.transform = "rotate3d(-1,.5,0,-10deg) translateX(-"+targetPixel+"px)"
    }
    app.setAttribute('data-page', currentPage+1);
})
document.querySelector('.slide-left').addEventListener('click', (e) => {
    let currentPage = parseInt(app.getAttribute('data-page'));
    let targetPixel = (currentPage-1) * scrollAmount;
    if(currentPage == 0) return;
    for(let i = 0; i < rows.length; i++) {
        rows[i].style.transform = "rotate3d(-1,.5,0,-10deg) translateX(-"+targetPixel+"px)"
    }
    app.setAttribute('data-page', currentPage-1);
})


document.body.addEventListener('mousemove', (e) => {
    let mouseLocation = {
        x: e.clientX,
        y: e.clientY,
    }
})