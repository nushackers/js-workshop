var Templates = {
	todoItem: function (text) {
	return '\
		<tr class="todo-item">\
			<td class="completed-col"> \
				<button class="btn btn-default ok-button">\
					<span class="glyphicon glyphicon-ok"></span>\
				</button>\
			</td>\
			<td>\
				<p class="todo-text"> ' + text + '</p>\
			</td>\
			<td>\
				<button class="btn btn-default remove-button pull-right">\
					<span class="glyphicon glyphicon-remove"></span>\
				</button>\
			</td>\
		</tr>';
	}
}

var App = {};

App.onCompleteFor =  function (node) {
	$(node).click( function (e) {
		console.log("click");
		$(e.target).closest(".todo-item").toggleClass("done");
	});
};

App.onRemoveFor = function (node) {
	$(node).click(function (e) {
		$(e.target).closest(".todo-item").remove();
	})
};

App.getInputAndInsert = function () {
	var input = $(".todo-input");
	var text = input.val();
	input.val("");

	var todoItem = $(Templates.todoItem(text));
	$("#todos tbody").append(todoItem);
	App.onCompleteFor(todoItem.find(".ok-button"));
	App.onRemoveFor(todoItem.find(".remove-button"));
};

App.onPressingEnter = function () {
	$(".todo-input").keypress(function (e){
		if (e.which == 13) {
			App.getInputAndInsert();
		};
	});
};

App.main = function () {
	App.onPressingEnter();
	App.onCompleteFor($(".ok-button"));
	App.onRemoveFor($(".remove-button"));
};

$(document).ready(function(){
	console.log("Document is ready!!");
	App.main();
});