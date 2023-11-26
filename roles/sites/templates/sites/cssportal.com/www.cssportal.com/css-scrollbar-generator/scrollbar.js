function scrollMe() {
	
	demoDiv=document.getElementById("preview");
	codeDiv = document.getElementById("code");


//Trackbar
	
	barBackColor = document.getElementById("b-color").value;
	barBackHoverColor = document.getElementById("b-hover-color").value;
	barBackActiveColor = document.getElementById("b-active-color").value;
	barWidth = document.getElementById("track-width").innerHTML + "px";
	barRadius = document.getElementById("track-radius").innerHTML + "px";
	
	
//Thumb

	thumbBackColor = document.getElementById("thumb-b-color").value;
	thumbBackHoverColor = document.getElementById("thumb-h-color").value;
	thumbBackActiveColor = document.getElementById("thumb-a-color").value;
	//thumbWidth = document.getElementById("thumb-width").innerHTML + "px";
	thumbRadius = document.getElementById("thumb-radius").innerHTML + "px";

//Borders

	barBorder = document.getElementById("track-border").value;
	barBorderColor = document.getElementById("border-track-color").value;
	barBorderWidth = document.getElementById("border-track-width").innerHTML + "px";
	thumbBorder = document.getElementById("thumb-border").value;
	thumbBorderColor = document.getElementById("border-thumb-color").value;
	thumbBorderWidth = document.getElementById("border-thumb-width").innerHTML + "px";


	this.css = '/* Firefox */\n';
	this.css += '* {\n';
	this.css += '  scrollbar-width: thin;\n';
	this.css += '  scrollbar-color: ' + thumbBackColor + ' ' + barBackColor + ';\n';
	this.css += '}\n';
	
	this.css += '\n';
	
	this.css += '/* Chrome, Edge and Safari */\n';
	this.css += '*::-webkit-scrollbar {\n';
	this.css += '  height: ' + barWidth + ';\n';
	this.css += '  width: ' + barWidth + ';\n';
	this.css += '}\n';
	
	this.css += '*::-webkit-scrollbar-track {\n';
	this.css += '  border-radius: ' + barRadius + ';\n';
	this.css += '  background-color: ' + barBackColor + ';\n';
	if (barBorderWidth !== "0px") {
		this.css += '  border: ' + barBorderWidth + ' ' + barBorder + ' ' + barBorderColor + ';\n';
	}
	this.css += '}\n';

	this.css += '\n';
	
	this.css += '*::-webkit-scrollbar-track:hover {\n';
	this.css += '  background-color: ' + barBackHoverColor + ';\n';
	this.css += '}\n';

	this.css += '\n';
	
	this.css += '*::-webkit-scrollbar-track:active {\n';
	this.css += '  background-color: ' + barBackActiveColor + ';\n';
	this.css += '}\n';

	this.css += '\n';
	
	this.css += '*::-webkit-scrollbar-thumb {\n';
	this.css += '  border-radius: ' + thumbRadius + ';\n';
	this.css += '  background-color: ' + thumbBackColor + ';\n';
	if (thumbBorderWidth !== "0px") {
		this.css += '  border: ' + thumbBorderWidth + ' ' + thumbBorder + ' ' + thumbBorderColor + ';\n';
	}
	this.css += '}\n';

	this.css += '\n';
	
	this.css += '*::-webkit-scrollbar-thumb:hover {\n';
	this.css += '  background-color: ' + thumbBackHoverColor + ';\n';
	this.css += '}\n';

	this.css += '\n';
	
	this.css += '*::-webkit-scrollbar-thumb:active {\n';
	this.css += '  background-color: ' + thumbBackActiveColor + ';\n';
	this.css += '}\n';
	
	codeDiv.textContent=this.css
	Prism.highlightAll();
	
	$('style').remove();
	$('head').append('<style type="text/css">' + this.css + '</style>');
	return this.css;
}

$(document).ready(function() {
    $("input[name$='corners']").click(function() {
        var test = $(this).val();

        $("div.options").hide();
        $("#corners" + test).show();
    });
    $("input[name$='units']").click(function() {
        var unit = $(this).val();
        $(".units").html(unit);
    });
});

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  scrollMe();
    });
  });
};

rangeSlider();

window.onload=scrollMe;