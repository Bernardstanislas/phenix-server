﻿$(document).ready(function(e) {
	
	ace.require("ace/ext/language_tools");
	var editorAce1 = ace.edit("input");
	editorAce1.setShowPrintMargin(false);
	editorAce1.focus();
	editorAce1.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
    editorAce1.setTheme("ace/theme/chrome");
    editorAce1.getSession().setMode("ace/mode/css");	
	
	var editorAce2 = ace.edit("output");
	editorAce2.setShowPrintMargin(false);
	editorAce2.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
    editorAce2.setTheme("ace/theme/chrome");
    editorAce2.getSession().setMode("ace/mode/stylus");
	
	$("#compile").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
			converter = new Css2Stylus.Converter(data);
			converter.processCss();
			out = converter.getStylus();
			editorAce2.setValue($.trim(out));
		}
    });
	
  $("#clear").click(function(event){
	editorAce1.setValue("");
	editorAce2.setValue("");
	return false;
  });
  
	$("#copy").click(function(e) {
	  e.preventDefault();
	  var sel = editorAce2.selection.toJSON();
	  editorAce2.selectAll();
	  editorAce2.focus();
	  document.execCommand('copy');
	  data = $.trim(editorAce2.getValue());
		if(data == "")
		{
			document.getElementById("copy").innerHTML = "Error";
			setInterval(function() {
				document.getElementById("copy").innerHTML = "Copy";
			}, 4000);
			return false;
		}else{
			document.getElementById("copy").innerHTML = "Copied";
			setInterval(function() {
				document.getElementById("copy").innerHTML = "Copy";
			}, 4000);
			return false;		
		}
	});
	$("#download").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce2.getValue());
		if(data == "")
		{
			document.getElementById("download").innerHTML = "Error";
			setInterval(function() {
				document.getElementById("download").innerHTML = "Download";
			}, 4000);
			return false;
		}
		blob = new Blob(["" + data + ""], {
			type : "text/plain;charset=utf-8"
		});
		saveAs(blob, "code.styl");
    });
});