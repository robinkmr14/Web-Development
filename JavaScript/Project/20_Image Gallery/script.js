

let scrollBar = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');


scrollBar.addEventListener('wheel', (evnt)=>{
    evnt.preventDefault();
    scrollBar.scrollLeft += evnt.deltaY;
    scrollBar.style.scrollBehavior = "auto";
});

nextBtn.addEventListener('click', ()=>{
    scrollBar.style.scrollBehavior = "smooth";
    scrollBar.scrollLeft += 900;
});

backBtn.addEventListener('click', ()=>{
    scrollBar.style.scrollBehavior = "smooth";
    scrollBar.scrollLeft -= 900;
});