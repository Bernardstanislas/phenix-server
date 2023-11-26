$(document).ready(function(e) {
$('#message').hide();	
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
    editorAce1.getSession().setMode("ace/mode/html");
	editorAce1.getSession().setUseWorker(false);
	
    $('#clear').click(function(e) {
        e.preventDefault();
		editorAce1.setValue("");
		$("table.data tbody").html('<tr><td colspan="4">No syntax errors!</td></tr>');
    });
    $("#validate_code").click(function(e) {
        e.preventDefault();
		html = editorAce1.getValue();		
	
		var W3CURL = "https://validator.w3.org/nu/?out=json";
		var code1 = "";
			if(html === '') return;
			$('#message').show();
			$('#message').text('Validating HTML...');
      
			$.ajax({
				url:W3CURL,
				data:html,
				cache:false,
				contentType:"text/html; charset=utf-8",
				processData:false,
				type:"POST",
				success:function(data) {
					var data = JSON.stringify(data);
					
					if(data.length === 0) {
						code1 = '<tr><td colspan="4">No Errors Found!</td></tr>';
					} else {		
						$.each(JSON.parse(data), function(index, value) {
							$.each(value, function(index2, value2) {
									code1 += "<tr>";
									if(value2.type == 'error'){
										code1 += "<td><span style='color:red'><i class='fa-close'></i></span></td>";
									} else if(value2.type == 'info'){
										code1 += "<td><span style='color:orange'><i class='fa-exclamation-circle'></i></span></td>";
									}
									code1 += "<td>" + value2.lastLine + "</td>";
									code1 += "<td>" + value2.lastColumn + "</td>";
									code1 += "<td>" + htmlEscape(value2.message) + "</td>";
									code1 += "</tr>";
								});		
						});				
						$("table.data tbody").html(code1);
						setTimeout(function () {
							$('#message').text('');
							$('#message').hide();
						}, 300);
					}
					
				}
				
			});
		
    });

});