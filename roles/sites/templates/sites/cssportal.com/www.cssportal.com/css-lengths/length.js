function updateLength() {

	absSize=document.getElementById("absSize").innerHTML;
	htmlSize=document.getElementById("htmlSize").innerHTML;
	bodySize=document.getElementById("bodySize").innerHTML;

///Absolute
if (document.getElementById("in").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'in; height: '+absSize+'in;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'in';
	document.getElementById("def").innerHTML = '<b>in</b> - One inch (2.54 centimeters).';
}
if (document.getElementById("px").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'px; height: '+absSize+'px;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'px';
	document.getElementById("def").innerHTML = '<b>px</b> - Relative to the viewing device. For screen display, typically one device pixel (dot) of the display. For printers and very high resolution screens one CSS pixel implies multiple device pixels, so that the number of pixel per inch stays around 96.';
}
if (document.getElementById("mm").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'mm; height: '+absSize+'mm;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'mm';
	document.getElementById("def").innerHTML = '<b>mm</b> - One millimeter.';
}
if (document.getElementById("cm").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'cm; height: '+absSize+'cm;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'cm';
	document.getElementById("def").innerHTML = '<b>cm</b> - One centimeter (10 millimeters).';
}
if (document.getElementById("pt").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'pt; height: '+absSize+'pt;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'pt';
	document.getElementById("def").innerHTML = '<b>pt</b> - One point (which is 1/72 of an inch).';
}
if (document.getElementById("pc").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'pc; height: '+absSize+'pc;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'pc';
	document.getElementById("def").innerHTML = '<b>pc</b> - One pica (which is 12 points).';
}

///Relative
if (document.getElementById("em").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'em; height: '+absSize+'em;\n';
	this.css += '  color: blue;\n';
	this.css += '  font-size:'+bodySize+'px;}\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'em';
	document.getElementById("def").innerHTML = '<b>em</b> - This unit represents the calculated font-size of the element. If used on the font-size property itself, it represents the inherited font-size of the element.';
}
if (document.getElementById("ex").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'ex; height: '+absSize+'ex;\n';
	this.css += '  background: blue;\n';
	this.css += '  font-size:'+bodySize+'px;}\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'ex';
	document.getElementById("def").innerHTML = '<b>ex</b> - This unit represents the x-height of the element\'s font. On fonts with the \'x\' letter, this is generally the height of lowercase letters in the font; 1ex ≈ 0.5em in many fonts.';
}
if (document.getElementById("ch").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'ch; height: '+absSize+'ch;\n';
	this.css += '  background: blue;\n';
	this.css += '  font-size:'+bodySize+'px;}\n';
	this.css += '  margin: 0 auto;}\n';
	document.getElementById("showSize").innerHTML = absSize+'ch';
	document.getElementById("def").innerHTML = '<b>ch</b> - This unit represents the width, or more precisely the advance measure, of the glyph \'0\' (zero, the Unicode character U+0030) in the element\'s font.';
}
if (document.getElementById("rem").checked==true) {
	this.css = '.css-length {\n';
	this.css += '  width: '+absSize+'rem; height: '+absSize+'rem;\n';
	this.css += '  background: blue;\n';
	this.css += '  margin: 0 auto;}\n';
	this.css += 'html{font-size:'+htmlSize+'px;}\n';
	document.getElementById("showSize").innerHTML = absSize+'rem';
	document.getElementById("def").innerHTML = '<b>rem</b> - This unit represents the font-size of the root element (e.g. the font-size of the <html> element). When used on the font-size on this root element, it represents its initial value.';
}


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
	  updateLength();
    });
  });
};

rangeSlider();

window.onload=updateLength;