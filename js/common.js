$(document).ready(function() {

    function heightDetect() {
        $('.page-top').css('min-height', $(window).height());
    };

    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

});

$(document).on("scroll", function(){
	if
    ($(document).scrollTop() > 100){
	  $(".main-header_wrap").addClass("shrink");
	}
	else
	{
		$(".main-header_wrap").removeClass("shrink");
	}
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});