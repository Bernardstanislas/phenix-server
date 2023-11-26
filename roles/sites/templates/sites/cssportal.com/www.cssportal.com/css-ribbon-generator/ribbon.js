function switchIt() {

	startColor=document.getElementById("startColor").value;	
	endColor=document.getElementById("endColor").value;	
	activeText=document.getElementById("activeText").value;	


	
	this.css = '.box {\n';
	this.css += '  width: 200px; height: 300px;\n';
	this.css += '  position: relative;\n';
	this.css += '  border: 1px solid #BBB;\n';
	this.css += '  background: #EEE;\n';
	this.css += '}\n';

	this.css += '.ribbon {\n';
	this.css += '  position: absolute;\n';
if (document.getElementById("posRight").checked==true) {
	this.css += '  right: -5px; top: -5px;\n';
}else{
	this.css += '  left: -5px; top: -5px;\n';
}
	this.css += '  z-index: 1;\n';
	this.css += '  overflow: hidden;\n';
	this.css += '  width: 75px; height: 75px;\n';
	this.css += '  text-align: right;\n';
	this.css += '}\n';

	this.css += '.ribbon span {\n';
	this.css += '  font-size: 10px;\n';
	this.css += '  font-weight: bold;\n';
	this.css += '  color: #FFF;\n';
	this.css += '  text-transform: uppercase;\n';
	this.css += '  text-align: center;\n';
	this.css += '  line-height: 20px;\n';
if (document.getElementById("posRight").checked==true) {
	this.css += '  transform: rotate(45deg);\n';
	this.css += '  -webkit-transform: rotate(45deg);\n';
}else{
	this.css += '  transform: rotate(-45deg);\n';
	this.css += '  -webkit-transform: rotate(-45deg);\n';
}
	this.css += '  width: 100px;\n';
	this.css += '  display: block;\n';
	this.css += '  background: #79A70A;\n';
	this.css += '  background: linear-gradient('+startColor+' 0%, '+endColor+' 100%);\n';
	this.css += '  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\n';
	this.css += '  position: absolute;\n';
if (document.getElementById("posRight").checked==true) {
	this.css += '  top: 19px; right: -21px;\n';
}else{
	this.css += '  top: 19px; left: -21px;\n';
}
	this.css += '}\n';

	this.css += '.ribbon span::before {\n';
	this.css += '  content: "";\n';
	this.css += '  position: absolute; left: 0px; top: 100%;\n';
	this.css += '  z-index: -1;\n';
	this.css += '  border-left: 3px solid '+endColor+';\n';
	this.css += '  border-right: 3px solid transparent;\n';
	this.css += '  border-bottom: 3px solid transparent;\n';
	this.css += '  border-top: 3px solid '+endColor+';\n';
	this.css += '}\n';

	this.css += '.ribbon span::after {\n';
	this.css += '  content: "";\n';
	this.css += '  position: absolute; right: 0px; top: 100%;\n';
	this.css += '  z-index: -1;\n';
	this.css += '  border-left: 3px solid transparent;\n';
	this.css += '  border-right: 3px solid '+endColor+';\n';
	this.css += '  border-bottom: 3px solid transparent;\n';
	this.css += '  border-top: 3px solid '+endColor+';\n';
	this.css += '}\n';

	this.html = '<div class="box">\n';
	this.html += '   <div class="ribbon"><span>'+activeText+'</span></div>\n';
	this.html += '</div>';


codeDiv=document.getElementById("code");
			
//if(codeDiv.innerText){
	//codeDiv.innerText=this.css
//}else{
	codeDiv.textContent=this.css
//}

codeHTML=document.getElementById("codeHTML");
			
//if(codeHTML.innerText){
//	codeHTML.innerText=this.html
//}else{
	codeHTML.textContent=this.html
//}

document.getElementById("changeText").innerHTML = activeText;
Prism.highlightAll(); 

$('style').remove();
$('head').append('<style type="text/css">' + this.css + '</style>');
return this.css;	
	
}

function loadPreset(preset) {

	if (preset == "p1") {
		document.getElementById("startColor").value = "#9BC90D";
		document.getElementById("endColor").value = "#79A70A";
		document.getElementById("startColor").style.backgroundColor = "#9BC90D";
		document.getElementById("endColor").style.backgroundColor = "#79A70A";
	} else if (preset == "p2") {
		document.getElementById("startColor").value = "#2989d8";
		document.getElementById("endColor").value = "#1e5799";
		document.getElementById("startColor").style.backgroundColor = "#2989d8";
		document.getElementById("endColor").style.backgroundColor = "#1e5799";
	} else if (preset == "p3") {
		document.getElementById("startColor").value = "#F70505";
		document.getElementById("endColor").value = "#8F0808";
		document.getElementById("startColor").style.backgroundColor = "#F70505";
		document.getElementById("endColor").style.backgroundColor = "#8F0808";
	} else if (preset == "p4") {
		document.getElementById("startColor").value = "#B6BAC9";
		document.getElementById("endColor").value = "#808080";
		document.getElementById("startColor").style.backgroundColor = "#B6BAC9";
		document.getElementById("endColor").style.backgroundColor = "#808080";
	} else if (preset == "p5") {
		document.getElementById("startColor").value = "#05EFF7";
		document.getElementById("endColor").value = "#087F8F";
		document.getElementById("startColor").style.backgroundColor = "#05EFF7";
		document.getElementById("endColor").style.backgroundColor = "#087F8F";
	} else if (preset == "p6") {
		document.getElementById("startColor").value = "#F79E05";
		document.getElementById("endColor").value = "#8F5408";
		document.getElementById("startColor").style.backgroundColor = "#F79E05";
		document.getElementById("endColor").style.backgroundColor = "#8F5408";
	}
	switchIt();
}
window.onload=switchIt;