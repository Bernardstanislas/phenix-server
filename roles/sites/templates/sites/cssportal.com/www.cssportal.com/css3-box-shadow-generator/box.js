var shadows = {
    shadow1:{
        offsetH: 3,
        offsetV: 3,
        radiusB: 2,
        radiusS: 0,
        opacity: 1,
		inset: '',
        R: 128,
        G: 0,
        B: 0
    }, 
};

var hexDigits =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var hex= function(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}  

function validateCleanHex( $pickerId ){

    // remove all whitespace 
    $('#'+$pickerId).val(function(i, v) { 
        return v.replace(/\s/g,'')
    });
    
    // Validate input for only hex chars
    var acceptable  = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "1", "2", "3", "4", "5", "6","7", "8", "9", "0"],
        text        = $('#'+$pickerId).val(),
        length      = text.length,
        valid       = true;
        i           = 0,
        hasHash     = 0;
       
    for ( i; i < length; i++ ){

        // Skip if the first char is #
        if( text[i] == "#" && i == 0 ){ 
            i++;
            hasHash = 1;
        }
        // If the string is hashed only allow 6 chars
        if( ( hasHash == 0 && i >= 6 ) || ( hasHash == 1 && i >= 7 ) ||  $.inArray( text[i], acceptable ) == -1  ){
         
            var clean = text.replace( text[i], '' );  
            $('#'+$pickerId).val(clean);
            valid = false;
            return false;
        }
    }
    return valid;
}

