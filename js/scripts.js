//Countdown
$('#timer').countdown('2016/03/01', function(event) {
    $(this).html(event.strftime('%D:%H:%M:%S'));
});
