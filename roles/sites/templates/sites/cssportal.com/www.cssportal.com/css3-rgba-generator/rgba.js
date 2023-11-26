function rgba2hex(orig) {
  var a, isPercent,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 01;
  }
  a = ((a * 255) | 1 << 8).toString(16).slice(1)
  hex = hex + a;

  return hex.toUpperCase();
}

function rgba() {

	demoDiv=document.getElementById("demo");
	codeDiv=document.getElementById("code");
	codeDivHEX=document.getElementById("codeHEX");
			
	redV=document.getElementById("red-value").innerHTML;
	greenV=document.getElementById("green-value").innerHTML;
	blueV=document.getElementById("blue-value").innerHTML;
	opacityV=document.getElementById("opacity-value").innerHTML;
	
	rgbaV = "rgba(" + redV + ", " + greenV + ", " + blueV + ", " + opacityV + ")";

	demoDiv.style.backgroundColor=rgbaV;

	codeDiv.textContent="background-color: " + rgbaV + "; \n" + "color: " + rgbaV + ";";
	codeDivHEX.textContent="background-color: #" + rgba2hex(rgbaV) + "; \n" + "color: #" + rgba2hex(rgbaV) + ";";
	Prism.highlightAll();

}
	
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  rgba();
    });
  });
};

rangeSlider();

$(document).ready(function() {
   rgba();
});