ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.card', {
    delay: 500,
    origin: 'top'
});

let scrollContainer = document.querySelector(".div0-5");
let backbtu = document.getElementById("backbut");
let nextbtu = document.getElementById("nextbut");
scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
nextbtu.addEventListener("click",()=>{
    scrollContainer.scrollLeft += 900;
});
backbtu.addEventListener("click",()=>{

    scrollContainer.scrollLeft -= 900;
});