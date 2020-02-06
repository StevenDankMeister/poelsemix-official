/* Starts fade in when window scrolled past scroll height */
const fadeInOnScroll = (scroll_height, container) =>{
  let opacity = 0;
  let running = false;
  $(window).on("scroll", () =>{
    if($(window).scrollTop() > scroll_height && !running){
      running = true;
      setInterval(function(){
        if(opacity < 1){
          opacity += 0.01;
          $(container).css("opacity", opacity);
        }
      }, 10);
    }
  });
};


