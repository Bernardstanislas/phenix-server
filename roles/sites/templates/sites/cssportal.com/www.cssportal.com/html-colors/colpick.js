var colorPicker = new iro.ColorPicker(".colorPicker", {

  width: 280,
  color: "rgb(110, 173, 255)",
  borderWidth: 2,
  borderColor: "#e3e3e3" 

});


var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");


colorPicker.on(["color:init", "color:change"], function (color) {
  
  hexInput.value = color.hexString.toUpperCase();
  $("#selCol").text(color.hexString.toUpperCase());
  $("#selectedColor").css("background-color", color.hexString);
  
  $("#txtOutHexColor").val(color.hexString.toUpperCase());
  $("#txtOutRgbColor").val(color.rgbString);
  $("#txtOutHslColor").val(color.hslString);
  
  colorChange(hexInput.value.toUpperCase());
});

hexInput.addEventListener('change', function () {
  colorPicker.color.hexString = this.value;
});

var swatchGrid = document.getElementById('combine-output');

swatchGrid.addEventListener('click', function(e) {
  var clickTarget = e.target;

  if (clickTarget.dataset.color) {
    colorPicker.color.set(clickTarget.dataset.color);
  }
});

function colorChange(color) {
	var tiny = tinycolor(color);

	$("#cname").val((tiny.toName() || "none assigned"));
	$("#cnamecopy").attr("data-clipboard-text", (tiny.toName() || "none assigned"));

	var allColors = [];
	for (var i in tinycolor.names) {
		allColors.push(i);
	}

	 var combines = $("#combine-output").toggleClass("invisible", !tiny.ok);

	 var triad = tinycolor.triad(tiny);
	 combines.find(".triad").html($.map(triad, function(e) {
		 return '<span data-color="'+e.toHexString().toUpperCase()+'" title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em data-color="'+e.toHexString().toUpperCase()+'">'+e.toHexString().toUpperCase()+'</em></span>'
	 }).join(''));

	 var tetrad = tinycolor.tetrad(tiny);
	 combines.find(".tetrad").html($.map(tetrad, function(e) {
		 return '<span data-color="'+e.toHexString().toUpperCase()+'" title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em data-color="'+e.toHexString().toUpperCase()+'">'+e.toHexString().toUpperCase()+'</em></span>'
	 }).join(''));

	 var mono = tinycolor.monochromatic(tiny);
	 combines.find(".mono").html($.map(mono, function(e) {
		 return '<span data-color="'+e.toHexString().toUpperCase()+'" title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em data-color="'+e.toHexString().toUpperCase()+'">'+e.toHexString().toUpperCase()+'</em></span>'
	 }).join(''));

	 var analogous = tinycolor.analogous(tiny);
	 combines.find(".analogous").html($.map(analogous, function(e) {
		 return '<span data-color="'+e.toHexString().toUpperCase()+'" title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em data-color="'+e.toHexString().toUpperCase()+'">'+e.toHexString().toUpperCase()+'</em></span>'
	 }).join(''));

	 var sc = tinycolor.splitcomplement(tiny);
	 combines.find(".sc").html($.map(sc, function(e) {
		 return '<span data-color="'+e.toHexString().toUpperCase()+'" title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em data-color="'+e.toHexString().toUpperCase()+'">'+e.toHexString().toUpperCase()+'</em></span>'
	 }).join(''));
	 
	 var sc = tinycolor.complement1(tiny);
	 combines.find(".sc1").html($.map(sc, function(e) {
		 return '<span data-color="'+e.toHexString().toUpperCase()+'" title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em data-color="'+e.toHexString().toUpperCase()+'">'+e.toHexString().toUpperCase()+'</em></span>'
	 }).join(''));
}