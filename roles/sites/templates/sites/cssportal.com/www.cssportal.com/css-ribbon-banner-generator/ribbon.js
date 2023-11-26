function ribboncreate() {

	
	demoDiv=document.getElementById("demo");
	codeDiv=document.getElementById("code");
	
	
	ribbonWidth=document.getElementById("rib-width-value").innerHTML + "px";
	ribbonEndSize=document.getElementById("rib-end-size-value").innerHTML + "px";
	ribbonText=document.getElementById("text").innerHTML;
	fontSize=document.getElementById("font-size-value").innerHTML + "px";
	ribbonPadding=document.getElementById("rib-padding-value").innerHTML + "px";
	textColor=document.getElementById("text-color").value;
	shadowColor=document.getElementById("shadow-color").value;
	rtgColor=document.getElementById("r-t-g-color").value;
	rbgColor=document.getElementById("r-b-g-color").value;
	rFoldColor=document.getElementById("r-fold-color").value;
	rEndColor=document.getElementById("r-end-color").value;

	document.getElementById("newText").innerHTML = document.getElementById("text").value;
	


    this.css = ".ribbon {\n";
	this.css += "     width: " + ribbonWidth + ";\n";
    this.css += "     position: absolute;\n";
	this.css += "     left: 50%;\n";
	this.css += "     margin-left: -" + (document.getElementById('rib-width-value').innerHTML / 2) + "px;\n";
	this.css += "     text-align: center;\n";
	this.css += "     font-size: " + ribbonEndSize + " !important;\n";	
	this.css += "     background: " + rtgColor + ";\n";
    this.css += "     background: linear-gradient(to bottom, " + rtgColor + ", " + rbgColor + ");\n";
if (document.getElementById("shadow-show").checked==true) {
    this.css += "     box-shadow: rgba(0,0,0,0.3) 0 1px 1px;\n";
}
	this.css += "     font-family: 'Helvetica Neue',Helvetica, sans-serif;\n";
    this.css += "}\n\n";
	
	this.css += ".ribbon p {\n";
	this.css += "     font-size: " + fontSize + " !important;\n";
	this.css += "     color: " + textColor + ";\n";   
	this.css += "     text-shadow: " + shadowColor + " 0 1px 0;\n";
	this.css += "     margin:0px;\n";
	this.css += "     padding: " + ribbonPadding + " 10px;\n";
    this.css += "}\n\n";
	
	this.css += ".ribbon:before, .ribbon:after {\n";
	this.css += "     content: '';\n";
	this.css += "     position: absolute;\n";
	this.css += "     display: block;\n";   
	this.css += "     bottom: -1em;\n";
	this.css += "     border: 1.5em solid " + rEndColor + ";\n";
	this.css += "     z-index: -1;\n";
    this.css += "}\n\n";
	
	
	this.css += ".ribbon:before {\n";
	this.css += "     left: -2em;\n";
	this.css += "     border-right-width: 1.5em;\n";   
	this.css += "     border-left-color: transparent;\n";
if (document.getElementById("shadow-show").checked==true) {
    this.css += "     box-shadow: rgba(0,0,0,0.4) 1px 1px 1px;\n";
}
    this.css += "}\n\n";
	
	this.css += ".ribbon:after {\n";
	this.css += "     right: -2em;\n";
	this.css += "     border-left-width: 1.5em;\n";   
	this.css += "     border-right-color: transparent;\n";
if (document.getElementById("shadow-show").checked==true) {
    this.css += "     box-shadow: rgba(0,0,0,0.4) -1px 1px 1px;\n";
}
    this.css += "}\n\n";
	
	
	this.css += ".ribbon .ribbon-content:before, .ribbon .ribbon-content:after {\n";
	this.css += "     border-color: " + rFoldColor + " transparent transparent transparent;\n";
	this.css += "     position: absolute;\n";
	this.css += "     display: block;\n";   
	this.css += "     border-style: solid;\n";
	this.css += "     bottom: -1em;\n";
	this.css += "     content: '';\n";
    this.css += "}\n\n";
	
	this.css += ".ribbon .ribbon-content:before {\n";
	this.css += "     left: 0;\n";
	this.css += "     border-width: 1em 0 0 1em;\n";   
    this.css += "}\n\n";
	
	this.css += ".ribbon .ribbon-content:after {\n";
	this.css += "     right: 0;\n";
	this.css += "     border-width: 1em 1em 0 0;\n";   
    this.css += "}\n\n";
    
if (document.getElementById("stitch-show").checked==true) {	
	this.css += ".ribbon-stitches-top {\n";
	this.css += "     margin-top:2px;\n";
	this.css += "     border-top: 1px dashed rgba(0, 0, 0, 0.2);\n";
	this.css += "     box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);\n";
    this.css += "}\n\n";
	
	this.css += ".ribbon-stitches-bottom {\n";
	this.css += "     margin-bottom:2px;\n";
	this.css += "     border-top: 1px dashed rgba(0, 0, 0, 0.2);\n";
	this.css += "     box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.3);\n";
    this.css += "}\n\n";
}

	this.html  = '<div class="ribbon">\n';
if (document.getElementById("stitch-show").checked==true) {	
	this.html += '<div class="ribbon-stitches-top"></div>\n';
}
	this.html += '<div class="ribbon-content"><p><b>' + document.getElementById("text").value + '</b></p></div>\n';
if (document.getElementById("stitch-show").checked==true) {	
	this.html += '<div class="ribbon-stitches-bottom"></div>\n';
}
	this.html += '</div>\n';


codeDiv=document.getElementById("code");			

codeDiv.textContent=this.css

htmlcodeDiv=document.getElementById("htmlcode");			

htmlcodeDiv.textContent=this.html

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
	  ribboncreate();
    });
  });
};

rangeSlider();

window.onload=ribboncreate;