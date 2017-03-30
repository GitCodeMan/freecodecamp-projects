$(
	// Floating label headings for contact form
	function() {
		$("form")
		.on("input propertychange", ".form-item", function(e) {
			$(this).toggleClass("form-item-filled", !! $(e.target).val());
		})
		.on("focus", ".form-item", function() {
			$(this).addClass("form-item-focused");
		})
		.on("blur", ".form-item", function() {
			$(this).removeClass("form-item-focused");
		});
	}
);