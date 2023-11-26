$('#bw').click(function(){
    $('#myModal .modal-title').html('Black &amp; White Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.bw {\n    filter: grayscale(100%);\n    -webkit-filter: grayscale(100%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#blur').click(function(){
    $('#myModal .modal-title').html('Blur Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.blur {\n    filter: blur(3px);\n    -webkit-filter: blur(3px);\n}</code></pre>");
	Prism.highlightAll();
});
$('#brighten').click(function(){
    $('#myModal .modal-title').html('Brighten Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.brighten {\n    filter: brightness(200%);\n    -webkit-filter: brightness(200%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#contrast').click(function(){
    $('#myModal .modal-title').html('Contrast Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.contrast {\n    filter: contrast(200%);\n    -webkit-filter: contrast(200%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#drop').click(function(){
    $('#myModal .modal-title').html('Drop Shadow Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.drop-shadow {\n    filter: drop-shadow(8px 8px 10px grey);\n    -webkit-filter: drop-shadow(8px 8px 10px grey);\n}</code></pre>");
	Prism.highlightAll();
});
$('#hue').click(function(){
    $('#myModal .modal-title').html('Hue Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.hue {\n    filter: hue-rotate(90deg);\n    -webkit-filter: hue-rotate(90deg);\n}</code></pre>");
	Prism.highlightAll();
});
$('#invert').click(function(){
    $('#myModal .modal-title').html('Invert Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.invert {\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#opacity').click(function(){
    $('#myModal .modal-title').html('Opacity Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.opacity {\n    filter: opacity(30%);\n    -webkit-filter: opacity(30%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#saturated').click(function(){
    $('#myModal .modal-title').html('Saturated Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.saturated {\n    filter: saturate(800%);\n    -webkit-filter: saturate(800%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#sepia').click(function(){
    $('#myModal .modal-title').html('Sepia Filter');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.sepia {\n    filter: sepia(100%);\n    -webkit-filter: sepia(100%);\n}</code></pre>");
	Prism.highlightAll();
});
$('#multiple').click(function(){
    $('#myModal .modal-title').html('Multiple CSS Filters');
    $('#myModal .modal-body').html("<pre class='language-css'><code>.multiple {\n    filter: blur(2px) grayscale(0.5) opacity(0.8);\n    -webkit-filter: blur(2px) grayscale(0.5) opacity(0.8);\n}</code></pre>");
	Prism.highlightAll();
});