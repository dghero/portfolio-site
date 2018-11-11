
$(document).ready(function() {
  setInterval(blink, 1000);
});

const blink = function(){
  let cursor = $('.cursor');
  if(cursor.css('visibility') === 'hidden'){
    cursor.css('visibility', 'visible')
  }else{
    cursor.css('visibility', 'hidden')
  }
}
