/*  
CSS Menu Generator
Version: 2.0.5
Author: CSS Portal
Author URL: https://www.cssportal.com/
Copyright (c)2012 CSSPortal.com all rights reserved
*/

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
	
	var updateOutput = function(e) {
		var list = e.length ? e : $(e.target),
			output = list.data('output');
		if(window.JSON) {
			data1 = window.JSON.stringify(list.nestable('serialize'));
			var data2 = JSON.parse(data1);

			var newMenu;
			newMenu = "<nav id='menu'>\n";
			newMenu += "  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>\n";
			newMenu += "  <ul>\n";
			$.each(data2, function(index, element) {
				if(element.children !== undefined){
					newMenu += "    <li><a class='dropdown-arrow' href='" + element.url + "'>" + element.label + "</a>\n";
					newMenu += "      <ul class='sub-menus'>\n";
				  $.each(element.children, function(index, element) {
					 newMenu += "        <li><a href='" + element.url + "'>" + element.label + "</a></li>\n";
				  });
					newMenu += "      </ul>\n    </li>\n";
				}else{
					newMenu += "    <li><a href='" + element.url + "'>" + element.label + "</a></li>\n";
				}
			});				
			newMenu += "  </ul>\n</nav>";		

			$('#htmlcode').text(newMenu);							
			$('#demo-container').html(newMenu);	
			Prism.highlightAll()			
		}
		else {
			output.val('JSON browser support required for this demo.');
		}
	};
	
	$('#nestable3').nestable().on('change', updateOutput);
	updateOutput($('#nestable3').data('output', $('#nestable3-output')));			

	$('body').on('click', '.btn_submit', function() {
		var new_menu = $('.add_menu').val();
		var new_url = $('.add_url').val();
		if (new_menu == "") { new_menu = "Menu Item" };
		if (new_url == "") { new_url = "http://" };
		$('.dd-append').append('<li class="dd-item dd3-item" data-label="'+new_menu+'" data-url="'+new_url+'"><div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">'+new_menu+'</div><div class="dd3-delete">Delete</div></li>');
		updateOutput($('#nestable3').data('output', $('#nestable3-output')));
	});
  
	$('body').on('click', '.dd3-delete', function() {
		$(this).closest("li").remove();
		updateOutput($('#nestable3').data('output', $('#nestable3-output')));
	}); 
	
	$(".fa-thumbtack").click(function(){
		$(".fa-thumbtack").toggleClass("pressed");
		$("#mainmenucontainer").toggleClass("sticky");
	});	

});

