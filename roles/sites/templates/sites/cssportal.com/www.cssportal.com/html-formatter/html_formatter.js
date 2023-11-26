$(document).ready(function(e) {
	function setTheme() {
		editorAce1.setOptions({
			enableBasicAutocompletion : true,
			enableSnippets : true,
			enableLiveAutocompletion : true
		});
	}
	
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
    editorAce1.getSession().setMode("ace/mode/html");

	
	$("#clear").click(function(e) {
    	e.preventDefault();
		editorAce1.setValue("");
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
		saveAs(blob, "code.html");
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
	
	var opts = {};
	
	opts.indent_size = $('#tabsize').val();
	opts.indent_char = opts.indent_size == 1 ? '\t' : ' ';
	opts.max_preserve_newlines = $('#max-preserve-newlines').val();
	opts.preserve_newlines = opts.max_preserve_newlines !== "-1";
	opts.keep_array_indentation = $('#keep-array-indentation').prop('checked');
	opts.break_chained_methods = $('#break-chained-methods').prop('checked');
	opts.indent_scripts = $('#indent-scripts').val();
	opts.brace_style = $('#brace-style').val();
	opts.space_before_conditional = $('#space-before-conditional').prop('checked');
	opts.unescape_strings = $('#unescape-strings').prop('checked');
	opts.jslint_happy = $('#jslint-happy').prop('checked');
	opts.end_with_newline = $('#end-with-newline').prop('checked');
	opts.wrap_line_length = $('#wrap-line-length').val();
	opts.indent_inner_html = $('#indent-inner-html').prop('checked');
	opts.comma_first = $('#comma-first').prop('checked');
	//opts.e4x = $('#e4x').prop('checked');
	
	$("#tabsize").val("4");
	$("#max-preserve-newlines").val("5");
	$("#wrap-line-length").val("0");
	$("#brace-style").val("collapse");
	$("#indent-scripts").val("normal");
	$('#space-before-conditional').prop('checked', true);
	
	$("#beautify_html").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
			editorAce1.setValue(html_beautify(data, opts));
		}
    });
	
	//$("#options").click(function(e) {
    //    e.preventDefault();
	//	$(".show-options").slideToggle();
    //});
	
	$("#set").click(function(e) {
        e.preventDefault();
		opts.indent_size = $('#tabsize').val();
		opts.indent_char = opts.indent_size == 1 ? '\t' : ' ';
		opts.max_preserve_newlines = $('#max-preserve-newlines').val();
		opts.preserve_newlines = opts.max_preserve_newlines !== "-1";
		opts.keep_array_indentation = $('#keep-array-indentation').prop('checked');
		opts.break_chained_methods = $('#break-chained-methods').prop('checked');
		opts.indent_scripts = $('#indent-scripts').val();
		opts.brace_style = $('#brace-style').val();
		opts.space_before_conditional = $('#space-before-conditional').prop('checked');
		opts.unescape_strings = $('#unescape-strings').prop('checked');
		opts.jslint_happy = $('#jslint-happy').prop('checked');
		opts.end_with_newline = $('#end-with-newline').prop('checked');
		opts.wrap_line_length = $('#wrap-line-length').val();
		opts.indent_inner_html = $('#indent-inner-html').prop('checked');
		opts.comma_first = $('#comma-first').prop('checked');
		//opts.e4x = $('#e4x').prop('checked');
		//$(".show-options").slideToggle();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
			editorAce1.setValue(html_beautify(data, opts));
		}
    });
	//$("#cancel").click(function(e) {
	//	$(".show-options").slideToggle();
	//});
	
	$("#minify_html").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
			opt = {};
			opt.removeIgnored = false;
			opt.removeComments = true;
			opt.removeCommentsFromCDATA = true;
			opt.removeCDATASectionsFromCDATA = true;
			opt.collapseWhitespace = true;
			opt.conservativeCollapse = false;
			opt.collapseBooleanAttributes = true;
			opt.removeAttributeQuotes = false;
			opt.removeRedundantAttributes = true;
			opt.useShortDoctype = true;
			opt.removeEmptyAttributes =true; 
			opt.removeEmptyElements = false;
			opt.removeOptionalTags = false;
			opt.removeScriptTypeAttributes = false;
			opt.removeStyleLinkTypeAttributes = false;
			opt.caseSensitive = false;
			opt.keepClosingSlash = false;
			opt.minifyJS = true;
			opt.minifyCSS = true;
			try{
				out = minify(data, opt);
				editorAce1.setValue(out);
			}catch(e)
			{
				editorAce1.setValue("Error parsing data!");
			}
		}
    });
	
});