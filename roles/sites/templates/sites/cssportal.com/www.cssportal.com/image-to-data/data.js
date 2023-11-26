$(function() {

    var FileSelectHandler = function(e) {

        // When dropping; prevent browser from displaying the file
        FileDragHover(e);

        // Grab FileList object, from file upload input or from drop div
        var files = e.target.files || e.dataTransfer.files;

        if (files.length) {
            /*$('#droptarget').css('height', '100px');*/
            $('#result').html('');
            for (var i = 0, f; f = files[i]; i++) {
                ParseFile(files[i]);
            }
        }

        return false;
    };

    var FileDragHover = function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == 'dragover' ? 'hover' : '');
    }

    var ParseFile = function(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        (function(currentFile){
            reader.onload = function(e) {
                PrintFile(currentFile.name, currentFile.size, e.target.result.length, e.target.result);
            };
        }(file));
    };

    var PrintFile = function(name, oldSize, newSize, datauri) {
        $('#result').append(
			'<div class="row" style="margin-top:20px">' +
			'<div class="col-md-3">' +
			'<img class="img-responsive" style="margin-top:5px" src="' + datauri + '">' +
			'</div>' +
			'<div class="col-md-9">' +
			'<p><strong>Filename: </strong>' + name + '<br>' +
			'<strong>Old size: </strong>' + Math.round(oldSize / 1024) + ' kb (' + oldSize + ' bytes)<br>' +
			'<strong>New size: </strong>' + Math.round(newSize / 1024) + ' kb (' + newSize + ' bytes)</p>' +
			'<strong>Data URI: <i data-bs-toggle="tooltip" data-bs-placement="top" title="Copy" data-clipboard-target="#uri" class="clipboard copyIcon fa-clipboard"></i></strong><br><textarea id="uri" class="form-control" rows="4">' + datauri + '</textarea>' +
			'<br><strong>Image Tag: <i data-bs-toggle="tooltip" data-bs-placement="top" title="Copy" data-clipboard-target="#imagetag" class="clipboard copyIcon fa-clipboard"></i></strong><br><textarea id="imagetag" class="form-control" id="txtselect" rows="4"><img alt="' + name + '" src="' + datauri + '"/></textarea>' +
			'<br><strong>CSS Background: <i data-bs-toggle="tooltip" data-bs-placement="top" title="Copy" data-clipboard-target="#cssback" class="clipboard copyIcon fa-clipboard"></i></strong><br><textarea id="cssback" class="form-control" rows="4">background-image: url("' + datauri + '");</textarea>' +
			'</div>'
        );
        $('table input').bind('click', function() {
            $(this).select();
        });
		$('body').tooltip({
			selector: '.clipboard'
		});
    };

    // Bind file(s) selected
    document.getElementById('file').addEventListener('change', FileSelectHandler, false);

    // Bind drag-drop event
    var droptarget = document.getElementById('droptarget');
    droptarget.addEventListener('dragover', FileDragHover, false);
    droptarget.addEventListener('dragleave', FileDragHover, false);
    droptarget.addEventListener('drop', FileSelectHandler, false);

    $("#droptarget").on('click', function() {
       $("#file").click();
    });
});