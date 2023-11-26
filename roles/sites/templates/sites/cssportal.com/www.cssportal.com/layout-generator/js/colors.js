function setColors(){
	document.getElementById("content_background_n").value = "#FFFFFF"; 		
	document.getElementById("header_background_n").value = "#FF6633"; 
	document.getElementById("menu_background_n").value = "#FFCC33"; 		
	document.getElementById("footer_background_n").value = "#33FF66"; 		
	document.getElementById("left_background_n").value = "#33CCFF"; 		
	document.getElementById("right_background_n").value = "#CC33FF"; 		
	document.getElementById("left_background2_n").value = "#33CCFF"; 		
	document.getElementById("right_background2_n").value = "#CC33FF"; 		
}
function getColorMain(){
	document.getElementById("content_background_n").value = document.getElementById('content_background').value; 		
}
function getColorHeader(){
	document.getElementById("header_background_n").value = document.getElementById('header_background').value; 
}
function getColorNav(){
	document.getElementById("menu_background_n").value = document.getElementById('menu_background').value; 		
}
function getColorFooter(){
	document.getElementById("footer_background_n").value = document.getElementById('footer_background').value; 		
}
function getColorLeft(){
	document.getElementById("left_background_n").value = document.getElementById('left_background').value; 		
}
function getColorRight(){
	document.getElementById("right_background_n").value = document.getElementById('right_background').value; 		
}
function getColorBoth(){
	document.getElementById("left_background2_n").value = document.getElementById('left_background2').value; 		
	document.getElementById("right_background2_n").value = document.getElementById('right_background2').value; 		
}
