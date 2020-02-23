
$(document).ready(function(){
	// var todoItems = new TodoItems();
	// todoItems.fetch();

	
	var todoItemsView = new TodoItemsView();
	$("body").append(todoItemsView.render().$el);

	

	if($('#dateInput')[0].type === 'text'){
		console.log('input type is text');
		$('#dateInput').datepicker({
			dateFormat: 'dd-mm-yy',
			constrainInput: true
		});
	}

});