function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
  return r + "," + g + "," + b;
}

function updateText() {
	aBG = document.getElementById("bg-color").value;
	aFontSize = document.getElementById("font-size").innerHTML + "px";
	aSpeed = document.getElementById("speed").innerHTML;
	aStrokeColor = document.getElementById("stroke-color").value;
	aFillColor = document.getElementById("fill-color").value;
	sRGB = hexToRgb(aStrokeColor);
	fRGB = hexToRgb(aFillColor);
	aText = document.getElementById("text").value;
	gFont = document.getElementById("gFontsList").value;
	document.getElementById("svg").textContent = aText;
	document.getElementsByClassName("dm1")[0].style.background = aBG;
	

	this.css = '@import url("https://fonts.googleapis.com/css2?family=' + gFont.replaceAll(" ", "+") + '&display=swap");\n';
	this.css += '\n';
	this.css += 'svg {\n';
	this.css += '	font-family: "' + gFont + '", sans-serif;\n';
	this.css += '	width: 100%; height: 100%;\n';
	this.css += '}\n';
	this.css += 'svg text {\n';
	this.css += '	animation: stroke ' + aSpeed + 's infinite alternate;\n';
	this.css += '	stroke-width: 2;\n';
	this.css += '	stroke: ' + aStrokeColor + ';\n';
	this.css += '	font-size: ' + aFontSize + ';\n';
	this.css += '}\n';
	this.css += '@keyframes stroke {\n';
	this.css += '	0%   {\n';
	this.css += '		fill: rgba(' + fRGB + ',0); stroke: rgba(' + sRGB + ',1);\n';
	this.css += '		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;\n';
	this.css += '	}\n';
	this.css += '	70%  {fill: rgba(' + fRGB + ',0); stroke: rgba(' + sRGB + ',1); }\n';
	this.css += '	80%  {fill: rgba(' + fRGB + ',0); stroke: rgba(' + sRGB + ',1); stroke-width: 3; }\n';
	this.css += '	100% {\n';
	this.css += '		fill: rgba(' + fRGB + ',1); stroke: rgba(' + sRGB + ',0);\n';
	this.css += '		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;\n';
	this.css += '	}\n';
	this.css += '}\n';
	this.css += '\n';
	this.css += '.wrapper {background-color: ' + aBG + '};\n';

	this.html = '<div class="wrapper">\n';
	this.html += '	<svg>\n';
	this.html += '		<text x="50%" y="50%" dy=".35em" text-anchor="middle">\n';
	this.html += '			' + aText + '\n';
	this.html += '		</text>\n';
	this.html += '	</svg>\n';
	this.html += '</div>';



	codeDiv = document.getElementById("code");
	codeHTMLDiv = document.getElementById("code-html");	

	codeDiv.textContent=this.css;
	codeHTMLDiv.textContent=this.html;
	Prism.highlightAll();

	$('style').remove();
	$('head').append('<style type="text/css">' + this.css + '</style>');
	return this.css;	
	
}
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  updateText();
    });
  });
};

rangeSlider();

window.onload=updateText;