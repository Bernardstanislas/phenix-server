(function ($) {

    'use strict';

    function initMetisMenu() {
        $("#side-menu").metisMenu();
    }

    function initLeftMenuCollapse() {
        var currentSIdebarSize = document.body.getAttribute('data-sidebar-size');
        $(window).on('load', function () {

            $('.switch').on('switch-change', function () {
                toggleWeather();
            });

            if (window.innerWidth >= 992 && window.innerWidth <= 1366) {
                document.body.setAttribute('data-sidebar-size', 'sm');
            }
        });

        $('#vertical-menu-btn').on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('sidebar-enable');
            if ($(window).width() >= 992) {
                if (currentSIdebarSize == null) {
                    (document.body.getAttribute('data-sidebar-size') == null || document.body.getAttribute('data-sidebar-size') == "lg") ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'lg')
                } else if (currentSIdebarSize == "md") {
                    (document.body.getAttribute('data-sidebar-size') == "md") ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'md')
                } else {
                    (document.body.getAttribute('data-sidebar-size') == "sm") ? document.body.setAttribute('data-sidebar-size', 'lg') : document.body.setAttribute('data-sidebar-size', 'sm')
                }
            }
        });
    }

    function initActiveMenu() {
        $("#sidebar-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("mm-active");
                $(this).parent().parent().addClass("mm-show");
                $(this).parent().parent().prev().addClass("mm-active");
                $(this).parent().parent().parent().addClass("mm-active");
                $(this).parent().parent().parent().parent().addClass("mm-show");
                $(this).parent().parent().parent().parent().parent().addClass("mm-active");
            }
        });
    }

    function initMenuItemScroll() {
        $(document).ready(function () {
            if ($("#sidebar-menu").length > 0 && $("#sidebar-menu .mm-active .active").length > 0) {
                var activeMenu = $("#sidebar-menu .mm-active .active").offset().top;
                console.log("activeMenu", activeMenu)
                if (activeMenu > 300) {
                    activeMenu = activeMenu - 300;
                    $(".vertical-menu .simplebar-content-wrapper").animate({
                        scrollTop: activeMenu
                    }, "slow");
                }
            }
        });
    }

    function initComponents() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
    }

    function layoutSetting() {
        var body = document.getElementsByTagName("body")[0];
        $('.right-bar-toggle').on('click', function (e) {
            $('body').toggleClass('right-bar-enabled');
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                return;
            }
            $('body').removeClass('right-bar-enabled');
            return;
        });


    }

    function init() {
        initMetisMenu();
        initLeftMenuCollapse();
        initActiveMenu();
        initMenuItemScroll();
        initComponents();
        layoutSetting();
    }

    init();

})(jQuery);


function set(btn) {
  var tooltip = bootstrap.Tooltip.getInstance(btn);
  tooltip.setContent({ '.tooltip-inner': 'Copied' });
}

function hide(btn) {
  setTimeout(function() {
  var tooltip = bootstrap.Tooltip.getInstance(btn);
  tooltip.setContent({ '.tooltip-inner': 'Copy' });
  }, 2000);
}

var clip = new ClipboardJS('.clipboard');

clip.on("success", function(e) {
  var btn = $(e.trigger);
  e.clearSelection();
  set(btn);
  hide(btn);
});
clip.on("error", function(e) {
  var btn = $(e.trigger);
  setTooltip(btn,'Failed!');
  hideTooltip(btn);
});

function addFav(title) {
	var url = window.location.pathname;
	const data = {
	  t:escapeHtml(title)
	}
	if (localStorage.getItem('csp'+url) === null) {
	  window.localStorage.setItem('csp'+url, JSON.stringify(data));
	  document.getElementById("btnFav").innerHTML = "<i class='fa-heart me-2'></i> Added";
	}else{
	  window.localStorage.removeItem('csp'+url);
	  document.getElementById("btnFav").innerHTML = "<i class='fa-heart-o me-2'></i> Add to Favorites";
	}
	showItems();
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function showItems() {
	var table = document.getElementById('fav_results');
	var str = "";
	var quantity = 0;

	if (localStorage.length === 0) {

	}else{
		for(var i=0;i<localStorage.length; i++) {
		  var key = localStorage.key( i );
		  
		  if (key.slice(0,3) === "csp"){
			  var item = JSON.parse( localStorage.getItem( key ) );
			  const title = item['t'];

			  str += "<li class='mb-1'><i onclick='deleteFav(\"" + key + "\")' class='fa fa-trash-o text-danger me-2' style='cursor:pointer'></i>";			  
			  str += "<a href='https://www.cssportal.com" + key.replaceAll('csp', '') + "'>" + title + "</a></li>";
			  
			  quantity++;
		  }
		}
		table.innerHTML = str;
	}
	if (quantity == 0){
		str += "<li><strong>No favorites found!</strong></li>";
		table.innerHTML = str;
	}
	var url = window.location.pathname;
	if (localStorage.getItem('csp'+url) === null) {
	  document.getElementById("btnFav").innerHTML = "<i class='fas fa-heart me-1'></i> Add to Favorites";
	}else{
	  document.getElementById("btnFav").innerHTML = "<i class='fas fa-heart me-1'></i> Added";
	}		
}

function deleteFav(code) {	 
	window.localStorage.removeItem(code);
	showItems();
}
window.onload = showItems();

$(".jumpTo").click(function(){
    $('html, body').animate({
        scrollTop: $("#jump").offset().top - 100
    });
	return false;
});