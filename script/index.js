let au = document.getElementById("audio1");

function playpause() {
    au.play();
}

function parar() {
    au.pause();
    au.currentTime = 0;
}
function voltar() {
    au.currentTime -= 30;
}
function avancar() {
    au.currentTime += 30;
}


/*-----------------TRACKLIST---------------*/

function t1(){
    au.currentTime = 0 ;
}

function t2(){
    au.currentTime = 440 ;
}
function t3(){
    au.currentTime = 920 ;
}
function t4(){
    au.currentTime = 1427 ;
}
function t5(){
    au.currentTime = 1950 ;
}
function t6(){
    au.currentTime = 2305 ;
}
function t7(){
    au.currentTime = 2780 ;
}
function t8(){
    au.currentTime = 3238 ;
}

/*--------------------------------FUNÇÃO PLAY-PAUSE ----------------------------------*/
var ppb = document.getElementById("playpause");

var isPlaying = false;

function togglePlay() {
  isPlaying ? au.pause() : au.play();
};

au.onplaying = function() {
  isPlaying = true;
  ppb.innerHTML = "b";
};
au.onpause = function() {
  isPlaying = false;
  ppb.innerHTML = "a";
};

/*---------INPUT TYPE RANGE----------------*/

var currentTimeContainer = document.getElementById('current-duration');
var totalTimeContainer = document.getElementById('total-duration');
var seekSlider = document.getElementById("seekbar");




au.addEventListener('loadedmetadata', function() {
    totalTimeContainer.innerHTML = au.duration;
    currentTimeContainer.innerHTML = au.currentTime;
});

function convertElapsedTime(inputSeconds) {
    var seconds = Math.floor(inputSeconds % 60)
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var minutes = Math.floor(inputSeconds / 60)
    return minutes + ":" + seconds
}

au.addEventListener('loadedmetadata', function() {
    totalTimeContainer.innerHTML = convertElapsedTime(au.duration);
    currentTimeContainer.innerHTML = convertElapsedTime(au.currentTime);
});

au.addEventListener('loadedmetadata', function() {
    totalTimeContainer.innerHTML = convertElapsedTime(au.duration);
    currentTimeContainer.innerHTML = convertElapsedTime(au.currentTime);
    seekSlider.max= au.duration;
    seekSlider.setAttribute("value", au.currentTime);
});

/* =============================Timeupdate Event Listener===============================*/

au.addEventListener('timeupdate', function() {
    currentTimeContainer.innerHTML = convertElapsedTime(au.currentTime);
    // The two lines below seem duplicate, but are both needed in some browsers
    // The first one updates the value attribute in the slider
    seekSlider.setAttribute("value", au.currentTime);
    /// The second one keeps the slider handle/thumb moving
    seekSlider.value = au.currentTime;

    // When the audio ends, we need to hide the pause button and show the play button
    
});

seekSlider.addEventListener("change", function () {
    au.currentTime = seekSlider.value;
});


/*---------------------------------   VOL SEEKBAR   -------------------------------*/ 



function thisVolume(volume_value)
    {   
        var voli = document.getElementById("iconesom");
        var aauu = document.getElementById("audio1");
        aauu.volume = volume_value / 100;
        
        if (volume_value==0) {
            voli.innerHTML = "f";
            
           }
           else if (volume_value==100) {
            voli.innerHTML = "h";
           }
           else {
            voli.innerHTML = "g";
           }

     }  

    /*-------------------------  MUTE ICON -----------------------*/

    var isMutiing = false;
    
    var voli = document.getElementById("iconesom");

    var aauu = document.getElementById("audio1");

function volmute() {
    isMutiing ? au.mute() : au.unmute();
};

au.mute = function() {
  isMutiing = true;
  voli.innerHTML = "g";

};
au.unmute = function() {
  isMutiing = false;
  voli.innerHTML = "f";
  aauu.volume = 0;

};

