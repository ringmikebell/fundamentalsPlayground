$(document).ready(function(){

	alert("Heeeeyyy");

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#explode").click(function(){
		$("#image").hide ("explode", {pieces: 16}, 2000);
	});

	$("#updown").click(function(){
		$("#image").slideUp(5000).slideDown(2000);
	});

	$("#sizeChange").click(function(){
		$("#image").animate({
			height: '-=50%',
			width: '-=50%'
		});
	});
});


