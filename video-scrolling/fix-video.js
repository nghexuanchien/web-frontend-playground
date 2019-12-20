var videoFrom = 10 //start video at (in seconds)
var videoTo = 18 //end video at (in seconds), null or undefined if you want to play until end of video
var scrollSpeed = 1 //scroll speed

var $element = $('#navigation');
var $secVideo =  $element.parent()
var video = $('video').get(0);

$secVideo.css('height', 2000/scrollSpeed)
video.oncanplay = function() {
  if(!video.currentTime && videoFrom > 0) video.currentTime = videoFrom
  if(!videoTo) videoTo = video.duration
  updateSize()
};

$(window).scroll(function(){
  updatePosition()
  playVideo()
});

$(window).resize(updateSize)

function updateSize () {
  if(!video.readyState) return
  $element.css({'height': window.innerHeight})
  if($element.width()/ $element.height() > video.videoWidth / video.videoHeight){
    $('video').css({width: '100%', height: 'auto'})
  }else{
    $('video').css({height: '100%', width: 'auto'})
  }
}

function updatePosition () {
  var scrollTop = $(window).scrollTop()
  if(scrollTop > $secVideo.offset().top){
    if(scrollTop > ($('.sec-tail').offset().top - $element.height())){
      $element.css({
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'top': 'auto'
      });
    }else {
      $element.css({
        'position': 'fixed',
        'bottom': 'auto',
        'left': $secVideo.offset().left,
        'top': 0,
        'right': $secVideo.offset().left,
        'height': window.innerHeight
      })
    }
  } else {
    $element.css({
      'position': 'relative',
      'top': 'auto',
      'right': 'auto',
      'left': 'auto',
      'bottom': 'auto',
      'height': window.innerHeight
    });
  }
}

function playVideo () {
  if(!video.readyState)
    return
  var videoLength = video.duration,
    scrollPosition = $(window).scrollTop() - $secVideo.offset().top;
  if(scrollPosition > 0) {
    var currentTime = videoFrom + (scrollPosition / ($secVideo.height() - $element.height())) * (videoTo ? (videoTo - videoFrom) : videoLength);
    if( currentTime > videoTo || currentTime < videoFrom)
      return
    video.currentTime = currentTime
  }
}