var count = 1;
function addAppoint(){
	var task = $('<p class="editable" contenteditable="true" ></p>').css({maxWidth: '60%', color: 'gray'});
	$(arguments[0]).after(task);
	count++;
}

$(document).on('ready', function() {
	$('.day').hover(function(){
		$(this).find('.add-item').toggle();	
	}, function(){
		$(this).find('.add-item').toggle();
	});
	$(document).on('click', '.add-item', function(event){
		addAppoint(this);
		$('.editable:first').focus();
		$('.editable:first').blur(function(event){
			if($('.editable:first').text() === ''){
				$('.editable:first').remove();
			}else{
				$('.editable:first').attr({contenteditable: false});
        		$('.editable:first').css('color', 'black');
			}
		});
	});
	$(document).keypress('p', function(event){
		if(event.which === 13) {
			if($('p:first').text() !== ''){
				$('p').attr({contenteditable: false});
        		$('p').css('color', 'black');
			}else{
				$('p:first').remove();
			}
    	}
	});

	$(document).on('click', function() {

	});
});