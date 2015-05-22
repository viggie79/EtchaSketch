
//* create grid function
 var createGrid = function() {
for(i=0; i<3000; i++) {
		$(".container").prepend("<div class='medium'></div>");
	}
};

$(document).ready(function() {
//* make the grid by penSize 
	createGrid();
	$(".navbar").prepend('<button class="btn shake">Shake</button>')
	$(".navbar").prepend('<button class="btn size">Pen Size</button>')
$(".container").on('mouseenter', ".medium", function() {
	$(this).addClass("hover");
})


//* clear grid 
$(".navbar").on('click', ".shake",function() {
	$(".medium").fadeOut();
    createGrid();
});
//* change div size via btn size
$(".size").click(function() {
	var size = prompt("How big a pen would you like to use? big, medium, or small")
	switch (size) {
		case "big":
		createGrid();
		$(".medium").addClass("big");
		break;
		case "small":
		createGrid();
		//add 'small' id ----- adding small class stayed at medium
		$(".medium").prop("id", 'small');
		break;
		case "medium":
		createGrid();
		$(".medium").addClass("medium");
		break;
		default:
			alert ("Why you gotta be like that?")
			};
	});
	});
	



// this is how I made the divs via 'createElement'
/*
$(document).ready(function() {
	for(i=0; i<56; i++) {
	var newDiv = document.createElement("div");
	newDiv.id="myDiv";
	$(".container").append(newDiv);}
});
*/