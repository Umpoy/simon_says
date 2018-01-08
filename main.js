var green_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
var red_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
var yellow_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
var blue_audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
var game_over_audio = new Audio('http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3')
var hold_AI_array = [];
var hold_players_array = [];
var simons_turn = null
var i = 0
var game_over = null

$(document).ready(function () {
    assignClickHandlers()
})

function start_game() {
    hold_AI_array = []
    AIs_turn()
}
function assignClickHandlers() {
    $('button').on('click', start_game)
    $('.button').click(light_up_element);
    $('.button').click(players_turn);
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
    if (game_over) {
        return
    }
    let self = this
    $(self).addClass('on')
    setTimeout(function () {
        $(self).removeClass('on')
    }, 400)
}

function AIs_turn() {
    simons_turn = true
    game_over = false
    hold_players_array = []
    var color_choices = ['green', 'red', 'yellow', 'blue'];
    var color_picked = color_choices[Math.floor(Math.random() * color_choices.length)];
    hold_AI_array.push(color_picked);
    console.log(hold_AI_array)
    var set_interval = setInterval(function () {
        $('#' + hold_AI_array[i]).click();
        i++
        if (i == hold_AI_array.length) {
            clearInterval(set_interval)
            i = 0
            simons_turn = false
        }
    }, 1000);
}

function players_turn() {
    if (simons_turn || game_over) {
        return
    }
    hold_players_array.push($(this).attr('id'))
    if (hold_players_array[i] !== hold_AI_array[i]) {
        game_over = true
        game_over_audio.play('')
    }
    i++
    console.log(hold_players_array)
    if (i == hold_AI_array.length) {
        setTimeout(function () {
            i = 0
            AIs_turn()
        }, 1000)
    }

}




