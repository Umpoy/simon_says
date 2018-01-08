var green_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
var red_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
var yellow_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
var blue_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
var game_over_audio = new Audio('http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3')
var hold_AI_array = []
var i = 0

$(document).ready(function () {
    assignClickHandlers()
})

function start_game() {
    AIs_turn()
}
function assignClickHandlers() {
    $('button').on('click', start_game)
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

function AIs_turn() {
    var color_choices = ['green', 'red', 'yellow', 'blue'];
    var color_picked = color_choices[Math.floor(Math.random() * color_choices.length)];
    hold_AI_array.push(color_picked);
    var set_interval = setInterval(function () {
        $('#' + hold_AI_array[i]).click();
        i++
        if (i == hold_AI_array.length) {
            clearInterval(set_interval)
            i = 0
        }
    }, 1000);
}





