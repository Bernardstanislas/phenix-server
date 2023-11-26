var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  gradient_generate();
    });
  });
};

rangeSlider();

var stoppageIndex = 1;
var stoperColorsString = '';

function generate_linear_gradient(repeatGrad) {
	var linearPos = $('#linear_position')['find']('option:selected')['val']();

    var startCol = $('#start-color').val();
    var endCol = $('#end-color').val();
    var startPos = 0;
    startPos = $('#percentage_startColor').text();
    var endPos = 100;
    endPos = $('#percentage_endColor').text();
    var cssGradient = '';
    if (repeatGrad == 'repeating') {
        repeatGrad = 'repeating-'
    };
    cssGradient = repeatGrad + 'linear-gradient(' + linearPos + ', ' + startCol + ' ' + startPos + '%, ';
    cssGradient += stoperColorsString;
    cssGradient += endCol + ' ' + endPos + '%)';
    $('.test')['css']('background', cssGradient);
	$('.test')['css']('-webkit-background-clip', 'text');
	$('.test')['css']('-webkit-text-fill-color', 'transparent');
	var vprefix = document.getElementById('vprefix');
	if(vprefix.checked){
		var cssCode = 'background: ' + startCol + ';\n';
		cssCode += 'background: -webkit-' + cssGradient + ';\n';
		cssCode += 'background: -moz-' + cssGradient + ';\n';
		cssCode += 'background: ' + cssGradient + ';\n'; 
		cssCode += '-webkit-background-clip: text;\n';
		cssCode += '-webkit-text-fill-color: transparent;\n';
	}else{
		var cssCode = 'background: ' + startCol + ';\n';
		cssCode += 'background: ' + cssGradient + ';\n'; 
		cssCode += '-webkit-background-clip: text;\n';
		cssCode += '-webkit-text-fill-color: transparent;\n';
	}	
    $('#othersource')['html'](cssCode);
	Prism.highlightAll();
}

function generate_radial_gradient(circleGrad, repeatGrad) {
    var radSize = $('#radial_size')['find']('option:selected')['val']();
    var radPos = $('#radial_position')['find']('option:selected')['val']();
    var startCol = $('#start-color').val();
    var endCol = $('#end-color').val();
    var startPos = 0;
    startPos = $('#percentage_startColor').text();
    var endPos = 80;
    endPos = $('#percentage_endColor').text();
    var cssGradient = '';
    if (repeatGrad == 'repeating') {
        repeatGrad = 'repeating-'
    };
    cssGradient = repeatGrad + 'radial-gradient(' + circleGrad + ' ' + radSize + ' at ' + radPos + ', ' + startCol + ' ' + startPos + '%, ';
    cssGradient += stoperColorsString;
    cssGradient += endCol + ' ' + endPos + '%)';
    $('.test')['css']('background', cssGradient);
	$('.test')['css']('-webkit-background-clip', 'text');
	$('.test')['css']('-webkit-text-fill-color', 'transparent');
	var vprefix = document.getElementById('vprefix');
	if(vprefix.checked){
		var cssCode = 'background: ' + startCol + ';\n';
		cssCode += 'background: -webkit-' + cssGradient + ';\n';
		cssCode += 'background: -moz-' + cssGradient + ';\n';
		cssCode += 'background: ' + cssGradient + ';\n'; 
		cssCode += '-webkit-background-clip: text;\n';
		cssCode += '-webkit-text-fill-color: transparent;\n';
	}else{
		var cssCode = 'background: ' + startCol + ';\n';
		cssCode += 'background: ' + cssGradient + ';\n'; 
		cssCode += '-webkit-background-clip: text;\n';
		cssCode += '-webkit-text-fill-color: transparent;\n';
	}
    $('#othersource')['html'](cssCode);
	Prism.highlightAll();
}

