function compile() {
    var html = document.getElementById("htmlcode");
    var css = document.getElementById("csscode");
    var js = document.getElementById("jscode");
    var code = document.getElementById("codeframe");
	code = code.contentWindow || code.contentDocument.document || code.contentDocument;

    code.document.open();
    code.document.write(html.textContent+"<style>"+css.textContent+"</style>"+"<script></script>");
    code.document.close();
};

document.addEventListener("DOMContentLoaded", function(event) { 
  compile();
});