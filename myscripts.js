//return a DOM object
var video = document.getElementById('video'); //or
var video = $('#video').get(0); //or
var video = $('#video')[0];
 
//return a jQuery object
var video = $('#video');


$('.btnPlay').on('click', function() {
    if(video[0].paused) {
        video[0].play();
    }
    else {
        video[0].pause();
    }
    return false;
};