$(document).ready(function(){
	$('#button').on('click',function() {
		var items= $('#item').val();
		$('.shopping-list').append('<li>'+items+'</li>');
	});
	$('#item').keyup(function(e) {
		if (e.keyCode==13){
			var items=$(this).val();
			$('.shopping-list').append('<li>'+items+'</li>');			
			}
	});
	$('.shopping-list').on('click','li',function() {
		$(this).toggleClass('strike');
	});
	$('.shopping-list').on('dblclick','li',function() {
		$(this).addClass('hide');
	});
});

/* Add two functions on is on click to strick through (addclass) and .on double click to .remove items*/