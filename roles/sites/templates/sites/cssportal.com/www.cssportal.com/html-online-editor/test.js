$(function() {
tinymce.init({
  selector: 'textarea#elm1',
  plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
  imagetools_cors_hosts: ['picsum.photos'],
  menubar: 'file edit view insert format tools table help',
  toolbar: 'customLoadButton customSaveButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview print | insertfile image media template link anchor codesample | ltr rtl',
  toolbar_sticky: true,
  autosave_ask_before_unload: true,
  autosave_interval: "30s",
  autosave_prefix: "{path}{query}-{id}-",
  autosave_restore_when_empty: false,
  autosave_retention: "2m",
  image_advtab: true,
  importcss_append: true,

  templates: [
    { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
  ],
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: 520,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_noneditable_class: "mceNonEditable",
  toolbar_mode: 'wrap',
  contextmenu: "link image imagetools table",
  
  setup: function (editor) {

    editor.ui.registry.addButton('customSaveButton', {
      text: 'Save',
	  icon: 'save',
      onAction: function (_) {
		data = $.trim(tinyMCE.activeEditor.getContent());
		if(data == "")
		{
			tinyMCE.activeEditor.setContent('Nothing to Download!');
			return false;
		}
		blob = new Blob(["" + data + ""], {
			type : "text/plain;charset=utf-8"
		});
		saveAs(blob, "editor.html");
      }
    });
    editor.ui.registry.addButton('customLoadButton', {
      text: 'Open',
	  icon: 'new-document',
      onAction: function (_) {
		$('#file').val(''); 
		$("#file").click();
      }
    });
  },
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
				tinyMCE.activeEditor.setContent(contents);
			}
			r.readAsText(f);
		}
		else
		{
			tinyMCE.activeEditor.setContent('Unable to load file!');
		}
	}
	
	$("#file").change(function(e) {
        e.preventDefault();
		read_file(e);
    });
 
});