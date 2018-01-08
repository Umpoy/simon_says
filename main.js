var green_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
var red_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
var yellow_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
var blue_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
var game_over_audio = new Audio('http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3')


$(document).ready(function () {
    assignClickHandlers()
})

function assignClickHandlers() {
    $('.button').click(light_up_element);
    $('#green').on('click', function () {
        green_audio.play('')
    });
    $('#red').on('click', function () {
        red_audio.play('')
    });
    $('#yellow').on('click', function () {
        yellow_audio.play('')
    });
    $('#blue').on('click', function () {
        blue_audio.play('')
    });

}

function light_up_element() {
    let self = this
    $(self).addClass('on')
    setTimeout(function () {
        $(self).removeClass('on')
    }, 400)
}



