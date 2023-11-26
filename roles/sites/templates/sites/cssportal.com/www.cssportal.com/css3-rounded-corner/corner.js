function cornerme() {
	
	demoDiv=document.getElementById("demo");
	demoContainerDiv=document.getElementById("demo-container");
	codeDiv=document.getElementById("code");
	if (document.getElementById("pixel").checked==true) {
		newunit = "px";
	}else{
		newunit = "%";
	}
		
	borderWidth=document.getElementById("border-width").innerHTML + "px";
	borderColor=document.getElementById("bc-color").value;
	borderStyle=document.getElementById("border-style").value;
//One	
	allRadius=document.getElementById("radius-value").innerHTML + newunit;
//Two
	tlbrRadius=document.getElementById("tl-br-radius-value").innerHTML + newunit;
	trblRadius=document.getElementById("tr-bl-radius-value").innerHTML + newunit;
//Three
	tl3Radius=document.getElementById("tl-three-radius-value").innerHTML + newunit;
	trbl3Radius=document.getElementById("tr-bl-three-radius-value").innerHTML + newunit;
	br3Radius=document.getElementById("br-three-radius-value").innerHTML + newunit;	
//Four	
	tlRadius=document.getElementById("tl-radius-value").innerHTML + newunit;
	trRadius=document.getElementById("tr-radius-value").innerHTML + newunit;
	blRadius=document.getElementById("bl-radius-value").innerHTML + newunit;
	brRadius=document.getElementById("br-radius-value").innerHTML + newunit;
//One / One						
	allRadiusH=document.getElementById("radius-value-h").innerHTML + newunit;
	allRadiusV=document.getElementById("radius-value-v").innerHTML + newunit;
//Two / Two
	tlbrRadiusH=document.getElementById("tl-br-radius-value-h").innerHTML + newunit;
	tlbrRadiusV=document.getElementById("tl-br-radius-value-v").innerHTML + newunit;
	trblRadiusH=document.getElementById("tr-bl-radius-value-h").innerHTML + newunit;				
	trblRadiusV=document.getElementById("tr-bl-radius-value-v").innerHTML + newunit;	
//Three / Three
	tl3RadiusH=document.getElementById("tl-three-radius-value-h").innerHTML + newunit;
	tl3RadiusV=document.getElementById("tl-three-radius-value-v").innerHTML + newunit;
	trbl3RadiusH=document.getElementById("tr-bl-three-radius-value-h").innerHTML + newunit;
	trbl3RadiusV=document.getElementById("tr-bl-three-radius-value-v").innerHTML + newunit;
	br3RadiusH=document.getElementById("br-three-radius-value-h").innerHTML + newunit;	
	br3RadiusV=document.getElementById("br-three-radius-value-v").innerHTML + newunit;	
//Four / Four	
	tlRadiusH=document.getElementById("tl-radius-value-h").innerHTML + newunit;
	tlRadiusV=document.getElementById("tl-radius-value-v").innerHTML + newunit;
	trRadiusH=document.getElementById("tr-radius-value-h").innerHTML + newunit;
	trRadiusV=document.getElementById("tr-radius-value-v").innerHTML + newunit;
	blRadiusH=document.getElementById("bl-radius-value-h").innerHTML + newunit;
	blRadiusV=document.getElementById("bl-radius-value-v").innerHTML + newunit;
	brRadiusH=document.getElementById("br-radius-value-h").innerHTML + newunit;
	brRadiusV=document.getElementById("br-radius-value-v").innerHTML + newunit;

	
	if (demoDiv) {
				
		demoDiv.style.border = borderWidth + " " + borderStyle + " " + borderColor;
		 
		if (document.getElementById("onevalue").checked==true) {
			demoDiv.style.borderRadius = allRadius;
			codeDiv.textContent = "border-radius: " + allRadius + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}
		if (document.getElementById("twovalue").checked==true) {
			demoDiv.style.borderRadius = tlbrRadius + " " + trblRadius;
			codeDiv.textContent = "border-radius: " + tlbrRadius + " " + trblRadius + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}	
		if (document.getElementById("threevalue").checked==true) {
			demoDiv.style.borderRadius = tl3Radius + " " + trbl3Radius + " " + br3Radius;
			codeDiv.textContent = "border-radius: " + tl3Radius + " " + trbl3Radius + " " + br3Radius + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}
		if (document.getElementById("fourvalue").checked==true) {
			demoDiv.style.borderRadius = tlRadius + " " + trRadius + " " + brRadius + " " + blRadius;
			codeDiv.textContent = "border-radius: " + tlRadius + " " + trRadius + " " + brRadius + " " + blRadius + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}
		if (document.getElementById("oneonevalue").checked==true) {
			demoDiv.style.borderRadius = allRadiusH + " / " + allRadiusV;
			codeDiv.textContent = "border-radius: " + allRadiusH + " / " + allRadiusV +"; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}
		if (document.getElementById("twotwovalue").checked==true) {
			demoDiv.style.borderRadius = tlbrRadiusH + " " + trblRadiusH + " / " + tlbrRadiusV + " " + trblRadiusV;
			codeDiv.textContent = "border-radius: " + tlbrRadiusH + " " + trblRadiusH + " / " + tlbrRadiusV + " " + trblRadiusV + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}
		if (document.getElementById("threethreevalue").checked==true) {
			demoDiv.style.borderRadius = tl3RadiusH + " " + trbl3RadiusH + " " + br3RadiusH + " / " + tl3RadiusV + " " + trbl3RadiusV + " " + br3RadiusV;
			codeDiv.textContent = "border-radius: " + tl3RadiusH + " " + trbl3RadiusH + " " + br3RadiusH + " / " + tl3RadiusV + " " + trbl3RadiusV + " " + br3RadiusV + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}
		if (document.getElementById("fourfourvalue").checked==true) {
			demoDiv.style.borderRadius = tlRadiusH + " " + trRadiusH + " " + blRadiusH + " " + brRadiusH + " / " + tlRadiusV + " " + trRadiusV + " " + blRadiusV + " " + brRadiusV;
			codeDiv.textContent = "border-radius: " + tlRadiusH + " " + trRadiusH + " " + blRadiusH + " " + brRadiusH + " / " + tlRadiusV + " " + trRadiusV + " " + blRadiusV + " " + brRadiusV + "; \n" +
			"border: " + borderWidth + " " + borderStyle + " " + borderColor + ";";
			Prism.highlightAll();
		}		


	}
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
	  cornerme();
    });
  });
};

rangeSlider();
window.onload=cornerme;