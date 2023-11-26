function updateAnimation() {

	reset_animation()
	demoDiv = document.getElementById("preview");
	
	aniType = document.getElementById("aniType").value;	
	aniName = document.getElementById("aniName").value;
	aniDuration = document.getElementById("aniDuration").value;
	aniDurationUnit = document.getElementById("aniDurationUnit").value;
	aniTimeFunc = document.getElementById("aniTimeFunc").value;
	aniDirection = document.getElementById("aniDirection").value;
	aniFillMode = document.getElementById("aniFillMode").value;
	aniDelay = document.getElementById("aniDelay").value;
	aniDelayUnit = document.getElementById("aniDelayUnit").value;
	if (document.getElementById("aniInfiniteItr").checked == true) {
		document.getElementById('aniItrCount').setAttribute("disabled", "true");
		aniItrCount = "infinite";
	}else{
		document.getElementById('aniItrCount').removeAttribute("disabled");
		aniItrCount = document.getElementById("aniItrCount").value;
	}	
	
	codeCSS = "animation: " + aniName + " " + aniDuration + aniDurationUnit + " " + aniTimeFunc + " " + aniDelay + aniDelayUnit + " " + aniItrCount + " " + aniDirection + " " + aniFillMode + ";";
	
	codeAniCSS = "@keyframes " + aniName + " {\n";
	codeAniCSS += ak.get(aniType) + "\n";
	codeAniCSS += '}\n';
	
	this.css = "#preview {" + codeCSS + "}";
	this.css += codeAniCSS;

	codeDiv = document.getElementById("code");
	aniCodeDiv = document.getElementById("aniCode");

	codeDiv.textContent = codeCSS;
	aniCodeDiv.textContent = codeAniCSS;
	Prism.highlightAll();	
	
	$('style').remove();
	$('head').append('<style type="text/css">' + this.css + '</style>');
	return this.css;	


}
function reset_animation() {
  var el = document.getElementById('preview');
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = null; 
}
window.onload = updateAnimation;