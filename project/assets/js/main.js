
$(document).ready(function () {
	function rateStars() {
		var count = 0
		var mainCircle = $("#rounds .container-fluid .row .col-md-12 .rounds");
		var stars = $("#rounds .container-fluid .row .col-md-12 .rounds .star");
		var mainPoup = $(".edit_popup")
		var innerPoup = $(".edit_popup .edit_popup_inner");
		var cancelButton = $(".edit_popup .edit_popup_inner .btns button")
		var html = $(".edit_popup .edit_popup_inner p")
		var starArray = [];
		starArray.push(stars);
		cancelButton.click(function () {
			mainPoup.removeClass("active");
			innerPoup.removeClass("active");
		})
		for (var i = 0; i < starArray.length; i++) {
			starArray[i].click(function () {

				html.html(this.innerHTML)
				console.log(html.innerHTML)

				if (count % 2 == 0) {
					mainPoup.addClass("active");
					innerPoup.addClass("active");
				}
				if (count % 2 == 1) {
					mainPoup.removeClass("active");
					innerPoup.removeClass("active");
				}
				count++
			})
		}
		var earth = $("#rounds .container-fluid .row .col-md-12 .rounds img");
		setTimeout(function(){
			earth.css({"width":"100%"
					,"height":"100%",
				})
	   }, 1000);
	   setTimeout(function(){
		mainCircle.css({
				"animation-fill-mode":"both"
			})
		}, 2000);
	}
	rateStars();
});

