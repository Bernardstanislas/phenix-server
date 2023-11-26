function cssColumns() {

	colCount = document.getElementById("column-count").innerHTML;	
	colGap = document.getElementById("column-gap").innerHTML + "px";	
	ruleWidth = document.getElementById("rule-width").innerHTML + "px";
	ruleStyle = document.getElementById("border-style").value;
	ruleColor = document.getElementById("rule-color").value;
	
	
	if (document.getElementById("prefixes").checked==true) {
		this.css = '.columns {\n';
		this.css += '  -webkit-column-count: ' + colCount + ';\n';
		this.css += '  -mox-column-count: ' + colCount + ';\n';
		this.css += '  column-count: ' + colCount + ';\n';
		this.css += '  -webkit-column-gap: ' + colGap + ';\n';
		this.css += '  -moz-column-gap: ' + colGap + ';\n';
		this.css += '  column-gap: ' + colGap + ';\n';
		this.css += '  -webkit-column-rule: ' + ruleWidth + ' ' + ruleStyle + ' ' + ruleColor + ';\n';
		this.css += '  -moz-column-rule: ' + ruleWidth + ' ' + ruleStyle + ' ' + ruleColor + ';\n';
		this.css += '  column-rule: ' + ruleWidth + ' ' + ruleStyle + ' ' + ruleColor + ';\n';
		this.css += '}\n';
	}else{
		this.css = '.columns {\n';
		this.css += '  column-count: ' + colCount + ';\n';
		this.css += '  column-gap: ' + colGap + ';\n';
		this.css += '  column-rule: ' + ruleWidth + ' ' + ruleStyle + ' ' + ruleColor + ';\n';
		this.css += '}\n';		
	}
		


	codeDiv = document.getElementById("code");			

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
	  cssColumns();
    });
  });
};

rangeSlider();

window.onload=cssColumns;