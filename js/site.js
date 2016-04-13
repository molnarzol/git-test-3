/**
 * Created by User on 2016.04.12..
 */
$( document ).ready(function() {
    console.log( "ready!" );

    var cw = $('.item').width();
    $('.item').css({'height':cw+'px'});

    $( window ).resize(function() {
        console.log('resize');
        var cw = $('.item').width();
        $('.item').css({'height':cw+'px'});
    });
});
