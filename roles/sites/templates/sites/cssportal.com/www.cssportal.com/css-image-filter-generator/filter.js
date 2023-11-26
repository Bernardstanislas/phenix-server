function switchIt() {

	blur1 = document.getElementById("blur-value").innerHTML + "px";
	brightness = document.getElementById("brightness-value").innerHTML + "%";
	contrast = document.getElementById("contrast-value").innerHTML + "%";
	grayscale = document.getElementById("grayscale-value").innerHTML + "%";
	huerotate = document.getElementById("huerotate-value").innerHTML + "deg";
	invert = document.getElementById("invert-value").innerHTML + "%";
	opacity = document.getElementById("opacity-value").innerHTML + "%";
	saturate = document.getElementById("saturate-value").innerHTML + "%";
	sepia = document.getElementById("sepia-value").innerHTML + "%";
	
	this.css = '.filter {\n';
	this.css += '  -webkit-filter:';
	if (blur1!="0px"){
		this.css += ' blur('+blur1+')';
	}
	if (brightness!="100%"){
		this.css += ' brightness('+brightness+')';
	}
	if (contrast!="100%"){
		this.css += ' contrast('+contrast+')';
	}
	if (grayscale!="0%"){
		this.css += ' grayscale('+grayscale+')';
	}
	if (huerotate!="0deg"){
		this.css += ' hue-rotate('+huerotate+')';
	}
	if (invert!="0%"){
		this.css += ' invert('+invert+')';
	}
	if (opacity!="100%"){
		this.css += ' opacity('+opacity+')';
	}
	if (saturate!="100%"){
		this.css += ' saturate('+saturate+')';
	}
	if (sepia!="0%"){
		this.css += ' sepia('+sepia+')';
	}
	this.css += ';\n';
	this.css += '  filter:';
	if (blur1!="0px"){
		this.css += ' blur('+blur1+')';
	}
	if (brightness!="100%"){
		this.css += ' brightness('+brightness+')';
	}
	if (contrast!="100%"){
		this.css += ' contrast('+contrast+')';
	}
	if (grayscale!="0%"){
		this.css += ' grayscale('+grayscale+')';
	}
	if (huerotate!="0deg"){
		this.css += ' hue-rotate('+huerotate+')';
	}
	if (invert!="0%"){
		this.css += ' invert('+invert+')';
	}
	if (opacity!="100%"){
		this.css += ' opacity('+opacity+')';
	}
	if (saturate!="100%"){
		this.css += ' saturate('+saturate+')';
	}
	if (sepia!="0%"){
		this.css += ' sepia('+sepia+')';
	}
	this.css += ';\n}\n';

	codeDiv=document.getElementById("code");
			
	codeDiv.textContent=this.css
	Prism.highlightAll();

	$('style').remove();
	$('head').append('<style type="text/css">' + this.css + '</style>');
	return this.css;	
	
}

function loadPreset(preset) {

	if (preset == "reset") {
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('100');$("#brightness-value").text('100');
		$(".form-range[data-key='contrast-value']").val('100');$("#contrast-value").text('100');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');
	} else if (preset == "ps1") {
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('110');$("#brightness-value").text('110');
		$(".form-range[data-key='contrast-value']").val('110');$("#contrast-value").text('110');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('130');$("#saturate-value").text('130');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');
	} else if (preset == "ps2") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('120');$("#brightness-value").text('120');
		$(".form-range[data-key='contrast-value']").val('90');$("#contrast-value").text('90');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('20');$("#huerotate-value").text('20');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('85');$("#saturate-value").text('85');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps3") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('110');$("#brightness-value").text('110');
		$(".form-range[data-key='contrast-value']").val('90');$("#contrast-value").text('90');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps4") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('100');$("#brightness-value").text('100');
		$(".form-range[data-key='contrast-value']").val('90');$("#contrast-value").text('90');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('20');$("#sepia-value").text('20');		
	} else if (preset == "ps5") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('105');$("#brightness-value").text('105');
		$(".form-range[data-key='contrast-value']").val('100');$("#contrast-value").text('100');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('350');$("#huerotate-value").text('350');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps6") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('120');$("#brightness-value").text('120');
		$(".form-range[data-key='contrast-value']").val('90');$("#contrast-value").text('90');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('110');$("#saturate-value").text('110');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps7") {	
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('110');$("#brightness-value").text('110');
		$(".form-range[data-key='contrast-value']").val('110');$("#contrast-value").text('110');
		$(".form-range[data-key='grayscale-value']").val('100');$("#grayscale-value").text('100');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('30');$("#sepia-value").text('30');		
	} else if (preset == "ps8") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('100');$("#brightness-value").text('100');
		$(".form-range[data-key='contrast-value']").val('150');$("#contrast-value").text('150');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('110');$("#saturate-value").text('110');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps9") {
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('110');$("#brightness-value").text('110');
		$(".form-range[data-key='contrast-value']").val('85');$("#contrast-value").text('85');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('75');$("#saturate-value").text('75');
		$(".form-range[data-key='sepia-value']").val('22');$("#sepia-value").text('22');		
	} else if (preset == "ps10") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('90');$("#brightness-value").text('90');
		$(".form-range[data-key='contrast-value']").val('150');$("#contrast-value").text('150');
		$(".form-range[data-key='grayscale-value']").val('0');$("#grayscale-value").text('0');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps11") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('110');$("#brightness-value").text('110');
		$(".form-range[data-key='contrast-value']").val('110');$("#contrast-value").text('110');
		$(".form-range[data-key='grayscale-value']").val('100');$("#grayscale-value").text('100');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	} else if (preset == "ps12") {		
		$(".form-range[data-key='blur-value']").val('0');$("#blur-value").text('0');
		$(".form-range[data-key='brightness-value']").val('90');$("#brightness-value").text('90');
		$(".form-range[data-key='contrast-value']").val('95');$("#contrast-value").text('95');
		$(".form-range[data-key='grayscale-value']").val('50');$("#grayscale-value").text('50');
		$(".form-range[data-key='huerotate-value']").val('0');$("#huerotate-value").text('0');
		$(".form-range[data-key='invert-value']").val('0');$("#invert-value").text('0');
		$(".form-range[data-key='opacity-value']").val('100');$("#opacity-value").text('100');
		$(".form-range[data-key='saturate-value']").val('100');$("#saturate-value").text('100');
		$(".form-range[data-key='sepia-value']").val('0');$("#sepia-value").text('0');		
	}
	switchIt();
}
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  switchIt();
    });
  });
};

rangeSlider();
window.onload=switchIt;