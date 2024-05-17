$(document).ready(function () {
    AOS.init();
//Hover Menu Dropdown in Bootstrap
    jQuery('ul.navbar-nav li.dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).show();
        jQuery(this).addClass('open');
    }, function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).hide();
        jQuery(this).removeClass('open');
    });
// Scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(".fancybox").fancybox();
    //Add div clearfix after 3 list
    $("ul.services-ul li:nth-child(3n)").after("<div class='clearfix'></div>")
});
// Banner
$('.owl-popular-courses').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    lazyLoad: true,
    center: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:2
        },
        1000: {
            items: 3
        }
    }
});
$('.owl-upcoming-courses').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    lazyLoad: true,
    center: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:2
        },
        1000: {
            items: 3
        }
    }
});
$('.owl-workshop').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    lazyLoad: true,
    center: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:2
        },
        1000: {
            items: 3
        }
    }
});


// Fixed menu
$("header").waypoint(function () {
    $(".btm-header").toggleClass("navbar-fixed-top animated fadeInDown");
    $(".btm-header.js-toggleClass").toggleClass("js-toggleClass");
    return false;
}, {offset: '-0.1px'});

// Responsive tab for courses
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".dwk_tab_content").hide();
    $(".dwk_tab_content:first").show();

  /* if in tab mode */
    $("ul.dwk_tabs li").click(function() {
		
      $(".dwk_tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.dwk_tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".dwk_tab_drawer_heading").removeClass("d_active");
	  $(".dwk_tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".dwk_tab_drawer_heading").click(function() {
      
      $(".dwk_tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".dwk_tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.dwk_tabs li").removeClass("active");
	  $("ul.dwk_tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.dwk_tabs li').last().addClass("tab_last");
	
