$(function () {
    var maxContainerWidth, selectedItem;
	var number = 1;

    $('#add_item').click(function () {
		number++;
        var content = `<div class="flex_item"><i>x</i>Item ${number}</div>`;
        $(content).hide().appendTo('#flexbox_container').fadeIn('fast');
		updateCode();
    })
    $('#reset').click(function () { if (confirm("Are you sure you want to reset the generator?")) location.reload(); });

    $('#flexbox_container').on('click', '.flex_item > i', function (e) {
        e.stopPropagation();
        $(this).parent('.flex_item').remove();
		updateCode();
    })
    $('input[name="container_display"]').change(function () {
        $("#flexbox_container").css('display', $(this).val());
    })
    $('input[name="container_flex_direction"]').change(function () {
        $("#flexbox_container").css('flex-direction', $(this).val());
        if ($(this).val() === 'row') $('#flexbox_container_direction_icon').css('transform', 'rotate(0deg)');
        if ($(this).val() === 'row-reverse') $('#flexbox_container_direction_icon').css('transform', 'rotate(-180deg)');
        if ($(this).val() === 'column') $('#flexbox_container_direction_icon').css('transform', 'rotate(90deg)');
        if ($(this).val() === 'column-reverse') $('#flexbox_container_direction_icon').css('transform', 'rotate(-90deg)');
        //$('#flex_flow').text($(this).val() + ' ' + $('input[name="container_flex_wrap"]:checked').val());
        var flex_wrap = $('input[name="container_flex_wrap"]:checked').val();
        if (flex_wrap == 'wrap') {
            if ($(this).val() == 'row' || $(this).val() == 'row-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(90deg)');
            if ($(this).val() == 'column' || $(this).val() == 'column-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(0deg)');
        } else { // wrap-reverse
            if ($(this).val() == 'row' || $(this).val() == 'row-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(-90deg)');
            if ($(this).val() == 'column' || $(this).val() == 'column-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(180deg)');
        }
    })
    $('input[name="container_flex_wrap"]').change(function () {
        $('#flexbox_container').css('flex-wrap', $(this).val());
        //$('#flex_flow').text($('input[name="container_flex_direction"]:checked').val() + ' ' + $(this).val());

        if ($(this).val() == 'nowrap') {
            $('#flexbox_container_cross_direction_icon').animate({ opacity: 0 }, 100)
        } else {
            var flex_dir = $('input[name="container_flex_direction"]:checked').val();
            if ($(this).val() == 'wrap') {
                if (flex_dir == 'row' || flex_dir == 'row-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(90deg)');
                if (flex_dir == 'column' || flex_dir == 'column-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(0deg)');
            } else { // wrap-reverse
                if (flex_dir == 'row' || flex_dir == 'row-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(-90deg)');
                if (flex_dir == 'column' || flex_dir == 'column-reverse') $('#flexbox_container_cross_direction_icon').css('transform', 'rotate(180deg)');
            }
            $('#flexbox_container_cross_direction_icon').animate({ opacity: 1 }, 100)
        }
    })
    $('input[name="container_justify_content"]').change(function () {
        $("#flexbox_container").css('justify-content', $(this).val());
    })
    $('input[name="container_align_items"]').change(function () {
        $("#flexbox_container").css('align-items', $(this).val());
    })
    $('input[name="container_align_content"]').change(function () {
        $("#flexbox_container").css('align-content', $(this).val());
    })
    $("#flexbox_container").on('click', '.flex_item', function () {
        selectedItem = $(this);
        $('input[name="flex_grow"]').val($(this).css('flex-grow'));
        $('input[name="flex_shrink"]').val($(this).css('flex-shrink'));
        $('input[name="flex_basis"]').val($(this).css('flex-basis'));
        $('input[name="align_self"][value="' + $(this).css('align-self') + '"]').prop("checked", true)
        $('input[name="order"]').val($(this).css('order'));
        //$('#flex').text($(this).css('flex-grow') + ' ' + $(this).css('flex-shrink') + ' ' + $(this).css('flex-basis'));
        $('input[name="flex_item_width"]').val($(this).css('width'));
        $('input[name="flex_item_height"]').val($(this).css('height'));
        $('.flex_item').not(this).removeClass('item_selected');
        selectedItem.toggleClass('item_selected');
    })
    $('input[name="flex_grow"]').change(function () {
        selectedItem.css('flex-grow', $(this).val());
		updateCode();
    })
    $('input[name="flex_shrink"]').change(function () {
        selectedItem.css('flex-shrink', $(this).val());
		updateCode();
    })
    $('input[name="flex_basis"]').change(function () {
        selectedItem.css('flex-basis', $(this).val());
		updateCode();
    })
    $('input[name="align_self"]').change(function () {
        selectedItem.css('align-self', $(this).val());
		updateCode();
    })
    $('input[name="order"]').change(function () {
        selectedItem.css('order', $(this).val());
		updateCode();
    })
    $('input[name="flex_item_width"]').change(function () {
        selectedItem.css('width', $(this).val());
		updateCode();
    })
    $('input[name="flex_item_height"]').change(function () {
        selectedItem.css('height', $(this).val());
		updateCode();
    })
    $('.examples').on('click', '.help', function () {
		var showmore = $(this).data('id');
        //$(this).toggleClass('ai-chevron-up');
		$('.'+showmore).slideToggle();
		
    })
    $('#main_row_2').css('top', $('#main_row_1').height());
    $("input[type='radio']").change(function(){
       updateCode();
    });
	$( document ).ready(function() {
	   updateCode();
	});

    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    $('#flex-item-margin').val($('.flex_item').css('margin')).change(function(){
        $('.flex_item').css('margin', $(this).val());
    });
    $('#flex-item-width').val($('.flex_item').css('width')).change(function(){
        $('.flex_item').css('width', $(this).val());
    });
	function updateCode() {
        var container_display = $('#flexbox_container').css('display'); 
        var container_flex_dir = $('#flexbox_container').css('flex-direction'); 
        var container_flex_wrap = $('#flexbox_container').css('flex-wrap'); 
        var container_justify_content = $('#flexbox_container').css('justify-content'); 
        var container_align_items = $('#flexbox_container').css('align-items'); 
        var container_align_content = $('#flexbox_container').css('align-content'); 

        code = htmlEntities(`.flex-container {\n  display: ${container_display};\n  flex-direction: ${container_flex_dir};\n  flex-wrap: ${container_flex_wrap};\n  justify-content: ${container_justify_content};\n  align-items: ${container_align_items};\n  align-content: ${container_align_content};\n}`);
	    htmlcode = htmlEntities(`<div class="flex-container">\n`);
        $('.flex_item').each(function(i){
            var child_display = $(this).css('display'); 
            var child_flex_grow =  $(this).css('flex-grow'); 
            var child_flex_shrink =  $(this).css('flex-shrink'); 
            var child_flex_basis = $(this).css('flex-basis'); 
            var child_align_self = $(this).css('align-self'); 
            var child_order = $(this).css('order'); 
            code += htmlEntities(`\n\n.flex-items:nth-child(${i+1}) {\n  display: ${child_display};\n  flex-grow: ${child_flex_grow};\n  flex-shrink: ${child_flex_shrink};\n  flex-basis: ${child_flex_basis};\n  align-self: ${child_align_self};\n  order: ${child_order};\n}`);
            htmlcode += htmlEntities(`   <div class="flex-items"></div>\n`);
        })
		htmlcode += htmlEntities("</div>");
        $('#code').html(`${code}`);
		$('#htmlcode').html(`${htmlcode}`);		
		Prism.highlightAll();
	}

});