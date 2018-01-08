$(document).ready(function () {
    assignClickHandlers()
})

function assignClickHandlers() {
    $('.button').click(light_up_element)
}

function light_up_element() {
    let self = this
    $(self).addClass('on')
    setTimeout(function () {
        $(self).removeClass('on')
    }, 400)
}



