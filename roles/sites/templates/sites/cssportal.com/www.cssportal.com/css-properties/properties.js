$(document).ready(function() {
	$('#find').on('keyup', function() {
		var searchVal = $(this).val();
		var filterItems = $('[data-keywords]');

		if ( searchVal != '' ) {
			filterItems.addClass('hidden');
			$('[data-keywords*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
		} else {
			filterItems.removeClass('hidden');
		}
	});
})