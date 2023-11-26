$(document).ready(function() {

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
	
	var editorAce2 = ace.edit("output");
	editorAce2.setShowPrintMargin(false);
	editorAce2.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
    editorAce2.setTheme("ace/theme/chrome");
    editorAce2.getSession().setMode("ace/mode/jade");
	
	$("#encode").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
		var e = data;
			editorAce2.setValue(encodeString(e))
		}
    });
	
	$("#decode").click(function(e) {
        e.preventDefault();
		data = $.trim(editorAce1.getValue());
		if(data != "")
		{
		var e = data;
			editorAce2.setValue(decodeString(e))	
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
	
function encodeString(string) {
  return string
    .replace(/&?!nbsp;/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/¡/g, "&iexcl;")
    .replace(/¢/g, "&cent;")
    .replace(/£/g, "&pound;")
    .replace(/¤/g, "&curren;")
    .replace(/¥/g, "&yen;")
    .replace(/¦/g, "&brvbar;")
    .replace(/§/g, "&sect;")
    .replace(/¨/g, "&uml;")
    .replace(/©/g, "&copy;")
    .replace(/ª/g, "&ordf;")
    .replace(/«/g, "&laquo;")
    .replace(/¬/g, "&not;")
    .replace(/®/g, "&reg;")
    .replace(/¯/g, "&macr;")
    .replace(/°/g, "&deg;")
    .replace(/±/g, "&plusmn;")
    .replace(/²/g, "&sup2;")
    .replace(/³/g, "&sup3;")
    .replace(/´/g, "&acute;")
    .replace(/µ/g, "&micro;")
    .replace(/¶/g, "&para;")
    .replace(/·/g, "&middot;")
    .replace(/¸/g, "&cedil;")
    .replace(/¹/g, "&sup1;")
    .replace(/º/g, "&ordm;")
    .replace(/»/g, "&raquo;")
    .replace(/¼/g, "&frac14;")
    .replace(/½/g, "&frac12;")
    .replace(/¾/g, "&frac34;")
    .replace(/¿/g, "&iquest;")
    .replace(/×/g, "&times;")
    .replace(/÷/g, "&divide;")
    .replace(/À/g, "&Agrave;")
    .replace(/Á/g, "&Aacute;")
    .replace(/Â/g, "&Acirc;")
    .replace(/Ã/g, "&Atilde;")
    .replace(/Ä/g, "&Auml;")
    .replace(/Å/g, "&Aring;")
    .replace(/Æ/g, "&AElig;")
    .replace(/Ç/g, "&Ccedil;")
    .replace(/È/g, "&Egrave;")
    .replace(/É/g, "&Eacute;")
    .replace(/Ê/g, "&Ecirc;")
    .replace(/Ë/g, "&Euml;")
    .replace(/Ì/g, "&Igrave;")
    .replace(/Í/g, "&Iacute;")
    .replace(/Î/g, "&Icirc;")
    .replace(/Ï/g, "&Iuml;")
    .replace(/Ð/g, "&ETH;")
    .replace(/Ñ/g, "&Ntilde;")
    .replace(/Ò/g, "&Ograve;")
    .replace(/Ó/g, "&Oacute;")
    .replace(/Ô/g, "&Ocirc;")
    .replace(/Õ/g, "&Otilde;")
    .replace(/Ö/g, "&Ouml;")
    .replace(/Ø/g, "&Oslash;")
    .replace(/Ù/g, "&Ugrave;")
    .replace(/Ú/g, "&Uacute;")
    .replace(/Û/g, "&Ucirc;")
    .replace(/Ü/g, "&Uuml;")
    .replace(/Ý/g, "&Yacute;")
    .replace(/Þ/g, "&THORN;")
    .replace(/ß/g, "&szlig;")
    .replace(/à/g, "&agrave;")
    .replace(/á/g, "&aacute;")
    .replace(/â/g, "&acirc;")
    .replace(/ã/g, "&atilde;")
    .replace(/ä/g, "&auml;")
    .replace(/å/g, "&aring;")
    .replace(/æ/g, "&aelig;")
    .replace(/ç/g, "&ccedil;")
    .replace(/è/g, "&egrave;")
    .replace(/é/g, "&eacute;")
    .replace(/ê/g, "&ecirc;")
    .replace(/ë/g, "&euml;")
    .replace(/ì/g, "&igrave;")
    .replace(/í/g, "&iacute;")
    .replace(/î/g, "&icirc;")
    .replace(/ï/g, "&iuml;")
    .replace(/ð/g, "&eth;")
    .replace(/ñ/g, "&ntilde;")
    .replace(/ò/g, "&ograve;")
    .replace(/ó/g, "&oacute;")
    .replace(/ô/g, "&ocirc;")
    .replace(/õ/g, "&otilde;")
    .replace(/ö/g, "&ouml;")
    .replace(/ø/g, "&oslash;")
    .replace(/ù/g, "&ugrave;")
    .replace(/ú/g, "&uacute;")
    .replace(/û/g, "&ucirc;")
    .replace(/ü/g, "&uuml;")
    .replace(/ý/g, "&yacute;")
    .replace(/þ/g, "&thorn;")
    .replace(/ÿ/g, "&yuml;")
}



function decodeString(string) {
  return string
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&iexcl;/g, "¡")
    .replace(/&cent;/g, "¢")
    .replace(/&pound;/g, "£")
    .replace(/&curren;/g, "¤")
    .replace(/&yen;/g, "¥")
    .replace(/&brvbar;/g, "¦")
    .replace(/&sect;/g, "§")
    .replace(/&uml;/g, "¨")
    .replace(/&copy;/g, "©")
    .replace(/&ordf;/g, "ª")
    .replace(/&laquo;/g, "«")
    .replace(/&not;/g, "¬")
    .replace(/&reg;/g, "®")
    .replace(/&macr;/g, "¯")
    .replace(/&deg;/g, "°")
    .replace(/&plusmn;/g, "±")
    .replace(/&sup2;/g, "²")
    .replace(/&sup3;/g, "³")
    .replace(/&acute;/g, "´")
    .replace(/&micro;/g, "µ")
    .replace(/&para;/g, "¶")
    .replace(/&middot;/g, "·")
    .replace(/&cedil;/g, "¸")
    .replace(/&sup1;/g, "¹")
    .replace(/&ordm;/g, "º")
    .replace(/&raquo;/g, "»")
    .replace(/&frac14;/g, "¼")
    .replace(/&frac12;/g, "½")
    .replace(/&frac34;/g, "¾")
    .replace(/&iquest;/g, "¿")
    .replace(/&times;/g, "×")
    .replace(/&divide;/g, "÷")
    .replace(/&Agrave;/g, "À")
    .replace(/&Aacute;/g, "Á")
    .replace(/&Acirc;/g, "Â")
    .replace(/&Atilde;/g, "Ã")
    .replace(/&Auml;/g, "Ä")
    .replace(/&Aring;/g, "Å")
    .replace(/&AElig;/g, "Æ")
    .replace(/&Ccedil;/g, "Ç")
    .replace(/&Egrave;/g, "È")
    .replace(/&Eacute;/g, "É")
    .replace(/&Ecirc;/g, "Ê")
    .replace(/&Euml;/g, "Ë")
    .replace(/&Igrave;/g, "Ì")
    .replace(/&Iacute;/g, "Í")
    .replace(/&Icirc;/g, "Î")
    .replace(/&Iuml;/g, "Ï")
    .replace(/&ETH;/g, "Ð")
    .replace(/&Ntilde;/g, "Ñ")
    .replace(/&Ograve;/g, "Ò")
    .replace(/&Oacute;/g, "Ó")
    .replace(/&Ocirc;/g, "Ô")
    .replace(/&Otilde;/g, "Õ")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&Oslash;/g, "Ø")
    .replace(/&Ugrave;/g, "Ù")
    .replace(/&Uacute;/g, "Ú")
    .replace(/&Ucirc;/g, "Û")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&Yacute;/g, "Ý")
    .replace(/&THORN;/g, "Þ")
    .replace(/&szlig;/g, "ß")
    .replace(/&agrave;/g, "à")
    .replace(/&aacute;/g, "á")
    .replace(/&acirc;/g, "â")
    .replace(/&atilde;/g, "ã")
    .replace(/&auml;/g, "ä")
    .replace(/&aring;/g, "å")
    .replace(/&aelig;/g, "æ")
    .replace(/&ccedil;/g, "ç")
    .replace(/&egrave;/g, "è")
    .replace(/&eacute;/g, "é")
    .replace(/&ecirc;/g, "ê")
    .replace(/&euml;/g, "ë")
    .replace(/&igrave;/g, "ì")
    .replace(/&iacute;/g, "í")
    .replace(/&icirc;/g, "î")
    .replace(/&iuml;/g, "ï")
    .replace(/&eth;/g, "ð")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&ograve;/g, "ò")
    .replace(/&oacute;/g, "ó")
    .replace(/&ocirc;/g, "ô")
    .replace(/&otilde;/g, "õ")
    .replace(/&ouml;/g, "ö")
    .replace(/&oslash;/g, "ø")
    .replace(/&ugrave;/g, "ù")
    .replace(/&uacute;/g, "ú")
    .replace(/&ucirc;/g, "û")
    .replace(/&uuml;/g, "ü")
    .replace(/&yacute;/g, "ý")
    .replace(/&thorn;/g, "þ")
    .replace(/&yuml;/g, "ÿ")
    .replace(/&amp;/g, "&")
}	

});