var onResize = function() {
	$("body").css("padding-top", $(".navbar-fixed-top").height());
};

$(window).resize(onResize);

$(function() {
	onResize();
});