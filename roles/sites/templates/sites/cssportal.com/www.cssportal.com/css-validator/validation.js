$(document).ready(function(e) {
	function looks_like_html(source) {
		trimmed = source.replace(/^[ \t\n\r]+/, '');
		comment_mark = '<' + '!-' + '-';
		return (trimmed && (trimmed.substring(0, 1) === '<' && trimmed.substring(0, 4) !== comment_mark));
	}
	
	function htmlEscape(text){
		var htmlEscapes = {
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"\"": "&quot;"
		};
		return text.replace(/[<>"&]/g, function(c){
			return htmlEscapes[c];
		});
	}
	
	function validate()
	{
		code = editorAce1.getValue();
		
		rules = {};
		
		$("input:checked").each(function(index, checkbox){
			rules[checkbox.name] = 1;
		});
		
		results = CSSLint.verify(code, rules);
		
		messages = results.messages;
		
		count = messages.length;
		
		data = "";
		if (count == 0) {
			data = '<tr><td colspan="6">No syntax errors!</td></tr>';
		}else if($.trim(code) == "")
		{
			data = '<tr><td colspan="6">No syntax errors!</td></tr>';
		}else {
			for (i = 0; i < count; i++)
			{
				data += "<tr>";
				if(messages[i].type == 'error'){
					data += "<td><span style='color:red'><i class='fa-close'></i></span></td>";
				} else if(messages[i].type == 'warning'){
					data += "<td><span style='color:orange'><i class='fa-exclamation-circle'></i></span></td>";
				}
				data += "<td>" + ((typeof messages[i].line == "number") ? messages[i].line : "(rollup)") + "</td>";
				data += "<td>" + ((typeof messages[i].col == "number") ? messages[i].col : "(rollup)") + "</td>";
				data += "<td>" + htmlEscape(messages[i].rule.name) + "</td>";
				data += "<td>" + htmlEscape(messages[i].message) + (messages[i].evidence ? "<pre>" + messages[i].evidence + "</pre>" : "") + "</td>";
				data += "<td>" + messages[i].rule.browsers + "</td>";
				data += "</tr>";
			}
		}
		if(count > 10)
		{
			$("div.data_well").css({"height":"500px", "overflow-y":"scroll"});
		}else
		{
			$("div.data_well").css({"height":"auto", "overflow-y":"auto"});
		}
		$("table.data tbody").html(data);
	}
	
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
	editorAce1.getSession().setUseWorker(false);
	

	$("#options").click(function(e) {
        e.preventDefault();
		$('.data_options').toggleClass('hidden');
	//	if($("div.data_options").is(":hidden"))
	//	{
	//		$("div.data_options").slideDown(400);
	//		$(this).addClass("active");
	//	}else
	//	{
	//		$("div.data_options").slideUp(400);
	//		$(this).removeClass("active");
	//	}
    });
    $('#clear').click(function(e) {
        e.preventDefault();
		editorAce1.setValue("");
		validate();
    });
    $("#validate_code").click(function(e) {
        e.preventDefault();
        validate();
    });
	var keep_validating = null;
    editorAce1.on("change", function() {
		if(keep_validating != null)
		{
			clearTimeout(keep_validating);
		}
        keep_validating = setTimeout(validate, 500);
    });
});