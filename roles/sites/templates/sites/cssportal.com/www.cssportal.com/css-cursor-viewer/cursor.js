function loadCursor(cursor) {

	if (cursor == "auto") {
			this.css = '.example {\n';
			this.css += '  cursor: auto;\n';
			this.css += '}\n';
	} else if (cursor == "default") {
			this.css = '.example {\n';
			this.css += '  cursor: default;\n';
			this.css += '}\n';
	} else if (cursor == "none") {
			this.css = '.example {\n';
			this.css += '  cursor: none;\n';
			this.css += '}\n';
	} else if (cursor == "context-menu") {
			this.css = '.example {\n';
			this.css += '  cursor: context-menu;\n';
			this.css += '}\n';
	} else if (cursor == "help") {
			this.css = '.example {\n';
			this.css += '  cursor: help;\n';
			this.css += '}\n';
	} else if (cursor == "pointer") {
			this.css = '.example {\n';
			this.css += '  cursor: pointer;\n';
			this.css += '}\n';
	} else if (cursor == "progress") {
			this.css = '.example {\n';
			this.css += '  cursor: progress;\n';
			this.css += '}\n';
	} else if (cursor == "wait") {
			this.css = '.example {\n';
			this.css += '  cursor: wait;\n';
			this.css += '}\n';
	} else if (cursor == "cell") {
			this.css = '.example {\n';
			this.css += '  cursor: cell;\n';
			this.css += '}\n';
	} else if (cursor == "crosshair") {
			this.css = '.example {\n';
			this.css += '  cursor: crosshair;\n';
			this.css += '}\n';
	} else if (cursor == "text") {
			this.css = '.example {\n';
			this.css += '  cursor: text;\n';
			this.css += '}\n';
	} else if (cursor == "vertical-text") {
			this.css = '.example {\n';
			this.css += '  cursor: vertical-text;\n';
			this.css += '}\n';
	} else if (cursor == "alias") {
			this.css = '.example {\n';
			this.css += '  cursor: alias;\n';
			this.css += '}\n';
	} else if (cursor == "copy") {
			this.css = '.example {\n';
			this.css += '  cursor: copy;\n';
			this.css += '}\n';
	} else if (cursor == "move") {
			this.css = '.example {\n';
			this.css += '  cursor: move;\n';
			this.css += '}\n';
	} else if (cursor == "no-drop") {
			this.css = '.example {\n';
			this.css += '  cursor: no-drop;\n';
			this.css += '}\n';
	} else if (cursor == "not-allowed") {
			this.css = '.example {\n';
			this.css += '  cursor: not-allowed;\n';
			this.css += '}\n';
	} else if (cursor == "all-scroll") {
			this.css = '.example {\n';
			this.css += '  cursor: all-scroll;\n';
			this.css += '}\n';
	} else if (cursor == "col-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: col-resize;\n';
			this.css += '}\n';
	} else if (cursor == "row-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: row-resize;\n';
			this.css += '}\n';
	} else if (cursor == "n-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: n-resize;\n';
			this.css += '}\n';
	} else if (cursor == "e-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: e-resize;\n';
			this.css += '}\n';
	} else if (cursor == "s-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: s-resize;\n';
			this.css += '}\n';
	} else if (cursor == "w-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: w-resize;\n';
			this.css += '}\n';
	} else if (cursor == "ne-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: ne-resize;\n';
			this.css += '}\n';
	} else if (cursor == "nw-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: nw-resize;\n';
			this.css += '}\n';
	} else if (cursor == "se-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: se-resize;\n';
			this.css += '}\n';
	} else if (cursor == "sw-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: sw-resize;\n';
			this.css += '}\n';
	} else if (cursor == "ew-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: ew-resize;\n';
			this.css += '}\n';
	} else if (cursor == "ns-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: ns-resize;\n';
			this.css += '}\n';
	} else if (cursor == "nesw-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: nesw-resize;\n';
			this.css += '}\n';
	} else if (cursor == "nwse-resize") {
			this.css = '.example {\n';
			this.css += '  cursor: nwse-resize;\n';
			this.css += '}\n';
	} else if (cursor == "zoom-in") {
			this.css = '.example {\n';
			this.css += '  cursor: zoom-in;\n';
			this.css += '}\n';
	} else if (cursor == "zoom-out") {
			this.css = '.example {\n';
			this.css += '  cursor: zoom-out;\n';
			this.css += '}\n';
	} else if (cursor == "grab") {
			this.css = '.example {\n';
			this.css += '  cursor: grab;\n';
			this.css += '}\n';
	} else if (cursor == "grabbing") {
			this.css = '.example {\n';
			this.css += '  cursor: grabbing;\n';
			this.css += '}\n';
	}
	
codeDiv=document.getElementById("code");
			
//if(codeDiv.innerText){
//	codeDiv.innerText=this.css
//}else{
	codeDiv.textContent=this.css;
	Prism.highlightAll();
//}

}