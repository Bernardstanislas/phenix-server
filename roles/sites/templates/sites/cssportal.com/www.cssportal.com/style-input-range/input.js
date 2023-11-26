function updateDisplay() {

//Thumb//
thumbColor = document.getElementById("thumb-color").value;
thumbHeight = document.getElementById("thumb-height").innerHTML + "px";
thumbHeight2 = document.getElementById("thumb-height").innerHTML;
thumbWidth = document.getElementById("thumb-width").innerHTML + "px";
thumbRadius = document.getElementById("thumb-radius").innerHTML + "px";
thumbborderColor = document.getElementById("thumb-border-color").value;
thumbborderWidth = document.getElementById("thumb-border-width").innerHTML + "px";
thumbborderWidth2 = document.getElementById("thumb-border-width").innerHTML;
thumbshadowColor = document.getElementById("thumb-shadow-color").value;
thumbshadowSize = document.getElementById("thumb-shadow-size").innerHTML + "px";
thumbshadowBlur = document.getElementById("thumb-shadow-blur").innerHTML + "px";

//Track//
trackColor = document.getElementById("track-color").value;
trackHeight = document.getElementById("track-height").innerHTML + "px";
trackHeight2 = document.getElementById("track-height").innerHTML;
trackRadius = document.getElementById("track-radius").innerHTML + "px";
trackRadius2 = document.getElementById("track-radius").innerHTML;
trackRadiusMS = (trackRadius2 * 2) + "px";
trackborderColor = document.getElementById("track-border-color").value;
trackborderWidth = document.getElementById("track-border-width").innerHTML + "px";
trackborderWidth2 = document.getElementById("track-border-width").innerHTML;
trackshadowColor = document.getElementById("track-shadow-color").value;
trackshadowSize = document.getElementById("track-shadow-size").innerHTML + "px";
trackshadowBlur = document.getElementById("track-shadow-blur").innerHTML + "px";
newMargin = (0 - (thumbHeight2 / 2)) + (trackHeight2 / 2) - (thumbborderWidth2 / 2) - (trackborderWidth2 / 2) + "px";

newHeight = +document.getElementById("thumb-height").innerHTML + +document.getElementById("thumb-shadow-size").innerHTML + +document.getElementById("thumb-border-width").innerHTML +6 + "px";



this.css = 'input[type=range] {\n';
this.css += '  height: '+newHeight+';\n';
this.css += '  -webkit-appearance: none;\n';
this.css += '  margin: 10px 0;\n';
this.css += '  width: 100%;\n';
this.css += '}\n';
this.css += 'input[type=range]:focus {\n';
this.css += '  outline: none;\n';
this.css += '}\n';
this.css += 'input[type=range]::-webkit-slider-runnable-track {\n';
this.css += '  width: 100%;\n';
this.css += '  height: '+trackHeight+';\n';
this.css += '  cursor: pointer;\n';
this.css += '  animate: 0.2s;\n';
this.css += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css += '  background: '+trackColor+';\n';
this.css += '  border-radius: '+trackRadius+';\n';
this.css += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css += '}\n';
this.css += 'input[type=range]::-webkit-slider-thumb {\n';
this.css += '  box-shadow: '+thumbshadowSize+' '+thumbshadowSize+' '+thumbshadowBlur+' '+thumbshadowColor+';\n';
this.css += '  border: '+thumbborderWidth+' solid '+thumbborderColor+';\n';
this.css += '  height: '+thumbHeight+';\n';
this.css += '  width: '+thumbWidth+';\n';
this.css += '  border-radius: '+thumbRadius+';\n';
this.css += '  background: '+thumbColor+';\n';
this.css += '  cursor: pointer;\n';
this.css += '  -webkit-appearance: none;\n';
this.css += '  margin-top: '+newMargin+';\n';
//this.css += '  margin-top: -3.6px;\n';
this.css += '}\n';
this.css += 'input[type=range]:focus::-webkit-slider-runnable-track {\n';
this.css += '  background: '+trackColor+';\n';
this.css += '}\n';
this.css += 'input[type=range]::-moz-range-track {\n';
this.css += '  width: 100%;\n';
this.css += '  height: '+trackHeight+';\n';
this.css += '  cursor: pointer;\n';
this.css += '  animate: 0.2s;\n';
this.css += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css += '  background: '+trackColor+';\n';
this.css += '  border-radius: '+trackRadius+';\n';
this.css += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css += '}\n';
this.css += 'input[type=range]::-moz-range-thumb {\n';
this.css += '  box-shadow: '+thumbshadowSize+' '+thumbshadowSize+' '+thumbshadowBlur+' '+thumbshadowColor+';\n';
this.css += '  border: '+thumbborderWidth+' solid '+thumbborderColor+';\n';
this.css += '  height: '+thumbHeight+';\n';
this.css += '  width: '+thumbWidth+';\n';
this.css += '  border-radius: '+thumbRadius+';\n';
this.css += '  background: '+thumbColor+';\n';
this.css += '  cursor: pointer;\n';
this.css += '}\n';
this.css += 'input[type=range]::-ms-track {\n';
this.css += '  width: 100%;\n';
this.css += '  height: '+trackHeight+';\n';
this.css += '  cursor: pointer;\n';
this.css += '  animate: 0.2s;\n';
this.css += '  background: transparent;\n';
this.css += '  border-color: transparent;\n';
this.css += '  color: transparent;\n';
this.css += '}\n';
this.css += 'input[type=range]::-ms-fill-lower {\n';
this.css += '  background: '+trackColor+';\n';
this.css += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css += '  border-radius: '+trackRadiusMS+';\n';
this.css += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css += '}\n';
this.css += 'input[type=range]::-ms-fill-upper {\n';
this.css += '  background: '+trackColor+';\n';
this.css += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css += '  border-radius: '+trackRadiusMS+';\n';
this.css += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css += '}\n';
this.css += 'input[type=range]::-ms-thumb {\n';
this.css += '  margin-top: 1px;\n';
this.css += '  box-shadow: '+thumbshadowSize+' '+thumbshadowSize+' '+thumbshadowBlur+' '+thumbshadowColor+';\n';
this.css += '  border: '+thumbborderWidth+' solid '+thumbborderColor+';\n';
this.css += '  height: '+thumbHeight+';\n';
this.css += '  width: '+thumbWidth+';\n';
this.css += '  border-radius: '+thumbRadius+';\n';
this.css += '  background: '+thumbColor+';\n';
this.css += '  cursor: pointer;\n';
this.css += '}\n';
this.css += 'input[type=range]:focus::-ms-fill-lower {\n';
this.css += '  background: '+trackColor+';\n';
this.css += '}\n';
this.css += 'input[type=range]:focus::-ms-fill-upper {\n';
this.css += '  background: '+trackColor+';\n';
this.css += '}\n';

this.css1 = 'input[type=range].demoinput {\n';
this.css1 += '  height: '+newHeight+';\n';
this.css1 += '  -webkit-appearance: none;\n';
this.css1 += '  margin: 10px 0;\n';
this.css1 += '  width: 100%;\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput:focus {\n';
this.css1 += '  outline: none;\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-webkit-slider-runnable-track {\n';
this.css1 += '  width: 100%;\n';
this.css1 += '  height: '+trackHeight+';\n';
this.css1 += '  cursor: pointer;\n';
this.css1 += '  animate: 0.2s;\n';
this.css1 += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '  border-radius: '+trackRadius+';\n';
this.css1 += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-webkit-slider-thumb {\n';
this.css1 += '  box-shadow: '+thumbshadowSize+' '+thumbshadowSize+' '+thumbshadowBlur+' '+thumbshadowColor+';\n';
this.css1 += '  border: '+thumbborderWidth+' solid '+thumbborderColor+';\n';
this.css1 += '  height: '+thumbHeight+';\n';
this.css1 += '  width: '+thumbWidth+';\n';
this.css1 += '  border-radius: '+thumbRadius+';\n';
this.css1 += '  background: '+thumbColor+';\n';
this.css1 += '  cursor: pointer;\n';
this.css1 += '  -webkit-appearance: none;\n';
this.css1 += '  margin-top: '+newMargin+';\n';
//this.css += '  margin-top: -3.6px;\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput:focus::-webkit-slider-runnable-track {\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-moz-range-track {\n';
this.css1 += '  width: 100%;\n';
this.css1 += '  height: '+trackHeight+';\n';
this.css1 += '  cursor: pointer;\n';
this.css1 += '  animate: 0.2s;\n';
this.css1 += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '  border-radius: '+trackRadius+';\n';
this.css1 += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-moz-range-thumb {\n';
this.css1 += '  box-shadow: '+thumbshadowSize+' '+thumbshadowSize+' '+thumbshadowBlur+' '+thumbshadowColor+';\n';
this.css1 += '  border: '+thumbborderWidth+' solid '+thumbborderColor+';\n';
this.css1 += '  height: '+thumbHeight+';\n';
this.css1 += '  width: '+thumbWidth+';\n';
this.css1 += '  border-radius: '+thumbRadius+';\n';
this.css1 += '  background: '+thumbColor+';\n';
this.css1 += '  cursor: pointer;\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-ms-track {\n';
this.css1 += '  width: 100%;\n';
this.css1 += '  height: '+trackHeight+';\n';
this.css1 += '  cursor: pointer;\n';
this.css1 += '  animate: 0.2s;\n';
this.css1 += '  background: transparent;\n';
this.css1 += '  border-color: transparent;\n';
this.css1 += '  color: transparent;\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-ms-fill-lower {\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css1 += '  border-radius: '+trackRadiusMS+';\n';
this.css1 += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-ms-fill-upper {\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '  border: '+trackborderWidth+' solid '+trackborderColor+';\n';
this.css1 += '  border-radius: '+trackRadiusMS+';\n';
this.css1 += '  box-shadow: '+trackshadowSize+' '+trackshadowSize+' '+trackshadowBlur+' '+trackshadowColor+';\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput::-ms-thumb {\n';
this.css1 += '  margin-top: 1px;\n';
this.css1 += '  box-shadow: '+thumbshadowSize+' '+thumbshadowSize+' '+thumbshadowBlur+' '+thumbshadowColor+';\n';
this.css1 += '  border: '+thumbborderWidth+' solid '+thumbborderColor+';\n';
this.css1 += '  height: '+thumbHeight+';\n';
this.css1 += '  width: '+thumbWidth+';\n';
this.css1 += '  border-radius: '+thumbRadius+';\n';
this.css1 += '  background: '+thumbColor+';\n';
this.css1 += '  cursor: pointer;\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput:focus::-ms-fill-lower {\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '}\n';
this.css1 += 'input[type=range].demoinput:focus::-ms-fill-upper {\n';
this.css1 += '  background: '+trackColor+';\n';
this.css1 += '}\n';


	
$("#code").html(this.css)
Prism.highlightAll();



$('style').remove();
$('head').append('<style type="text/css">' + this.css1 + '</style>');
return this.css;
}

	var rangeSlider = function(){
	  var slider = $('.range-slider'),
		  range = $('.form-range');
		
	  slider.each(function(){
		range.on('input', function(){
		  var range__input = $(this).data('key');
		  $('#'+range__input).html(this.value);
		  updateDisplay();
		});
	  });
	};

	rangeSlider();

window.onload = updateDisplay;