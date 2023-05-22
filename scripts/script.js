$("ul").on("click", "li", function () {
	$(this).toggleClass("done");
});
$("ul").on("click", "span", function (e) {
	e.stopPropagation();
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
});

$("input").keypress(function(event){
	if(event.which === 13) {
		var itemText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa-solid fa-delete-left'></i></span> " + itemText + "</li>");
	}
})

$("h2 span").click(function(){
	$("input").fadeToggle();
})