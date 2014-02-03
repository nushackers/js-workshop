// open a console
> document.getElementById("first-div");
....
// Lets look at it closer

> var d = document.getElementById("first-div");
undefined

> d.innerHTML

"
	Div for the sake of a div
"

> d.innerText
"Div for the sake of a div"

> typeof d
"object"

> d.getAttribute("class");
"useless"

> d.getAttribute("funky-attribute");
"ke3l"

> d.innerText = "I just changed this!"
"I just changed this!"

// Something more complicated

// Lets say we want to select all nodes where class is useless and change their text to something useful

var nodes = document.getElementsByClassName("useless");
for (var i = 0; i < nodes.length; i++) {
	nodes[i].innerText = "More Useful";
};

// Children
> var l = document.getElementById("boring-list");
undefined

> l.children
...
// lets update the boring list and make it show numbers like 1,2,3,..,10
for (var i = 0; i < l.children.length; i++) {
	l.children[i].innerText = i + 1;
}

// Lets add a new node
var newNode = document.createElement("li");
newNode.innerText = "Bla Bla";
l.appendChild(newNode)

//Query Selectors. Much advance

// "#name" means select an node with id = name 
> document.querySelector("#boring-list")
...
// '.name' means select a node with class = useless
> document.querySelector(".useless")
//or
> document.querySelectorAll(".useless")

// "name" means select a node with tag name
> document.querySelectorAll("div")

// "ancestor descendent"
> document.querySelectorAll("div li")

// "parent > child"
> document.querySelectorAll("div > li")
// attribute queries
> document.querySelectorAll("[name='sample-input']")

/*
So far everything has been quite verbose. 
Also not guranteed over older browsers.
Enter Jquery
*/
> $
...
/*
Querying
jquery's selector syntax is a super set of the browser querySelector
*/

> $(".useless")
[...]

> $("#boring-list li")
[...]

// Lets repeat what we did earlier using jquery

$("#boring-list li").each(function (i,element) {
	$(element).text(i);
});

$("#boring-list").append("<li> Last</li>");

$("[name='sample-input']").attr("name")

$("[name='sample-input']").attr("name","foo")

// Adding, removing Classes

$("#first-div").addClass("highlight")

$("#first-div").removeClass("highlight")

$("#first-div").toggleClass("highlight")

var first = $("#boring-list li")[0]
$(first).toggleClass('done')

/*
 EVENTS
*/
$(document).ready(function(){
	
});
vs 
$(function(){

});

// timed EVENTS
$(function () {
	function copyText () {
		var textField = $("[name='sample-input']")[0];
		var destinations = $(".copy-input");
		//console.log(destinations,textField);
		$(destinations).each(function (i, elem){
			$(elem).text($(textField).val());
			
		});
	}
	setInterval(copyText,100);
	console.log("Hello!");
});

// action based events
$(function () {
	function copyText () {
		var textField = $("[name='sample-input']");
		var destinations = $(".copy-input");
		destinations.text(textField.val());
	}
	$("[name='sample-input']").keyup(copyText);
	console.log("Hello!");
});

// Simple Todo

	$("#simple-todo .done-button").click(function(e){
		var span = $(e.target).next()
		span.toggleClass("done");
	});
// More behavior
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
