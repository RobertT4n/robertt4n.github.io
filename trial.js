$(document).ready(function() {
    $('.slider').each(function() {
      var $this = $(this);
      var $slides = $this.find('img');
      var slideCount = $slides.length;
      var slideWidth = $slides.outerWidth();
      var slideHeight = $slides.outerHeight();
      var sliderWidth = slideCount * slideWidth;
  
      $this.css({
        width: slideWidth,
        height: slideHeight
      });
  
      $slides.wrapAll('<div class="slide-inner"></div>').css({
        'float': 'left',
        width: slideWidth
      });
  
      $('.slide-inner').css('width', sliderWidth);
  
      $this.append('<div class="slider-nav"><span class="prev">&lt;</span><span class="next">&gt;</span></div>');
  
      $('.slider-nav').on('click', 'span', function() {
        var $this = $(this);
        var index = $this.index();
  
        $('.slide-inner').animate({
          'margin-left': -slideWidth * index
        }, 500);
      });
    });
  });
  