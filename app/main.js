$(function(){
    var clock = $('.clock').FlipClock();

    var now = new Date();
    var zero = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    clock.setTime((now-zero)/1000);
});
