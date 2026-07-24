

// Live Date & Time
function updateTime() {
    const now = new Date();
    document.getElementById("datetime").innerHTML =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = "☀ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
};

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// Auto Scrolling Notice Board
const noticeList = document.getElementById("noticeList");

let scrollPosition = 0;

setInterval(() => {

    scrollPosition++;

    noticeList.style.transform = `translateY(-${scrollPosition}px)`;
    noticeList.style.transition = "transform 0.05s linear";

    if(scrollPosition >= noticeList.scrollHeight / 2){
        scrollPosition = 0;
    }

},40);
// Automatic Image Slider

let slideIndex = 0;
showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("slides");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,3000); // Change image every 3 seconds
}
function changeSlide(n){

    slideIndex += n - 1;

    if(slideIndex < 0){
        slideIndex = document.getElementsByClassName("slides").length - 1;
    }

    if(slideIndex >= document.getElementsByClassName("slides").length){
        slideIndex = 0;
    }

    let slides = document.getElementsByClassName("slides");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideIndex].style.display="block";
}
// Animated Counter

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(count < target){
            counter.innerText = count + increment;
            setTimeout(updateCounter,20);
        }else{
            counter.innerText = target;
        }

    };

    updateCounter();

});// Photo Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", function(){

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;

    });

});

closeBtn.onclick = function(){

    lightbox.style.display = "none";

};

lightbox.onclick = function(e){

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }

};