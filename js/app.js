  



AOS.init();


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 10, // offset (in px) from the original trigger point
    delay: 800, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });






  

// // typing effect

// var TxtRotate = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
//   };
  
//   TxtRotate.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];
  
//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
  
//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
//     var that = this;
//     var delta = 300 - Math.random() * 100;
  
//     if (this.isDeleting) { delta /= 2; }
  
//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }
  
//     setTimeout(function() {
//       that.tick();
//     }, delta);
//   };
  
//   window.onload = function() {
//     var elements = document.getElementsByClassName('txt-rotate');
//     for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-rotate');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtRotate(elements[i], JSON.parse(toRotate), period);
//       }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//     document.body.appendChild(css);
//   };


 
  


  
// Date

document.addEventListener('DOMContentLoaded', function() {
  dates();
})

function dates() {

  // get year
  const year = new Date().getUTCFullYear();

  // get month
  const month = new Date().getMonth()

  if(month === 0) {
      document.querySelector('.insert-date').innerHTML = `Jan ${year}`;
  }else if(month === 1) {
      document.querySelector('.insert-date').innerHTML = `Feb ${year}`;
  }else if(month === 2) {
      document.querySelector('.insert-date').innerHTML = `Mar ${year}`;
  }else if(month === 3) {
      document.querySelector('.insert-date').innerHTML = `Apr ${year}`;
  }else if(month === 4) {
      document.querySelector('.insert-date').innerHTML = `May ${year}`;
  }else if(month === 5) {
      document.querySelector('.insert-date').innerHTML = `Jun ${year}`;
  }else if(month === 6) {
      document.querySelector('.insert-date').innerHTML = `Jul ${year}`;
  }else if(month === 7) {
      document.querySelector('.insert-date').innerHTML = `Aug ${year}`;
  }else if(month === 8) {
      document.querySelector('.insert-date').innerHTML = `Sep ${year}`;
  }else if(month === 9) {
      document.querySelector('.insert-date').innerHTML = `Oct ${year}`;
  }else if(month === 10) {
      document.querySelector('.insert-date').innerHTML = `Nov ${year}`;
  }else if(month === 11) {
      document.querySelector('.insert-date').innerHTML = `Dec ${year}`;
  }
}












// typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["A Professional Graphic Designer.", "The UI/UX Designer."];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});