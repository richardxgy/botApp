$('ul').on('click','li',function(){
	$('li').attr('class','')
	$(this).attr('class','active')
});

$('.carousel').carousel();

