
/* Theatre */
var tc1 = document.querySelector('.theatre-carousel-1');
var flkty_tc1 = new Flickity( tc1, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false,
});

/* Commercial - Ad Ticker #1 */
var cc1 = document.querySelector('.commercial-carousel-1');
var flkty_cc1 = new Flickity( cc1, {
    selectedAttraction: 0.02,
    lazyLoad: true,
    imagesLoaded: true,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    draggable: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});

/* Continue playing Ad Ticker #1 after user interaction */
flkty_cc1.on('staticClick', function() {
    flkty_cc1.playPlayer();
});
flkty_cc1.on('dragEnd', function() {
    flkty_cc1.playPlayer();
});

/* Commercial - Video Carousel */
var cc2 = document.querySelector('.commercial-carousel-2');
var flkty_cc2 = new Flickity( cc2, {
    autoPlay: false,
    wrapAround: true,
    pageDots: false
});

/* Commercial - Ad Ticker #2 */
var cc3 = document.querySelector('.commercial-carousel-3');
var flkty_cc3 = new Flickity( cc3, {
    selectedAttraction: 0.02,
    lazyLoad: true,
    imagesLoaded: true,
    friction: 1.5,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    draggable: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false
});

/* Continue playing Ad Ticker #2 after user interaction */
flkty_cc3.on('staticClick', function() {
    flkty_cc3.playPlayer();
});
flkty_cc3.on('dragEnd', function() {
    flkty_cc3.playPlayer();
});

/* Resume - Resumes */
var rc1 = document.querySelector('.resume-carousel-1');
var flkty_rc1 = new Flickity( rc1, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});

/* Resume - Headshots */
var rc2 = document.querySelector('.resume-carousel-2');
var flkty_rc2 = new Flickity( rc2, {
    lazyLoad: true,
    wrapAround: false,
    pageDots: false,
});

/* Theatre - More Shows */
var tms1 = document.querySelector('.theatre-more-shows-carousel-1');
var flkty_tms1 = new Flickity( tms1, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms2 = document.querySelector('.theatre-more-shows-carousel-2');
var flkty_tms2 = new Flickity( tms2, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms3 = document.querySelector('.theatre-more-shows-carousel-3');
var flkty_tms3 = new Flickity( tms3, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms4 = document.querySelector('.theatre-more-shows-carousel-4');
var flkty_tms4 = new Flickity( tms4, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms5 = document.querySelector('.theatre-more-shows-carousel-5');
var flkty_tms5 = new Flickity( tms5, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms6 = document.querySelector('.theatre-more-shows-carousel-6');
var flkty_tms6 = new Flickity( tms6, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms7 = document.querySelector('.theatre-more-shows-carousel-7');
var flkty_tms7 = new Flickity( tms7, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms8 = document.querySelector('.theatre-more-shows-carousel-8');
var flkty_tms8 = new Flickity( tms8, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});

var tms9 = document.querySelector('.theatre-more-shows-carousel-9');
var flkty_tms9 = new Flickity( tms9, {
    lazyLoad: true,
    imagesLoaded: true,
    contain: true,
    autoPlay: true,
    autoPlay: 4000,
    wrapAround: true,
    pageDots: false
});
