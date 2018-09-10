// Script to animate the Text Sections and button under form
$(window).resize(function () {
    var width = $(window).width();
    var height1 = $(".view").height();
    if (width > 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > (height1 / 2)) {
                $('.bounceTrigger').addClass(' animated bounceIn');
            } 
        });
    } else if (width <= 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > height1 ) {
                $('.bounceTrigger').addClass(' animated bounceIn');
            }
        });
    }
})
    .resize();//trigger the resize event on page load.

    
// Script to animate the three over on the image
$(window).change(function () {
    var width = $(window).width();
    var height2 = $(".sectionScroll").height();
    if (width > 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > height2) {
                $('.slideRight1').addClass(' animated slideInRight ');
                $('.slideRight2').addClass(' animated slideInRight ');
                $('.slideLeft').addClass(' animated slideInLeft ');
            }
        });
    } else if (width < 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > (height2 * 2.2 )) {
                $('.slideRight1').addClass(' animated slideInRight ');
                $('.slideRight2').addClass(' animated slideInRight ');
                $('.slideLeft').addClass(' animated slideInLeft ');
            }
        });
    }
})
    .change();//trigger the resize event on page load.



// When the user clicks on the button, scroll to the top of the document
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}