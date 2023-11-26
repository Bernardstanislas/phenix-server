$(document).ready(function(e) {
	
	ace.require("ace/ext/language_tools");
	var editorAce1 = ace.edit("code1");
	editorAce1.setShowPrintMargin(false);
	editorAce1.focus();
	editorAce1.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
    editorAce1.setTheme("ace/theme/chrome");
    editorAce1.getSession().setMode("ace/mode/css");
	
	
	$("#clear").click(function(e) {
    	e.preventDefault();
		editorAce1.setValue("");
    });

	$("#copy").click(function(e) {
	  e.preventDefault();
	  var sel = editorAce1.selection.toJSON();
	  editorAce1.selectAll();
	  editorAce1.focus();
	  document.execCommand('copy');
	  data = $.trim(editorAce1.getValue());
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
		data = $.trim(editorAce1.getValue());
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
		saveAs(blob, "code.css");
    });
	
	$(window).resize(function(e) {
        $("#code1").css({"width" : "100%"});
    });
	
	
	$("#browse").click(function(e) {
        e.preventDefault();
		$("#file").click();
    });
	
	function read_file(e)
	{
		f = e.target.files[0];
		if(f)
		{
			r = new FileReader();
			r.onload = function(e)
			{
				var contents = e.target.result;
				var file_name = f.name;
				editorAce1.getSession().setUseWorker(true);
				editorAce1.setValue(contents);
			}
			r.readAsText(f);
		}
		else
		{
			editorAce1.getSession().setUseWorker(false);
			editorAce1.setValue("Unable to load file!");
		}
	}
	
	$("#file").change(function(e) {
        e.preventDefault();
		read_file(e);
    });
	
	$("#beautify_css").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
			out = cssbeautify(data, {
				indent : '	',
				openbrace : 'end-of-line',
				autosemicolon : true
			});
			editorAce1.setValue(out);
		}
    });
	
	$("#minify_css").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
			editorAce1.setValue(vkbeautify.cssmin(data, false));
		}
    });
	
});