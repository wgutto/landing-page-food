$(document).ready(function() {
    $('#mobile_button').on('click', function () {
        $('#mobile_menu').toggleClass('active')
        $('#mobile_button').find('i').toggleClass('fa-x')
    })
})