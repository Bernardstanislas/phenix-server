  function testAnim(x) {
    $(".showcode").html('&lt;h1 class="animated '+x+'"&gt;Example Text&lt;/h1&gt;\n&lt;!--Add class "infinite" for an infinite loop--&gt;');
	Prism.highlightAll();
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

  $(document).ready(function(){
    $('.js--triggerAnimation').click(function(e){
      e.preventDefault();
      var anim = $('.js--animations').val();
      testAnim(anim);
    });

    $('.js--animations').change(function(){
      var anim = $(this).val();
      testAnim(anim);
    });
  });
