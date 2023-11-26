var y;
var x;
var xy;
var xy3;
var codeMirror;
var codeMirrorValue;


function startit() {
		view.document.open();
		view.document.write(editor.getValue());
		//alert(editor.getValue());
		//alert('working');
		view.document.close();
}


function init() {
	if (top.location != location) {
		top.location.href = document.location.href;
	}
	startit();
}
window.onload = init;