// Sliders
$(function() {

    var $rsInput = $('input[type="range"]');

    $rsInput.on( 'input', function(e){

        var $objKey = $('#activeKey').val(),
            $objRow = $(this).data("key");

        // Set the object vals
        shadows['shadow'+$objKey][$objRow] = this.value;

        //set input vals
        $('#'+$objRow).html( this.value ); 

        generateCSS();
    })

    function generateCSS(){
        var $rows = '';

        for( var objVal in shadows ) {
            $rows += shadows[objVal].inset+shadows[objVal].offsetH+'px '+shadows[objVal].offsetV+'px '+shadows[objVal].radiusB+'px '+shadows[objVal].radiusS+'px rgba('+shadows[objVal].R+', '+shadows[objVal].G+', '+shadows[objVal].B+', '+shadows[objVal].opacity+'),';
        }
		
        var $vals = $rows .substring(0, $rows.length - 1);

		$('#demo').css({ 'box-shadow': $vals });
		$('#code').html( 'box-shadow: '+$vals+';');
		Prism.highlightAll();
    }


    // Hex input
    $('#s-color').on( 'change', function(){
        if( validateCleanHex( this.id ) ){

            var colour = this.value,
                $noHash = colour.replace( '#', '', colour );

            if( $noHash.length === 3 || $noHash.length === 6 ){
 
			var r,g,b;
			if ( colour.charAt(0) == '#' ) {
				colour = colour.substr(1);
			}
			if ( colour.length == 3 ) {
				colour = colour.substr(0,1) + colour.substr(0,1) + colour.substr(1,2) + colour.substr(1,2) + colour.substr(2,3) + colour.substr(2,3);
			}
			r = colour.charAt(0) + '' + colour.charAt(1);
			g = colour.charAt(2) + '' + colour.charAt(3);
			b = colour.charAt(4) + '' + colour.charAt(5);
			r = parseInt( r,16 );
			g = parseInt( g,16 );
			b = parseInt( b,16);

 
                // Set object vals
                var $objKey = $('#activeKey').val();
                shadows['shadow'+$objKey]['R'] = r;
                shadows['shadow'+$objKey]['G'] = g;
                shadows['shadow'+$objKey]['B'] = b;

                // Set input vals
                $('#shadr').val(r);
                $('#shadg').val(g);
                $('#shadb').val(b);

                generateCSS();
            }
        }
    });

	$('#inset').on( 'change', function(){	
		var $objKey = $('#activeKey').val();
            if($(this).prop("checked") == true){
                shadows['shadow'+$objKey]['inset'] = "inset ";
            }
            else if($(this).prop("checked") == false){
                shadows['shadow'+$objKey]['inset'] = "";
            }
		generateCSS();
	});
	
	

    function resetSlidersRgb( $i ){
        $rsInput.each( function(){    
            $key = $(this).data("key");
            $(this).val( shadows['shadow'+$i][$key] ).change()
			$('#'+$key).html( shadows['shadow'+$i][$key] ).change()
        });

        $('#shadr').val( shadows['shadow'+$i]['R'] );
        $('#shadg').val( shadows['shadow'+$i]['G'] );
        $('#shadb').val( shadows['shadow'+$i]['B'] );
		
		var rgbtohex = "#" + hex(shadows['shadow'+$i]['R']) + hex(shadows['shadow'+$i]['G']) + hex(shadows['shadow'+$i]['B']);
		$('#s-color').val( rgbtohex ).change();		
		$('.mycolor').css({'background' : rgbtohex});

		if(shadows['shadow'+$i]['inset'] == ""){
			$("#inset").prop("checked", false);
		}else{
			$("#inset").prop("checked", true);
		}		
    }


    $('#add-shadow-li span').on( 'click', function(e){ 
        var $i = (Object.keys(shadows).length + 1);
        shadows['shadow'+$i] = {
            offsetH: Math.floor(Math.random() * 40) - 20,
            offsetV: Math.floor(Math.random() * 40) - 20,
            radiusB: Math.floor(Math.random() * 24) + 1,
            radiusS: Math.floor(Math.random() * 20) - 1,
            opacity: 1,
			inset: '',
            R: Math.floor(Math.random() * 127) + 1,
            G: Math.floor(Math.random() * 127) + 1,
            B: Math.floor(Math.random() * 127) + 1
        };
 
        $('.multi-shadow-span').each( function(){
            $(this).removeClass('active-shadow');
        });

        $('#activeKey').val($i);
        resetSlidersRgb($i);
        $( '<li class="add-s-li"><span class="multi-shadow-span active-shadow" id="shadow'+$i+'" data-shnum="'+$i+'">'+$i+'</span><span class="showx" data-shnum="'+$i+'"><span class="showx-inner">-</span></span></li>' ).insertBefore( "#add-shadow-li" );
    });
    
    // Multi shadows
    $('body').on( 'click', '.multi-shadow-span', function(e){ 
  
        var $activated = $(this).data("shnum");

        $('.multi-shadow .multi-shadow-span').each( function(){
            
            if( $(this).hasClass("active-shadow") ){
                $(this).removeClass("active-shadow");
                e.stopPropagation();
            }
        });
        $(this).addClass('active-shadow'); 
        
        // Set active
        $('#activeKey').val( $activated );

        // Reset sliders
        resetSlidersRgb( $activated );
        
    });

    //$(document).on('mouseenter', '.add-s-li', function(e) {
    //    if( e.type === 'mouseenter' ){
    //        $('.showx',this).show();
    //        var $shNum = $('.showx',this).data("shnum");
    //        var $preview;
    //        $preview = shadows['shadow'+$shNum].inset+shadows['shadow'+$shNum].offsetH+'px '+shadows['shadow'+$shNum].offsetV+'px '+shadows['shadow'+$shNum].radiusB+'px '+shadows['shadow'+$shNum].radiusS+'px rgba( '+shadows['shadow'+$shNum].R+', '+shadows['shadow'+$shNum].G+', '+shadows['shadow'+$shNum].B+','+shadows['shadow'+$shNum].opacity+')';               
    //        $('#demo').css({ 'box-shadow': $preview });
    //    } else {
    //        $('.showx',this).hide();
    //        generateCSS();
    //    }
    //});

   // $(document).on('mouseenter mouseleave', '#shadow1', function(e) {
    //    if( e.type === 'mouseenter' ){
    //        var $shNum = 1,
    //            $preview;
    //            $preview = shadows['shadow'+$shNum].inset+shadows['shadow'+$shNum].offsetH+'px '+shadows['shadow'+$shNum].offsetV+'px '+shadows['shadow'+$shNum].radiusB+'px '+shadows['shadow'+$shNum].radiusS+'px rgba( '+shadows['shadow'+$shNum].R+', '+shadows['shadow'+$shNum].G+', '+shadows['shadow'+$shNum].B+','+shadows['shadow'+$shNum].opacity+')';  
    //            $('#demo').css({ 'box-shadow': $preview });
    //    } else {
    //        generateCSS();
    //    }
    //});

    $(document).on('click', '.showx', function(e) {   
        var $shNum = $(this).data("shnum"),
            $i;
        $(this).parent().remove();
        if( $shNum == Object.keys(shadows).length ){       
            delete shadows["shadow"+$shNum]; 
        } else {
            for( $i = $shNum; $i <= Object.keys(shadows).length; $i++ ){
                var $up = ( $i + 1 );
                shadows["shadow"+$i] = shadows["shadow"+$up];
                delete shadows["shadow"+$up]; 
            }
        }     

        $('.add-s-li').each( function(){
            $(this).remove();
        });

        var $active,
            $originNum = $('#activeKey').val();
            $shPlus = ( Object.keys(shadows).length + 1 );

            if( $originNum == $shPlus ){   
                $originNum = (Object.keys(shadows).length);
                $('#activeKey').val( $originNum );
                
            }
        
        for( $i = 2; $i <= Object.keys(shadows).length; $i++ ){
            if( $i == $('#activeKey').val() ){   
                $active = 'active-shadow';
            } else {
                $active = '';
            }
            var $li = '<li class="add-s-li"><span class="multi-shadow-span '+$active+'" id="shadow'+$i+'" data-shnum="'+$i+'">'+$i+'</span><span class="showx" data-shnum="'+$i+'"><span class="showx-inner">-</span></span></li>';
            $($li).insertBefore( "#add-shadow-li" );
        }
        generateCSS();
    });

    $(document).on('click', '.multi-shadow', function(e) {
        var $activeSet = 0;
        $('.add-s-li').each( function(){
            if( $('.multi-shadow-span',this).hasClass('active-shadow') ){
                $activeSet = 1;
            }
        });
        if( $activeSet == 0 ){
            $('#shadow'+Object.keys(shadows).length).addClass('active-shadow');
        }
    });
		

	$(document).ready(function() {
	   generateCSS();
	});
});