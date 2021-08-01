
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