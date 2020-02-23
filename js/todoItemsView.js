
var TodoItemsView = Backbone.View.extend({
	id: "todoItemsContainer",
	
	initialize: function(options){
		// if (!(options && options.model))
		// 	throw new Error("model is not specified.");

		// this.model.on("add", this.onAddTodoItem, this);
		// this.model.on("remove", this.onRemoveTodoItem, this);
	},

	onRemoveTodoItem: function(todoItem){
		this.$("li#" + todoItem.id).remove();
	},

	onAddTodoItem: function(todoItem){
		var view = new TodoItemView({ model: todoItem });
		this.$("#todoItems").append(view.render().$el);
	},

	events: {
		"keypress #newTodoItem": "onKeyPress",

		'click #getDate': 'onGetDateClicked'
	},

	onGetDateClicked : function(){
		var date = $('#dateInput').val();

		try{
			var datePickerParseReturn = $.datepicker.parseDate("dd-mm-yy", date);
		console.log('datePickerParseReturn : '+datePickerParseReturn);
		}
		catch(e){
			console.log('invalid date input : '+e);
			return;
		}

		// if(!($.datepicker.parseDate("dd-mm-yy", date))){
		// 	console.log('invalid input date');
		// }
		console.log('date input : '+date);
	},

	onKeyPress: function(e){
		if (e.keyCode == 13){
			var $textBox = this.$("#newTodoItem");

			if ($textBox.val()){
				var todoItem = new TodoItem({ title: $textBox.val() });
				this.model.create(todoItem);

				$textBox.val("");
			}	
		}
	},

	render: function(){
		var template = $("#todoItemsTemplate").html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
	}
});