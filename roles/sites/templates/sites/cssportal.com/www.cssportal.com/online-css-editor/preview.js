function doPreview(objTxa, strIFrame) {
	var strCSS = objTxa.value;	
	var objIfr = document.getElementById(strIFrame);
	var objDoc = (objIfr.contentWindow || objIfr.contentDocument);
	if (objDoc.document) objDoc = objDoc.document;
	if (document.selection)
	{
		var range = document.selection.createRange();
		var stored_range = range.duplicate();
		stored_range.moveToElementText( objTxa );
		stored_range.setEndPoint( 'EndToEnd', range );
		objTxa.selectionStart = stored_range.text.length - range.text.length;
		objTxa.selectionEnd = objTxa.selectionStart + range.text.length;
	}
	if (objTxa.selectionStart) {
		var intEnd = -1;
		var intStart = -1;
		countback:
		for (var i=(objTxa.selectionStart-1); i > -1; i--) {
			if (strCSS.charAt(i) == '{') {
				intStart = i;
				if (intEnd > -1) {break;}
			}
			if (strCSS.charAt(i) == '}') {
				intEnd = i;
				break;
			}
		}
	for (var i=intEnd + 1; i < strCSS.length; i++) {
			if (strCSS.charAt(i) == '}') {
				intStart = intEnd + 1;
				intEnd = i + 1;
				break;
			}
		}
		strCSS = strCSS.substring(intStart, intEnd);
	}
	with (objDoc) {
		try {
			open();
			write('<base href="' + document.URL + '">');
			write('<style id="stlMain">' + strCSS + '</style>');
			var objRuleColl = styleSheets[0].rules;
			if (!objRuleColl) { objRuleColl = styleSheets[0].cssRules; }

		//Add rules
		for (var r=0; r<objRuleColl.length; r++) {
				objRule = objRuleColl[r];
				write('<div style="' + objRule.style.cssText + '" title="' + objRule.selectorText + ': ' + objRule.style.cssText + '">' + objRule.selectorText + '</div>');
			}
			close();
			styleSheets[0].cssText = '';
		} catch(e) {
			open();
			write('The Web Browser you are using cannot access style information dynamically or encountered an error. Please try using the latest version of Internet Explorer, Firefox, Safari or Mozilla.');
			close();
		}
	}
	return false;
}