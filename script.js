var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

function func1(){
    document.getElementById("right_banner").style.backgroundImage="url('images/Tejashwi-Yadav-salil-bera11.jpg')";
    document.getElementById("card_div_1").innerHTML = "his is How  a Young Vision can change the BIHAR's fate.";
    document.getElementById("card_div_2").innerHTML = "This is a demo text and is used for only demonstration purpose only.This is a demo text and is used for only demonstration purpose only.This is a demo text and is used for only demonstration purpose only.This is a demo text and is used for only demonstration purpose only.";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
}
function func2(){
    document.getElementById("right_banner").style.backgroundImage="url(images/Lalu-Prasad-Yadav-Biography.webp)";
    document.getElementById("card_div_1").innerHTML = "RJD President Lalu Prasad  yadav's Vision for Bihar in 2030.";
    document.getElementById("card_div_2").innerHTML = "Lalu Prasad Yadav's influence on Bihar politics is undeniable. He championed social justice, empowering marginalized communities. Despite legal hurdles, his legacy shapes the state's political landscape, leaving a lasting imprint on its socio-economic fabric.";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
}
function func3(){
    document.getElementById("right_banner").style.backgroundImage="url(images/lalu.jpg)";
    document.getElementById("card_div_1").innerHTML = "Lalu Prasad Yadav's Impact on Bihar Politics.";
    document.getElementById("card_div_2").innerHTML = "Lalu Prasad Yadav is an Indian politician known for his charismatic leadership and controversial career. He served as the Chief Minister of Bihar and played a prominent role in regional politics, despite facing legal and ethical challenges throughout his tenure.";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
}
function func4(){
    document.getElementById("right_banner").style.backgroundImage="url(images/tejashwi-yadav-1604849739.jpg)";
    document.getElementById("card_div_1").innerHTML = "This is How  a Young Vision can change the BIHAR's fate.";
    document.getElementById("card_div_2").innerHTML = "This is a demo text and is used for only demonstration purpose only.This is a demo text and is used for only demonstration purpose only.This is a demo text and is used for only demonstration purpose only.This is a demo text and is used for only demonstration purpose only.";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
}



function callFunctions() {
    func1();
    setTimeout(function() {
        func2();
        setTimeout(function() {
            func3();
            setTimeout(function() {
                func4();
                // Call the sequence again after 5 seconds
                callFunctions();
            }, 5000); // Wait 5 seconds before calling function4
        }, 5000); // Wait 5 seconds before calling function3
    }, 5000); // Wait 5 seconds before calling function2
}

// Start the infinite loop
callFunctions();

const videoIframe = document.getElementById('video-iframe');

// Add event listener to reset video when it ends
videoIframe.addEventListener('ended', function() {
    videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});






const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const bubbles = document.querySelectorAll('.bubble');

let currentIndex = 0;
let interval;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  bubbles.forEach((bubble, index) => {
    bubble.classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 4;
  updateCarousel();
}

function startInterval() {
  interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopInterval() {
  clearInterval(interval);
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 4) % 4;
  updateCarousel();
  stopInterval();
  startInterval();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopInterval();
  startInterval();
});

bubbles.forEach((bubble, index) => {
  bubble.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
    stopInterval();
    startInterval();
  });
});

// Start the interval when the page loads
startInterval();
