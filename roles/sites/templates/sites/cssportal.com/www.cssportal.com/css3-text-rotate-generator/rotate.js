function rotateme() {

	demoDiv=document.getElementById("demo");
	demoContainerDiv=document.getElementById("demo-container");
	
	textColor=document.getElementById("text-color").value;	
	demoBackgroundColor=document.getElementById("cont-color").value;
	rotation=document.getElementById("rotation").innerHTML + "deg";	
	fontName=document.getElementById("fontname").value;
	
	
	this.css = '.rotate {\n';
	this.css += '  font-family: '+fontName+';\n';
	this.css += '  color: '+textColor+';\n';
	this.css += '  transform: rotate('+rotation+');\n';
	this.css += '}\n';
		
	demoContainerDiv.style.backgroundColor=demoBackgroundColor;


	codeDiv=document.getElementById("code");			

	codeDiv.textContent=this.css;
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
	  rotateme();
    });
  });
};

rangeSlider();

window.onload=rotateme;