$(function () {
	function copyText () {
		var textField = $("[name='sample-input']");
		var destinations = $(".copy-input");
		destinations.text(textField.val());
	}

	$("[name='sample-input']").keyup(copyText);

	$("#simple-todo .done-button").click(function(e){
		var target = $(e.target);
		var span = target.next();
		console.log(span);
		span.toggleClass("done");
		if (target.text() === "Done") {
			target.text("Undo");
		} else {
			target.text("Done");
		}
	});
	console.log("Hello!");


});