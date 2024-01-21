$(document).ready(function(){
    let mission_count = 0;
    let timer = 0;
    const code = $('#code');
    const bars = $('#bars');
    const count = $('#count');
    const number = $('#number');
    const audio = document.getElementById("audio");
    

	code.on('keypress', function(e){
        if (e.keyCode === 13) {
            let target = $(e.currentTarget);
            code.addClass('active');
            switch (target.val()) {
                case 'start': {
                    mission_count = 1;     
                    count.text(mission_count);               
                    setTimeout(() => {
                        playAudio();            
                    }, 500);
                    break;
                }
                case 'next': {
                    mission_count++;
                    count.text(mission_count);     
                    changeMission(mission_count);
                    break;
                }
            }
            clearInput();
        }
	});

    number.on('keypress', function(e){
        if (e.keyCode === 13) {
            mission_count = number.val();
            changeMission(mission_count);
            number.val('');
            number.blur();
        }
	});

    audio.onplay = function() { 
        setTimeout(() => {
            bars.addClass('active');
        }, 700);
    };

    audio.onpause = function() {
        stopAudio();
    };

    audio.onended = function() {
        stopAudio();
    };
  
    function clearInput() {
        timer = setTimeout(() => {
            code.val('').removeClass('active');
            code.blur();
        }, 1500);
    }

    function changeMission(num) {
        audio.setAttribute('src', `tasks/0${num}.mp3`);
        audio.load();
        audio.play();
    }

    function playAudio() {
        audio.play();
    }

    function stopAudio() {
        setTimeout(() => {
            bars.removeClass('active');
        }, 400);
    }
      
});