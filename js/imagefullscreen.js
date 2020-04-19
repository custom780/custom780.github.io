
function makeFullScreen() {
  if (
    document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  ) {
    var i = document.getElementById("myImage");
    i.onclick = function() {
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      else {
        if (i.requestFullscreen) {
          this.requestFullscreen();
        } else if (i.webkitRequestFullscreen) {
          i.webkitRequestFullscreen();
        } else if (i.mozRequestFullScreen) {
          i.mozRequestFullScreen();
        } else if (i.msRequestFullscreen) {
          i.msRequestFullscreen();
        }
      }
    }
  }
}
