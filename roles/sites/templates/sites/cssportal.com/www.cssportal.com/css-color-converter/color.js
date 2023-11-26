		function colorChange(color) {
			var tiny = tinycolor(color);

			$("#hex").val(tiny.toHexString().toUpperCase());
			$("#hexcopy").attr("data-clipboard-text", tiny.toHexString().toUpperCase());
			$("#rgb").val(tiny.toRgbString().toUpperCase());
			$("#rgbcopy").attr("data-clipboard-text", tiny.toRgbString().toUpperCase());
			$("#rgbp").val(tiny.toPercentageRgbString().toUpperCase());
			$("#rgbpcopy").attr("data-clipboard-text", tiny.toPercentageRgbString().toUpperCase());
			$("#hsl").val(tiny.toHslString().toUpperCase());
			$("#hslcopy").attr("data-clipboard-text", tiny.toHslString().toUpperCase());
			$("#hsv").val(tiny.toHsvString().toUpperCase());
			$("#hsvcopy").attr("data-clipboard-text", tiny.toHsvString().toUpperCase());
			$("#cname").val((tiny.toName() || "none assigned"));
			$("#cnamecopy").attr("data-clipboard-text", (tiny.toName() || "none assigned"));
			$("#colorshow").css("background-color", tiny.toHexString().toUpperCase());
			$(".hexvalue").text(tiny.toHexString().toUpperCase());
			$(".hexvalue1").text(tiny.toHex().toUpperCase());
			$(".l1").css("background-color", tinycolor.lighten(tiny, 10).toHexString().toUpperCase());
			$(".l1").attr("title", tinycolor.lighten(tiny, 10).toHexString().toUpperCase());
			$("#l1").text(tinycolor.lighten(tiny, 10).toHexString().toUpperCase());
			$(".l2").css("background-color", tinycolor.lighten(tiny, 15).toHexString().toUpperCase());
			$(".l2").attr("title", tinycolor.lighten(tiny, 15).toHexString().toUpperCase());
			$("#l2").text(tinycolor.lighten(tiny, 15).toHexString().toUpperCase());
			$(".l3").css("background-color", tinycolor.lighten(tiny, 20).toHexString().toUpperCase());
			$(".l3").attr("title", tinycolor.lighten(tiny, 20).toHexString().toUpperCase());
			$("#l3").text(tinycolor.lighten(tiny, 20).toHexString().toUpperCase());
			$(".l4").css("background-color", tinycolor.lighten(tiny, 25).toHexString().toUpperCase());
			$(".l4").attr("title", tinycolor.lighten(tiny, 25).toHexString().toUpperCase());
			$("#l4").text(tinycolor.lighten(tiny, 25).toHexString().toUpperCase());
			$(".l5").css("background-color", tinycolor.lighten(tiny, 30).toHexString().toUpperCase());
			$(".l5").attr("title", tinycolor.lighten(tiny, 30).toHexString().toUpperCase());
			$("#l5").text(tinycolor.lighten(tiny, 30).toHexString().toUpperCase());
			$(".d1").css("background-color", tinycolor.darken(tiny, 10).toHexString().toUpperCase());
			$(".d1").attr("title", tinycolor.darken(tiny, 10).toHexString().toUpperCase());
			$("#d1").text(tinycolor.darken(tiny, 10).toHexString().toUpperCase());
			$(".d2").css("background-color", tinycolor.darken(tiny, 15).toHexString().toUpperCase());
			$(".d2").attr("title", tinycolor.darken(tiny, 15).toHexString().toUpperCase());
			$("#d2").text(tinycolor.darken(tiny, 15).toHexString().toUpperCase());
			$(".d3").css("background-color", tinycolor.darken(tiny, 20).toHexString().toUpperCase());
			$(".d3").attr("title", tinycolor.darken(tiny, 20).toHexString().toUpperCase());
			$("#d3").text(tinycolor.darken(tiny, 20).toHexString().toUpperCase());
			$(".d4").css("background-color", tinycolor.darken(tiny, 25).toHexString().toUpperCase());
			$(".d4").attr("title", tinycolor.darken(tiny, 25).toHexString().toUpperCase());
			$("#d4").text(tinycolor.darken(tiny, 25).toHexString().toUpperCase());
			$(".d5").css("background-color", tinycolor.darken(tiny, 30).toHexString().toUpperCase());
			$(".d5").attr("title", tinycolor.darken(tiny, 30).toHexString().toUpperCase());
			$("#d5").text(tinycolor.darken(tiny, 30).toHexString().toUpperCase());
			$(".fontcolor").css("color", tiny.toHexString().toUpperCase());
			$(".backgroundcolor").css("background-color", tiny.toHexString().toUpperCase());
			$(".bordercolor").css("border-color", tiny.toHexString().toUpperCase());

			var allColors = [];
			for (var i in tinycolor.names) {
				allColors.push(i);
			}

			 var combines = $("#combine-output").toggleClass("invisible", !tiny.ok);

			 var triad = tinycolor.triad(tiny);
			 combines.find(".triad").html($.map(triad, function(e) {
			     return '<span title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em>'+e.toHexString().toUpperCase()+'</em></span>'
			 }).join(''));

			 var tetrad = tinycolor.tetrad(tiny);
			 combines.find(".tetrad").html($.map(tetrad, function(e) {
			     return '<span title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em>'+e.toHexString().toUpperCase()+'</em></span>'
			 }).join(''));

			 var mono = tinycolor.monochromatic(tiny);
			 combines.find(".mono").html($.map(mono, function(e) {
			     return '<span title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em>'+e.toHexString().toUpperCase()+'</em></span>'
			 }).join(''));

			 var analogous = tinycolor.analogous(tiny);
			 combines.find(".analogous").html($.map(analogous, function(e) {
			     return '<span title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em>'+e.toHexString().toUpperCase()+'</em></span>'
			 }).join(''));

			 var sc = tinycolor.splitcomplement(tiny);
			 combines.find(".sc").html($.map(sc, function(e) {
			     return '<span title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em>'+e.toHexString().toUpperCase()+'</em></span>'
			 }).join(''));
			 
			 var sc = tinycolor.complement1(tiny);
			 combines.find(".sc1").html($.map(sc, function(e) {
			     return '<span title="'+e.toHexString().toUpperCase()+'" style="background:'+e.toHexString().toUpperCase()+'"><em>'+e.toHexString().toUpperCase()+'</em></span>'
			 }).join(''));
		}

		$(function() {
			//$("#convertcolor").on("click", function() {
			//	colorChange($("#colorvalue").val()).trigger("change");
			//});
			$("#convertcolor").on("click", function() {
				colorChange($("#colorvalue").val());
			});
			$("#colorvalue").on("keyup change", function() {
				colorChange($(this).val());
			});
			//colorChange({r: 0, g: 186, b: 174});

			$("#combine-output").on("click", "span", function() {
			     $("#colorvalue").val($(this).attr("title")).trigger("change");
			});
			$(".lighter").on("click", function() {
			     $("#colorvalue").val($(this).attr("title")).trigger("change");
			});
			$(".darker").on("click", function() {
			     $("#colorvalue").val($(this).attr("title")).trigger("change");
			});
		});