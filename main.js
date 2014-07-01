var count = 1;
function addAppoint(){
	var task = $('<p class="test" contenteditable="true" >Click to edit and, press enter to save.</p>').css({maxWidth: '60%'});
	$(arguments[0]).after(task);
	count++;
}

$(document).on('ready', function() {
	$(document).on('click', '.add-item', function(event){
		addAppoint(this);
	});
	$(document).keypress('p', function(event){
		if(event.which === 13) {
        	$('p').attr({contenteditable: false});
        	console.log('test');
    	}
	});
});