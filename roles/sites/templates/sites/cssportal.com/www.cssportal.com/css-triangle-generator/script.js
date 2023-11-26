$(function(){

$('#color').bind('input', function() { 
    updateTriangle();
});

$(".direction__item").click(function(){
  $(".direction__item").removeClass("direction__item_active");
  $(this).addClass("direction__item_active");
});

var triangle = $('.triangle'),
result = $('#result'),
staticCSS = '.triangle {\n'+
			'   width: 0px;'+'\n'+
			'   height: 0px;'+'\n'+
			'   border-style: solid;',
colorDirection = {
	'top': 'bottom',
	'right': 'left',
	'bottom': 'top',
	'left': 'right',
	'topRight': 'right',
	'bottomRight': 'bottom',
	'bottomLeft': 'left',
	'topLeft': 'top'
},
lengthDirection = {
	'top': {
		'top': false,
		'right': 'width-right',
		'bottom': 'height',
		'left': 'width-left'
	},
	'right': {
		'top': 'height-top',
		'right': false,
		'bottom': 'height-bottom',
		'left': 'width'
	},
	'bottom': {
		'top': 'height',
		'right': 'width-right',
		'bottom': false,
		'left': 'width-left'
	},
	'left': {
		'top': 'height-top',
		'right': 'width',
		'bottom': 'height-bottom',
		'left': false
	},
	'topRight': {
		'top': false,
		'right': 'width',
		'bottom': 'height',
		'left': false
	},
	'bottomRight': {
		'top': false,
		'right': false,
		'bottom': 'height',
		'left': 'width'
	},
	'bottomLeft': {
		'top': 'height',
		'right': false,
		'bottom': false,
		'left': 'width'
	},
	'topLeft': {
		'top': 'height',
		'right': 'width',
		'bottom': false,
		'left': false
	}
}


updateSetup();
updateTriangle();


$('input[name=direction]').change(function(){
	$('input[data-key=rotate]').val(0);
	document.getElementById('rotate').innerHTML = 0;
	updateSetup();
	updateSize($(this));
	updateTriangle();
});

$('input[name=type]').change(function(){
	$('input[data-key=rotate]').val(0);
	document.getElementById('rotate').innerHTML = 0;
	updateSetup();
	updateSize($(this));
	updateTriangle();
});

$('#sizeInputs input').change(function(){
	updateSize($(this));
	updateTriangle();
});


function updateSize(self){
	var direction = $('input[name=direction]:checked').val(),
		type = $('input[name=type]:checked').val(),
		width = document.getElementById('width'),
		height = document.getElementById('height'),
		widthLeft = document.getElementById('widthleft'),
		widthRight = document.getElementById('widthright'),
		heightTop = document.getElementById('heighttop'),
		heightBottom = document.getElementById('heightbottom');
	if(direction == 'top' || direction == 'bottom' ||
		direction == 'left' || direction == 'right'){
		if($('#widthshow').css('display') == 'none'){
			width.innerHTML = widthLeft.innerHTML * 1 + widthRight.innerHTML * 1;
			$('input[data-key=width]').val(width.innerHTML);
		}else{
			widthLeft.innerHTML = width.innerHTML * 1 / 2;
			$('input[data-key=widthleft]').val(widthLeft.innerHTML);
			widthRight.innerHTML = width.innerHTML * 1 / 2;
			$('input[data-key=widthright]').val(widthRight.innerHTML);
		}
		if($('#heightshow').css('display') == 'none'){
			height.innerHTML = heightTop.innerHTML * 1 + heightBottom.innerHTML * 1;
			$('input[data-key=height]').val(height.innerHTML);
		}else{
			heightTop.innerHTML = height.innerHTML * 1 / 2;
			$('input[data-key=heighttop]').val(heightTop.innerHTML);
			heightBottom.innerHTML = height.innerHTML * 1 / 2;
			$('input[data-key=heightbottom]').val(heightBottom.innerHTML);
		}
	}else if(type == 'iso'){
		if(self.attr('id') == 'width'){
			height.innerHTML = width.innerHTML;
			$('input[data-key=height]').val(height.innerHTML);
		}else if(self.attr('id') == 'height'){
			width.innerHTML = height.innerHTML;
			$('input[data-key=width]').val(width.innerHTML);
		}else if(height.innerHTML != width.innerHTML){
			height.innerHTML = width.innerHTML;
			$('input[data-key=height]').val(height.innerHTML);
		}
		widthLeft.innerHTML = width.innerHTML * 1 / 2;
		$('input[data-key=widthleft]').val(widthLeft.innerHTML);
		widthRight.innerHTML = width.innerHTML * 1 / 2;
		$('input[data-key=widthright]').val(widthRight.innerHTML);
		heightTop.innerHTML = height.innerHTML * 1 / 2;
		$('input[data-key=heighttop]').val(heightTop.innerHTML);
		heightBottom.innerHTML = height.innerHTML * 1 / 2;
		$('input[data-key=heightbottom]').val(heightBottom.innerHTML);
	}
}
	
function updateTriangle() {
	var colors = {
			'top':'transparent',
			'right':'transparent',
			'bottom':'transparent',
			'left':'transparent'
		},
		color = $('#color').val(),
		lengths = {
			'top':0,
			'right':0,
			'bottom':0,
			'left':0
		},
		direction = $('input[name=direction]:checked').val(),
		type = $('input[name=type]:checked').val(),
		lengthDirections = lengthDirection[direction];
		
		colors[colorDirection[direction]] = color;
		for(var key in lengthDirections){
			if(lengthDirections[key] === false){
				lengths[key] = '0';
			}else{
				switch(type){
					case 'equ':
						if(direction == 'top' || direction == 'bottom'){
							var equHeight = (Math.sqrt(3)/2*$('#width').html()).toFixed(1);
							switch(lengthDirections[key]){
								case 'width':
									lengths[key] = equHeight+'px';
									break;
								case 'height':
									lengths[key] = equHeight+'px';
									break;
								case 'width-left':
									lengths[key] = $('#width').html()/2+'px';
									break;
								case 'width-right':
									lengths[key] = $('#width').html()/2+'px';
									break;
							}
						}else if(direction == 'left' || direction == 'right'){
							var equHeight = (Math.sqrt(3)/2*$('#height').html()).toFixed(1);
							switch(lengthDirections[key]){
								case 'width':
									lengths[key] = equHeight+'px';
									break;
								case 'height':
									lengths[key] = equHeight+'px';
									break;
								case 'height-top':
									lengths[key] = $('#height').html()/2+'px';
									break;
								case 'height-bottom':
									lengths[key] = $('#height').html()/2+'px';
									break;
							}
						}
						break;
					case 'iso':
						switch(lengthDirections[key]){
							case 'width':
								lengths[key] = $('#width').html()+'px';
								break;
							case 'height':
								lengths[key] = $('#height').html()+'px';
								break;
							case 'width-left':
								lengths[key] = $('#width').html()/2+'px';
								break;
							case 'width-right':
								lengths[key] = $('#width').html()/2+'px';
								break;
							case 'height-top':
								lengths[key] = $('#height').html()/2+'px';
								break;
							case 'height-bottom':
								lengths[key] = $('#height').html()/2+'px';
								break;
						}
						break;
					case 'sca':
						switch(lengthDirections[key]){
							case 'width':
								lengths[key] = $('#width').html()+'px';
								break;
							case 'height':
								lengths[key] = $('#height').html()+'px';
								break;
							case 'width-left':
								lengths[key] = $('#widthleft').html()+'px';
								break;
							case 'width-right':
								lengths[key] = $('#widthright').html()+'px';
								break;
							case 'height-top':
								lengths[key] = $('#heighttop').html()+'px';
								break;
							case 'height-bottom':
								lengths[key] = $('#heightbottom').html()+'px';
								break;
						}
						break;
				}
			}
		}
		
		var rotate = 'rotate('+$('#rotate').html()+'deg)';
		colors = toArray(colors).join(' ');
		triangle.css('border-color',colors);
		lengths = toArray(lengths).join(' ');
		triangle.css('border-width',lengths);
		triangle.css('transform', rotate);
		
		result.html(staticCSS+'\n'+
			'   border-width: '+lengths+';\n'+
			'   border-color: '+colors+';\n'+
			'   transform: '+rotate+';\n'+
			'}'
			
		);
		Prism.highlightAll();
}

function updateSetup(){
	var direction = $('input[name=direction]:checked').val(),
		type = $('input[name=type]:checked').val();

	if(direction == 'topRight' || direction == 'bottomRight' ||
		direction == 'bottomLeft' || direction == 'topLeft'){
		if(document.getElementById('type-equ').checked){
			document.getElementById('type-iso').checked = true;
			type = 'iso';
		}
		$('#type-equ').attr('disabled','disabled');
	}else{
		$('#type-equ').removeAttr('disabled');
	}
	var width = document.getElementById('width'),
		height = document.getElementById('height'),
		widthLeft = document.getElementById('widthleft'),
		widthRight = document.getElementById('widthright'),
		heightTop = document.getElementById('heighttop'),
		heightBottom = document.getElementById('heightbottom');
	switch(type){
		case 'equ':
			if(direction == 'top' || direction == 'bottom'){
				$('#widthshow').show();
				$('#heightshow').hide();
				$('#lrshow').hide();
				$('#tbshow').hide();
			}else if(direction == 'left' || direction == 'right'){
				$('#widthshow').hide();
				$('#heightshow').show();
				$('#lrshow').hide();
				$('#tbshow').hide();
			}else{
				$('#widthshow').show;
				$('#heightshow').show();
				$('#lrshow').hide();
				$('#tbshow').hide();
			}
			break;
		case 'iso':
				$('#widthshow').show();
				$('#heightshow').show();
				$('#lrshow').hide();
				$('#tbshow').hide();
			break;
		case 'sca':
			if(direction == 'top' || direction == 'bottom'){
				$('#widthshow').hide();
				$('#heightshow').show();
				$('#lrshow').show();
				$('#tbshow').hide();
			}else if(direction == 'left' || direction == 'right'){
				$('#widthshow').show();
				$('#heightshow').hide();
				$('#lrshow').hide();
				$('#tbshow').show();
			}else{
				$('#widthshow').show();
				$('#heightshow').show();
				$('#lrshow').hide();
				$('#tbshow').hide();
			}
			break;
	}
}

function toArray(obj){
	var arr = [];
	for(var key in obj){
		arr.push(obj[key]);
	}
	return arr;
}

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  updateSize();
    });
  });
};

rangeSlider();
	
});
