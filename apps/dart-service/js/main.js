$(document).ready(function(){
    $('.toggle').click(function(e) {
  	e.preventDefault();
  
        var $this = $(this);
      
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(300);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(700);
            $this.next().toggleClass('show');
            $this.next().slideToggle(300);
        }
    });
    $('.your-class').slick({
        vertical: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 600
    });
    $('.team-accordion').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '0',
        arrows: false,
        autoplay: true,
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        asNavFor: '.team-accordion-text',
    });
    $('.team-accordion-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.team-accordion',
        focusOnSelect: true,
        fade: true,
        speed: 100,
        cssEase: 'linear',
        arrows: false
    });
});
