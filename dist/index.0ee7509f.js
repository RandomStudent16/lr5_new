// var jquery = require("jquery");
// window.$ = window.jQuery = jquery; // notice the definition of global variables here
// import 'bootstrap/dist/css/bootstrap.css';
// var $ = require('jquery');
// window.$ = $;
// require('bootstrap');
$(document).ready(function() {
    var current = $(".img.active");
    var currentInd = $(".img.active").index();
    $(".right").click(function() {
        var nextCurrR = currentInd + 1;
        var nextImgR = $(".img").eq(nextCurrR);
        if (nextCurrR == $(".img:last").index() + 1) $(".rigth").addClass("non-active");
        else $(".rigth").removeClass("non-active");
        current.removeClass("active");
        nextImgR.addClass("active");
    });
    $(".left").click(function() {
        var nextCurrL = currentInd - 1;
        var nextImgL = $(".img").eq(nextCurrL);
        current.removeClass("active");
        nextImgL.addClass("active");
    });
    $(".open").on("click", function() {
        $(".popup, .popup-content").addClass("active");
    });
    $(".close, .popup").on("click", function() {
        $(".popup, .popup-content").removeClass("active");
    });
});

//# sourceMappingURL=index.0ee7509f.js.map
