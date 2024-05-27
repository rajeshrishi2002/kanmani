const audio=new Audio();
audio.src="kanmani.mp3";


var scrollPosition = 0;
$(window).scroll(function () {
  var curScrollPosition = $(this).scrollTop();
  if (curScrollPosition < scrollPosition) {
    $(".diving").css("transform", "rotate(90deg)");
    $(".diving").css({
      
      "transform": "rotate(90deg)",
      "animation": "underwaterMoveUp ease-in-out 1s infinite alternate",
});} else {
  $(".diving").css({
    
    "transform": "rotate(-80deg)",
    "animation": "underwaterMove ease-in-out 1s infinite alternate"
  });
}
  scrollPosition = curScrollPosition;
});

    

var numberBubbles = 200;
while (numberBubbles > 0){
  $(".bubblesContainer").append('<div class="bubbles"></div>');
  numberBubbles--;
}

$( ".bubbles").each(function( index ) {
  var x = (Math.random() * ($('body').width()));
  var y = (Math.random() * ($('body').height()));
  var minSpeed = (Math.random() * 20);
  var speed = (minSpeed + Math.random() * 20 + 's');
  var widthHeight = Math.floor(Math.random() * 40)
  $(this).css({
            'left': x + 'px',
            'top': y + 'px',
            'width': widthHeight +"px",
            'height': widthHeight +"px",
            'animation': 'bubblingUp ' + speed + ' infinite ease-out'
});
  var delay = Math.floor(Math.random() * 100);
  $(this).hide().delay(delay).fadeIn();
});