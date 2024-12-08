document.addEventListener("scroll", function() {
    var video = document.getElementById("lolla-video");
    var rect = video.getBoundingClientRect();
    var videoHeight = rect.height;

    var visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    var visible = visibleHeight >= videoHeight / 2;

    if (visible) {
        video.play();
    } else {
        video.pause();
    }
});
