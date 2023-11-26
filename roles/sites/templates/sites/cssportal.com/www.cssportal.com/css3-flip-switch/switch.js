function switchIt() {

	activeText=document.getElementById("activeText").value;	
	inactiveText=document.getElementById("inactiveText").value;	
	activeBackcolor=document.getElementById("activeBackcolor").value;	
	activeTextcolor=document.getElementById("activeTextcolor").value;	
	inactiveBackcolor=document.getElementById("inactiveBackcolor").value;	
	inactiveTextcolor=document.getElementById("inactiveTextcolor").value;	
	fontSize=document.getElementById("fontSize").innerHTML;
	textPadding=document.getElementById("textPadding").innerHTML;	
	switchBackcolor=document.getElementById("switchBackcolor").value;	
	switchBordercolor=document.getElementById("switchBordercolor").value;	
	sBorderwidth=document.getElementById("sBorderwidth").innerHTML;
	switchSize=document.getElementById("switchSize").innerHTML;
	sWidth=document.getElementById("sWidth").innerHTML;
	sHeight=document.getElementById("sHeight").innerHTML;
	borderRadius=document.getElementById("borderRadius").innerHTML;

	
	this.css = '.flipswitch {\n';
	this.css += '  position: relative;\n';
	this.css += '  width: '+sWidth+';\n';
	this.css += '}\n';

	this.css += '.flipswitch input[type=checkbox] {\n';
	this.css += '  display: none;\n';
	this.css += '}\n';

	this.css += '.flipswitch-label {\n';
	this.css += '  display: block;\n';
	this.css += '  overflow: hidden;\n';
	this.css += '  cursor: pointer;\n';
	this.css += '  border: '+sBorderwidth+' solid '+switchBordercolor+';\n';
	this.css += '  border-radius: '+borderRadius+';\n';
	this.css += '}\n';

	this.css += '.flipswitch-inner {\n';
	this.css += '  width: 200%;\n';
	this.css += '  margin-left: -100%;\n';
	this.css += '  transition: margin 0.3s ease-in 0s;\n';
	this.css += '}\n';

	this.css += '.flipswitch-inner:before, .flipswitch-inner:after {\n';
	this.css += '  float: left;\n';
	this.css += '  width: 50%;\n';
	this.css += '  height: '+sHeight+';\n';
	this.css += '  padding: 0;\n';
	this.css += '  line-height: '+sHeight+';\n';
	this.css += '  font-size: '+fontSize+';\n';
	this.css += '  color: white;\n';
	this.css += '  font-family: Trebuchet, Arial, sans-serif;\n';
	this.css += '  font-weight: bold;\n';
	this.css += '  box-sizing: border-box;\n';
	this.css += '}\n';

	this.css += '.flipswitch-inner:before {\n';
	this.css += '  content: "'+activeText+'";\n';
	this.css += '  padding-left: '+textPadding+';\n';
	this.css += '  background-color: '+activeBackcolor+';\n';
	this.css += '  color: '+activeTextcolor+';\n';
	this.css += '}\n';

	this.css += '.flipswitch-inner:after {\n';
	this.css += '  content: "'+inactiveText+'";\n';
	this.css += '  padding-right: '+textPadding+';\n';
	this.css += '  background-color: '+inactiveBackcolor+';\n';
	this.css += '  color: '+inactiveTextcolor+';\n';
	this.css += '  text-align: right;\n';
	this.css += '}\n';

	sMargin = ((parseInt(sHeight)-parseInt(switchSize))/2);
	sRight = parseInt(sWidth)-(parseInt(switchSize)+(parseInt(sMargin)*2)+2);
	
	this.css += '.flipswitch-switch {\n';
	this.css += '  width: '+switchSize+';\n';
	this.css += '  margin: '+sMargin+'px;\n';
	this.css += '  background: '+switchBackcolor+';\n';
	this.css += '  border: '+sBorderwidth+' solid '+switchBordercolor+';\n';
	this.css += '  border-radius: '+borderRadius+';\n';
	this.css += '  position: absolute;\n';
	this.css += '  top: 0;\n';
	this.css += '  bottom: 0;\n';
	this.css += '  right: '+sRight+'px;\n';
	this.css += '  transition: all 0.3s ease-in 0s;\n';
	this.css += '}\n';

	this.css += '.flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {\n';
	this.css += '  margin-left: 0;\n';
	this.css += '}\n';

	this.css += '.flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {\n';
	this.css += '  right: 0;\n';
	this.css += '}\n';



codeDiv=document.getElementById("code");
			
codeDiv.textContent=this.css
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
	  var range__input = $(this).data('id');
      $('#'+range__input).html(this.value+'px');
	  switchIt();
    });
  });
};

rangeSlider();
window.onload=switchIt;