// Block page scroll when an element has some class, for example, when a popup is active or when a select box is open

function blockScroll(element, hClass){
    if ($(element).hasClass(hClass)){
      let position = window.pageYOffset;
      $(window).on( 'scroll', function(){
        $(window).scrollTop(position)
      });
    }
    else{
      $(window).off('scroll');
    }
  }