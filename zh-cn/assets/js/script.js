//Footer time
function nowTime() {
    var today = new Date();
    var yyyy = today.getFullYear();
    document.getElementById('nowDate').innerHTML = yyyy;
}
setInterval(nowTime, 500);

//Preloader
$(window).on('load', function () {
    $(".loader").fadeOut(250);
    $(".content").fadeIn(250);
})