function updatemenu() {
demoContainerDiv = document.getElementById("demo-container");
demoBackgroundColor = document.getElementById("cont-color").value;

//STYLE CHANGE
demoContainerDiv.style.backgroundColor=demoBackgroundColor;

//MENU BAR
backgroundColor = document.getElementById("back-color").value;
gradientStart = document.getElementById("start-color").value;
gradientEnd = document.getElementById("end-color").value;
mbHeight = document.getElementById("mb-height").innerHTML;
allRadius = document.getElementById("radius-value").innerHTML;
borderWidth = document.getElementById("border-width").innerHTML;
borderColor = document.getElementById("bc-color").value;
borderStyle = document.getElementById("border-style").value;
newMbHeight = +mbHeight - (+borderWidth * 2);

//TOP MENU
fontColortop = document.getElementById("font-color-top").value;
fontSizetop = document.getElementById("font-size-top").innerHTML;
fontTransform = document.getElementById("font-transform").value;
dropDownIcon = document.querySelector('input[name="dropdownicon"]:checked').value;
textColorhovertop = document.getElementById("text-color-hover-top").value;
backgroundColorhovertop = document.getElementById("back-color-hover-top").value;

//SUB MENU
fontColorsub = document.getElementById("font-color-sub").value;
fontSizesub = document.getElementById("font-size-sub").innerHTML;
fontTransformsub = document.getElementById("font-transform-sub").value;
backgroundColorsub = document.getElementById("back-color-sub").value;
textColorhover = document.getElementById("text-color-hover").value;
backgroundColorhover = document.getElementById("back-color-hover").value;

if (document.getElementById("responsive-menu").checked == true) {
	document.getElementById("menu").style.borderBottomRightRadius = "0";
	document.getElementById("menu").style.borderBottomLeftRadius = "0";
}else {
	document.getElementById("menu").style.borderRadius = allRadius+"px";
}

this.js = "function updatemenu() {\n";
this.js += "  if (document.getElementById('responsive-menu').checked == true) {\n";
this.js += "    document.getElementById('menu').style.borderBottomRightRadius = '0';\n";
this.js += "    document.getElementById('menu').style.borderBottomLeftRadius = '0';\n";
this.js += "  }else{\n";
this.js += "    document.getElementById('menu').style.borderRadius = '" + allRadius + "px';\n";
this.js += "  }\n";
this.js += "}\n";

this.css = '#menu {\n';
if (document.getElementById("solid-back").checked==true) {
	this.css += '	background: ' + backgroundColor + ';\n';
}else{
	this.css += '	background: ' + backgroundColor + ';\n';
	this.css += '	background: linear-gradient(to bottom,  '+gradientStart+',  '+gradientEnd+');\n';
}
this.css +=	'	color: #FFF;\n';
this.css +=	'	height: ' + mbHeight + 'px;\n';
this.css +=	'	padding-left: 18px;\n';
this.css += '	border-radius: ' + allRadius + 'px;\n';
if (borderWidth > 0) {
	this.css += '	border: ' + borderWidth + 'px ' + borderStyle + ' ' + borderColor + ';\n';
}
this.css +=	'}\n';
this.css +=	'#menu ul, #menu li {\n';
this.css +=	'	margin: 0 auto;\n';
this.css +=	'	padding: 0;\n';
this.css +=	'	list-style: none\n';
this.css +=	'}\n';
this.css +=	'#menu ul {\n';
this.css +=	'	width: 100%;\n';
this.css +=	'}\n';
this.css +=	'#menu li {\n';
this.css +=	'	float: left;\n';
this.css +=	'	display: inline;\n';
this.css +=	'	position: relative;\n';
this.css +=	'}\n';
this.css +=	'#menu a {\n';
this.css +=	'	display: block;\n';
this.css +=	'	line-height: ' + newMbHeight + 'px;\n';
this.css +=	'	padding: 0 14px;\n';
this.css +=	'	text-decoration: none;\n';
this.css +=	'	color: ' + fontColortop + ';\n';
this.css +=	'	font-size: ' + fontSizetop + 'px;\n';
if (fontTransform !== 'none') {
	this.css +=	'	text-transform: ' + fontTransform + ';\n';
}
this.css +=	'}\n';
this.css +=	'#menu a.dropdown-arrow:after {\n';
this.css +=	'	content: "\\' + dropDownIcon + '";\n';
this.css +=	'	margin-left: 5px;\n';
this.css +=	'}\n';
this.css +=	'#menu li a:hover {\n';
this.css +=	'	color: ' + textColorhovertop + ';\n';
this.css +=	'	background: ' + backgroundColorhovertop + ';\n';
this.css +=	'}\n';
this.css +=	'#menu input {\n';
this.css +=	'	display: none;\n';
this.css +=	'	margin: 0;\n';
this.css +=	'	padding: 0;\n';
this.css +=	'	height: ' + mbHeight + 'px;\n';
this.css +=	'	width: 100%;\n';
this.css +=	'	opacity: 0;\n';
this.css +=	'	cursor: pointer\n';
this.css +=	'}\n';
this.css +=	'#menu label {\n';
this.css +=	'	display: none;\n';
this.css +=	'	line-height: ' + newMbHeight + 'px;\n';
this.css +=	'	text-align: center;\n';
this.css +=	'	position: absolute;\n';
this.css +=	'	left: 35px\n';
this.css +=	'}\n';
this.css +=	'#menu label:before {\n';
this.css +=	'	font-size: 1.6em;\n';
this.css +=	'	content: "\\2261"; \n';
this.css +=	'	margin-left: 20px;\n';
this.css +=	'}\n';
this.css +=	'#menu ul.sub-menus{\n';
this.css +=	'	height: auto;\n';
this.css +=	'	overflow: hidden;\n';
this.css +=	'	width: 170px;\n';
this.css +=	'	background: ' + backgroundColorsub + ';\n';
this.css +=	'	position: absolute;\n';
this.css +=	'	z-index: 99;\n';
this.css +=	'	display: none;\n';
this.css +=	'}\n';
this.css +=	'#menu ul.sub-menus li {\n';
this.css +=	'	display: block;\n';
this.css +=	'	width: 100%;\n';
this.css +=	'}\n';
this.css +=	'#menu ul.sub-menus a {\n';
this.css +=	'	color: ' + fontColorsub + ';\n';
this.css +=	'	font-size: ' + fontSizesub + 'px;\n';
if (fontTransformsub !== 'none') {
	this.css +=	'	text-transform: ' + fontTransformsub + ';\n';
}
this.css +=	'}\n';
this.css +=	'#menu li:hover ul.sub-menus {\n';
this.css +=	'	display: block\n';
this.css +=	'}\n';
this.css +=	'#menu ul.sub-menus a:hover{\n';
this.css +=	'	background: ' + backgroundColorhover + ';\n';
this.css +=	'	color: ' + textColorhover + ';\n';
this.css +=	'}\n';
this.css +=	'@media screen and (max-width: 800px){\n';
this.css +=	'	#menu {position:relative}\n';
this.css +=	'	#menu ul {background:#111;position:absolute;top:100%;right:0;left:0;z-index:3;height:auto;display:none}\n';
this.css +=	'	#menu ul.sub-menus {width:100%;position:static;}\n';
this.css +=	'	#menu ul.sub-menus a {padding-left:30px;}\n';
this.css +=	'	#menu li {display:block;float:none;width:auto;}\n';
this.css +=	'	#menu input, #menu label {position:absolute;top:0;left:0;display:block}\n';
this.css +=	'	#menu input {z-index:4}\n';
this.css +=	'	#menu input:checked + label {color:white}\n';
this.css +=	'	#menu input:checked + label:before {content:"\\00d7"}\n';
this.css +=	'	#menu input:checked ~ ul {display:block}\n';
this.css +=	'}\n';


codeDiv=document.getElementById("newcode");	
codeDivJS=document.getElementById("jscode");		

codeDiv.textContent=this.css
codeDivJS.textContent=this.js
Prism.highlightAll();


$('style').remove();
$('head').append('<style type="text/css">' + this.css + '</style>');
return this.css;	

}
function downloadZip() {
	htmlCode = document.getElementById("htmlcode").innerText;
	cssCode = document.getElementById("newcode").innerText;
	jsCode = document.getElementById("jscode").innerText;
	
	pageCode = "<!DOCTYPE html>\n<html>\n<meta charset='UTF-8'>\n";
	pageCode += "<link rel='stylesheet' href='css/style.css'>\n";
	pageCode += "<script src='js/script.js'></script>";
	pageCode += "<body>\n";
	
	htmlCode = pageCode + htmlCode;
	htmlCode += "\n</body>\n</html>";
	
	var zip = new JSZip();
	
	zip.file("index.html", htmlCode);
	var cssfile = zip.folder("css");
	cssfile.file("style.css", cssCode);
	var jsfile = zip.folder("js");
	jsfile.file("script.js", jsCode);
	zip.generateAsync({type:"blob"})
	.then(function(content) {
		saveAs(content, "css-menu.zip");
	});	
}

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  updatemenu();
    });
  });
};

rangeSlider();

window.onload=updatemenu;