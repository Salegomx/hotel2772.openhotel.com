jQuery(document).ready(function () {
	jQuery(document.body).append('<div class="overlay"></div>');

	/* CURRENT YEAR */
	var currentYear = new Date().getFullYear();
	jQuery("#currentYear").html(currentYear);

	/* COLLAPSE */
	jQuery('[data-toggle="collapse"]').click(function (e) {
		var id = jQuery(this).attr("data-target");
		jQuery(".collapse" + id).slideToggle(300);
	});

	/* DROPDOWNS */
	jQuery('[data-toggle="dropdown"]').click(function (e) {
		jQuery(this).siblings(".dropdown-menu").toggleClass("active");
	});

	jQuery(document).click(function (e) {
		var $trigger = jQuery(".dropdown");
		if ($trigger !== event.target && !$trigger.has(event.target).length) {
			jQuery(".dropdown-menu").removeClass("active");
		}
	});

	/* OFFCANVAS MENU */
	jQuery('[data-toggle="offcanvas"]').click(function (e) {
		var id = jQuery(this).attr("data-target");
		jQuery(".offcanvas" + id).addClass("active");
		jQuery("body").addClass("overflow-hidden");
		if (typeof jQuery(".offcanvas" + id).attr("data-overlay") == "undefined") {
			jQuery(".overlay").addClass("show");
		}
	});

	jQuery('[data-dismiss="offcanvas"]').click(function (e) {
		jQuery(this).parents(".offcanvas").removeClass("active");
		jQuery(".overlay").removeClass("show");
		jQuery("body").removeClass("overflow-hidden");
	});

	/* MODALS */
	jQuery('[data-toggle="modal"]').click(function (e) {
		var id = jQuery(this).attr("data-target");
		jQuery(".modal" + id).addClass("active");
		jQuery(".overlay").addClass("show");
		jQuery("body").addClass("overflow-hidden");
	});

	jQuery('[data-dismiss="modal"]').click(function (e) {
		jQuery(this).parents(".modal").removeClass("active");
		jQuery(".overlay").removeClass("show");
		jQuery("body").removeClass("overflow-hidden");
	});

	/* NUMBER ANIMATION */
	(function ($) {
		$.fn.countTo = function (options) {
			return this.each(function () {
				var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
				var $el = jQuery(this);
				var countFrom = parseInt($el.attr("data-count-from"));
				var countTo = parseInt($el.attr("data-count-to"));
				var countSpeed = $el.attr("data-count-speed"); // Number increment per second

				var rafId;
				var increment;
				var currentCount = countFrom;
				var countAction = function () {
					if (currentCount < countTo) {
						$el.text(Math.floor(currentCount)); // Update HTML display
						increment = countSpeed / FRAME_RATE; // Calculate increment step
						currentCount += increment; // Increment counter
						rafId = requestAnimationFrame(countAction);
					} else {
						$el.text(countTo); // Set to the final value before everything stops
					}
				};
				rafId = requestAnimationFrame(countAction); // Initiates the looping function
			});
		};
	})(jQuery);

	//-- Executing
	jQuery(".count").countTo();

	jQuery(".attr_accr_title").stop().on("click",function(){
		if(jQuery(this).hasClass("active") != true)
		{
			jQuery(".attr_accr_content").slideUp();
		jQuery(".attr_accr_title").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(this).next().slideDown();
		}	
	});
});

jQuery(document).mouseup(function (e) {
	if (!jQuery(e.target).closest(".offcanvas").length) {
		jQuery(".offcanvas").removeClass("active");
		jQuery(".overlay").removeClass("show");
		jQuery("body").removeClass("overflow-hidden");
	}

	// if (!jQuery(e.target).closest(".modal-dialog").length) {
	// 	jQuery(".modal").removeClass("active");
	// 	jQuery(".overlay").removeClass("show");
	// 	jQuery("body").removeClass("overflow-hidden");
	// }
});

jQuery(document).keyup(function (e) {
	/* OFFCANVAS MENU */
	if (e.keyCode === 27) {
		jQuery(".offcanvas").removeClass("active");
		jQuery(".overlay").removeClass("show");
		jQuery("body").removeClass("overflow-hidden");
	}

	/* MODALS */
	if (e.keyCode === 27) {
		jQuery(".modal").removeClass("active");
		jQuery(".overlay").removeClass("show");
		jQuery("body").removeClass("overflow-hidden");
	}
});

/*function googleTranslateElementInit() {
	new google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
};

jQuery(function () {
	jQuery(".loadMore").click(function () {
		jQuery("<p/>", {
			text: "This is some injected text that will not be translated."
		}).appendTo(jQuery(".destination"));
	});
	$.getScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
});*/