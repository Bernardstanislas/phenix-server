﻿$(document).ready(function() {
	$(".ps0").click(function(){
		document.getElementById("thumb-color").color.fromString("FFFFFF");
		$(".form-range[data-key='thumb-height']").val('30');$("#thumb-height").text('30');
		$(".form-range[data-key='thumb-width']").val('15');$("#thumb-width").text('15');
		$(".form-range[data-key='thumb-radius']").val('5');$("#thumb-radius").text('5');
		document.getElementById("thumb-border-color").color.fromString("000000");
		$(".form-range[data-key='thumb-border-width']").val('1');$("#thumb-border-width").text('1');
		document.getElementById("thumb-shadow-color").color.fromString("000000");
		$(".form-range[data-key='thumb-shadow-size']").val('1');$("#thumb-shadow-size").text('1');
		$(".form-range[data-key='thumb-shadow-blur']").val('1');$("#thumb-shadow-blur").text('1');
		
		document.getElementById("track-color").color.fromString("3071A9");
		$(".form-range[data-key='track-height']").val('10');$("#track-height").text('10');
		$(".form-range[data-key='track-radius']").val('5');$("#track-radius").text('5');
		document.getElementById("track-border-color").color.fromString("000000");
		$(".form-range[data-key='track-border-width']").val('1');$("#track-border-width").text('1');
		document.getElementById("track-shadow-color").color.fromString("000000");
		$(".form-range[data-key='track-shadow-size']").val('1');$("#track-shadow-size").text('1');
		$(".form-range[data-key='track-shadow-blur']").val('1');$("#track-shadow-blur").text('1');
		updateDisplay();
	});
	$(".ps1").click(function(){
		document.getElementById("thumb-color").color.fromString("FFFFFF");
		$(".form-range[data-key='thumb-height']").val('26');$("#thumb-height").text('26');
		$(".form-range[data-key='thumb-width']").val('26');$("#thumb-width").text('26');
		$(".form-range[data-key='thumb-radius']").val('15');$("#thumb-radius").text('15');
		document.getElementById("thumb-border-color").color.fromString("00001E");
		$(".form-range[data-key='thumb-border-width']").val('1');$("#thumb-border-width").text('1');
		document.getElementById("thumb-shadow-color").color.fromString("000031");
		$(".form-range[data-key='thumb-shadow-size']").val('1');$("#thumb-shadow-size").text('1');
		$(".form-range[data-key='thumb-shadow-blur']").val('1');$("#thumb-shadow-blur").text('1');
		
		document.getElementById("track-color").color.fromString("74A9D8");
		$(".form-range[data-key='track-height']").val('11');$("#track-height").text('11');
		$(".form-range[data-key='track-radius']").val('1');$("#track-radius").text('1');
		document.getElementById("track-border-color").color.fromString("010101");
		$(".form-range[data-key='track-border-width']").val('0');$("#track-border-width").text('0');
		document.getElementById("track-shadow-color").color.fromString("000000");
		$(".form-range[data-key='track-shadow-size']").val('1');$("#track-shadow-size").text('1');
		$(".form-range[data-key='track-shadow-blur']").val('1');$("#track-shadow-blur").text('1');
		updateDisplay();
	});
	$(".ps2").click(function(){
		document.getElementById("thumb-color").color.fromString("65001c");
		$(".form-range[data-key='thumb-height']").val('20');$("#thumb-height").text('20');
		$(".form-range[data-key='thumb-width']").val('39');$("#thumb-width").text('39');
		$(".form-range[data-key='thumb-radius']").val('7');$("#thumb-radius").text('7');
		document.getElementById("thumb-border-color").color.fromString("000000");
		$(".form-range[data-key='thumb-border-width']").val('0');$("#thumb-border-width").text('0');
		document.getElementById("thumb-shadow-color").color.fromString("000000");
		$(".form-range[data-key='thumb-shadow-size']").val('0');$("#thumb-shadow-size").text('0');
		$(".form-range[data-key='thumb-shadow-blur']").val('0');$("#thumb-shadow-blur").text('0');
		
		document.getElementById("track-color").color.fromString("AC51B5");
		$(".form-range[data-key='track-height']").val('13');$("#track-height").text('13');
		$(".form-range[data-key='track-radius']").val('25');$("#track-radius").text('25');
		document.getElementById("track-border-color").color.fromString("000101");
		$(".form-range[data-key='track-border-width']").val('0');$("#track-border-width").text('0');
		document.getElementById("track-shadow-color").color.fromString("000000");
		$(".form-range[data-key='track-shadow-size']").val('0');$("#track-shadow-size").text('0');
		$(".form-range[data-key='track-shadow-blur']").val('0');$("#track-shadow-blur").text('0');
		updateDisplay();
	});
	$(".ps3").click(function(){
		document.getElementById("thumb-color").color.fromString("dadada");
		$(".form-range[data-key='thumb-height']").val('24');$("#thumb-height").text('24');
		$(".form-range[data-key='thumb-width']").val('35');$("#thumb-width").text('35');
		$(".form-range[data-key='thumb-radius']").val('6');$("#thumb-radius").text('6');
		document.getElementById("thumb-border-color").color.fromString("8a8a8a");
		$(".form-range[data-key='thumb-border-width']").val('1');$("#thumb-border-width").text('1');
		document.getElementById("thumb-shadow-color").color.fromString("828282");
		$(".form-range[data-key='thumb-shadow-size']").val('1');$("#thumb-shadow-size").text('1');
		$(".form-range[data-key='thumb-shadow-blur']").val('1');$("#thumb-shadow-blur").text('1');
		
		document.getElementById("track-color").color.fromString("b6b6b6");
		$(".form-range[data-key='track-height']").val('16');$("#track-height").text('16');
		$(".form-range[data-key='track-radius']").val('25');$("#track-radius").text('25');
		document.getElementById("track-border-color").color.fromString("8A8A8A");
		$(".form-range[data-key='track-border-width']").val('1');$("#track-border-width").text('1');
		document.getElementById("track-shadow-color").color.fromString("000000");
		$(".form-range[data-key='track-shadow-size']").val('0');$("#track-shadow-size").text('0');
		$(".form-range[data-key='track-shadow-blur']").val('0');$("#track-shadow-blur").text('0');
		updateDisplay();
	});
	$(".ps4").click(function(){
		document.getElementById("thumb-color").color.fromString("439643");
		$(".form-range[data-key='thumb-height']").val('23');$("#thumb-height").text('23');
		$(".form-range[data-key='thumb-width']").val('23');$("#thumb-width").text('23');
		$(".form-range[data-key='thumb-radius']").val('23');$("#thumb-radius").text('23');
		document.getElementById("thumb-border-color").color.fromString("83e584");
		$(".form-range[data-key='thumb-border-width']").val('2');$("#thumb-border-width").text('2');
		document.getElementById("thumb-shadow-color").color.fromString("00AA00");
		$(".form-range[data-key='thumb-shadow-size']").val('3');$("#thumb-shadow-size").text('3');
		$(".form-range[data-key='thumb-shadow-blur']").val('3');$("#thumb-shadow-blur").text('3');
		
		document.getElementById("track-color").color.fromString("205928");
		$(".form-range[data-key='track-height']").val('12');$("#track-height").text('12');
		$(".form-range[data-key='track-radius']").val('1');$("#track-radius").text('1');
		document.getElementById("track-border-color").color.fromString("18d501");
		$(".form-range[data-key='track-border-width']").val('1');$("#track-border-width").text('1');
		document.getElementById("track-shadow-color").color.fromString("002200");
		$(".form-range[data-key='track-shadow-size']").val('1');$("#track-shadow-size").text('1');
		$(".form-range[data-key='track-shadow-blur']").val('1');$("#track-shadow-blur").text('1');
		updateDisplay();
	});
	$(".ps5").click(function(){
		document.getElementById("thumb-color").color.fromString("ff96ab");
		$(".form-range[data-key='thumb-height']").val('30');$("#thumb-height").text('30');
		$(".form-range[data-key='thumb-width']").val('30');$("#thumb-width").text('30');
		$(".form-range[data-key='thumb-radius']").val('0');$("#thumb-radius").text('0');
		document.getElementById("thumb-border-color").color.fromString("F27B7F");
		$(".form-range[data-key='thumb-border-width']").val('2');$("#thumb-border-width").text('2');
		document.getElementById("thumb-shadow-color").color.fromString("A6A6A6");
		$(".form-range[data-key='thumb-shadow-size']").val('1');$("#thumb-shadow-size").text('1');
		$(".form-range[data-key='thumb-shadow-blur']").val('2');$("#thumb-shadow-blur").text('2');
		
		document.getElementById("track-color").color.fromString("ff96ab");
		$(".form-range[data-key='track-height']").val('12');$("#track-height").text('12');
		$(".form-range[data-key='track-radius']").val('4');$("#track-radius").text('4');
		document.getElementById("track-border-color").color.fromString("F27B7F");
		$(".form-range[data-key='track-border-width']").val('2');$("#track-border-width").text('2');
		document.getElementById("track-shadow-color").color.fromString("A6A6A6");
		$(".form-range[data-key='track-shadow-size']").val('1');$("#track-shadow-size").text('1');
		$(".form-range[data-key='track-shadow-blur']").val('2');$("#track-shadow-blur").text('2');
		updateDisplay();
	});
	$(".ps6").click(function(){
		document.getElementById("thumb-color").color.fromString("529de1");
		$(".form-range[data-key='thumb-height']").val('20');$("#thumb-height").text('20');
		$(".form-range[data-key='thumb-width']").val('40');$("#thumb-width").text('40');
		$(".form-range[data-key='thumb-radius']").val('12');$("#thumb-radius").text('12');
		document.getElementById("thumb-border-color").color.fromString("000000");
		$(".form-range[data-key='thumb-border-width']").val('0');$("#thumb-border-width").text('0');
		document.getElementById("thumb-shadow-color").color.fromString("000000");
		$(".form-range[data-key='thumb-shadow-size']").val('0');$("#thumb-shadow-size").text('0');
		$(".form-range[data-key='thumb-shadow-blur']").val('0');$("#thumb-shadow-blur").text('0');
		
		document.getElementById("track-color").color.fromString("50555C");
		$(".form-range[data-key='track-height']").val('14');$("#track-height").text('14');
		$(".form-range[data-key='track-radius']").val('14');$("#track-radius").text('14');
		document.getElementById("track-border-color").color.fromString("000000");
		$(".form-range[data-key='track-border-width']").val('0');$("#track-border-width").text('0');
		document.getElementById("track-shadow-color").color.fromString("50555C");
		$(".form-range[data-key='track-shadow-size']").val('1');$("#track-shadow-size").text('1');
		$(".form-range[data-key='track-shadow-blur']").val('1');$("#track-shadow-blur").text('1');
		updateDisplay();
	});
	$(".ps7").click(function(){
		document.getElementById("thumb-color").color.fromString("A1D0FF");
		$(".form-range[data-key='thumb-height']").val('18');$("#thumb-height").text('18');
		$(".form-range[data-key='thumb-width']").val('18');$("#thumb-width").text('18');
		$(".form-range[data-key='thumb-radius']").val('25');$("#thumb-radius").text('25');
		document.getElementById("thumb-border-color").color.fromString("2497E3");
		$(".form-range[data-key='thumb-border-width']").val('1');$("#thumb-border-width").text('1');
		document.getElementById("thumb-shadow-color").color.fromString("000000");
		$(".form-range[data-key='thumb-shadow-size']").val('0');$("#thumb-shadow-size").text('0');
		$(".form-range[data-key='thumb-shadow-blur']").val('0');$("#thumb-shadow-blur").text('0');
		
		document.getElementById("track-color").color.fromString("2497E3");
		$(".form-range[data-key='track-height']").val('5');$("#track-height").text('5');
		$(".form-range[data-key='track-radius']").val('1');$("#track-radius").text('1');
		document.getElementById("track-border-color").color.fromString("000000");
		$(".form-range[data-key='track-border-width']").val('0');$("#track-border-width").text('0');
		document.getElementById("track-shadow-color").color.fromString("000000");
		$(".form-range[data-key='track-shadow-size']").val('0');$("#track-shadow-size").text('0');
		$(".form-range[data-key='track-shadow-blur']").val('0');$("#track-shadow-blur").text('0');
		updateDisplay();
	});
});