function gradient_generate() {
    updateStopperColorString();
    var typeGrad = $('#orientation')['find']('option:selected')['val']();
    if (typeGrad == 'linear') {
        $('.linear_only')['show']();
        $('.radial_only')['hide']();
        generate_linear_gradient('')
    } else {
        if (typeGrad == 'radial') {
            $('.linear_only')['hide']();
            $('.radial_only')['show']();
            generate_radial_gradient('circle', '')
        } else {
            if (typeGrad == 'elliptical') {
                $('.linear_only')['hide']();
                $('.radial_only')['show']();
                generate_radial_gradient('ellipse', '')
            }
        }
    };
    if (typeGrad == 'repeat linear') {
        $('.linear_only')['show']();
        $('.radial_only')['hide']();
        generate_linear_gradient('repeating')
    } else {
        if (typeGrad == 'repeat radial') {
            $('.linear_only')['hide']();
            $('.radial_only')['show']();
            generate_radial_gradient('circle', 'repeating')
        } else {
            if (typeGrad == 'repeat elliptical') {
                $('.linear_only')['hide']();
                $('.radial_only')['show']();
                generate_radial_gradient('ellipse', 'repeating')
            }
        }
    }
}

$(document)['ready'](function () {
    $('.selectpicker')['change'](function () {
        gradient_generate()
    });
	
    $('.preset')['click'](function () {

		$("li[class*='stoppage']").remove();
		
		var preGradType = $(this).data('type');
		var prePosition = $(this).data('position');
		var preColStart = $(this).data('colstart');
		var preStartPos = $(this).data('startpos');
		var preColorEnd = $(this).data('colend');
		var preStartEnd = $(this).data('endpos');
		var preStops = $(this).data('stops');
		
		if (preStops > 0 ){
			for(var i = 1; i <= preStops; i++) {
				$('#add_stop_color').trigger('click');
				var preStopCol = $(this).data('stopcol' + i);
				var preStopPercent = $(this).data('stoppercent' + i);
				$('.stoppage_' + (stoppageIndex - 1)).find(".stop-color").val(preStopCol).css("background-color", preStopCol);
				$('#percentage_stoppage_slider' + (stoppageIndex - 1)).val(preStopPercent);
				$('#percentage_stoppage' + (stoppageIndex - 1)).text(preStopPercent);
			}
		}	
		
		$('#start-color').val(preColStart).css("background-color", preColStart);
		$('#end-color').val(preColorEnd).css("background-color", preColorEnd);
		$('#percentage_startColor').text(preStartPos);
		$(".form-range[data-key='percentage_startColor']").val(preStartPos);
		$('#percentage_endColor').text(preStartEnd);
		$(".form-range[data-key='percentage_endColor']").val(preStartEnd);
		
		if (preGradType == "linear"){
			$('#orientation').val('linear');
			$('#linear_position').val(prePosition);
		}else{
			$('#orientation').val('radial');
			$('#radial_position').val(prePosition);
		}
		gradient_generate()
    });


    $('#add_stop_color')['click'](function () {
        var startPos = 0;
        startPos = $('#percentage_startColor').text();
        var endPos = 100;
        endPos = $('#percentage_endColor').text();

        var newStopper = $('#stop_color_container')['html']();
        newStopper = newStopper['replace']('list-item', 'list-item stoppage_' + stoppageIndex);
        $(newStopper)['insertBefore']('#end_color_container');
        var stopNumber = '.list-item.stoppage_' + stoppageIndex;
		
		$('#percentage_stoppage').attr('id','percentage_stoppage' + stoppageIndex);
		$('#percentage_stoppage_slider').attr('id','percentage_stoppage_slider' + stoppageIndex);
		$('#percentage_stoppage_slider' + stoppageIndex).attr('data-key','percentage_stoppage' + stoppageIndex);	

		$('#percentage_stoppage_slider' + stoppageIndex).on('input', function(){
		  var range__input = $(this).data('key');
		  $('#'+range__input).html(this.value);
		  gradient_generate();
		});
        stoppageIndex++;

        $('.remove_stopper')['click'](function () {
            $(this)['closest']('li.list-item')['remove']();
            gradient_generate();
            return false
        });
		jscolor.init()
        gradient_generate()
    });
    gradient_generate()
});

function updateStopperColorString() {
    stoperColorsString = '';
    $('#generator-option li.list-item.stopper')['each'](function () {
        var stopColor = $(this)['find']('.stop-color').val();
        var stopPos = parseInt($(this)['find'](' .percentage_stoppage').text());
        stoperColorsString += stopColor + ' ' + stopPos + '%, '
    })
}