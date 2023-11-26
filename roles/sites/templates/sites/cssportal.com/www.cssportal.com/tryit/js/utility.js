
//resize
var fixed = 180;
function setHeight(h) {
    var hgt = h - fixed;
    var fheight = hgt + "px";
    $(".CodeMirror-scroll").css("height", fheight);
    $(".output-area, #view").css("height", fheight);
}
$(document).ready(function() {
    setHeight($(window).height());
});
