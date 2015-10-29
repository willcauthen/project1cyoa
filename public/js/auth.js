$(document).ready(function () {

	function checkAuth () {
		$.get('/current-user', function (data) {
			console.log(data);
			if (data.user) {
				$('.not-logged-in').hide();
				$('.logged-in').show();
			} else  {
				$('.not-logged-in').show();
				$('.logged-in').hide();
			}
		});
	}

	checkAuth();

	$('#signUp').submit(function (event) {
		event.preventDefault();
		var user = $(this).serialize();

		$.post('/signup', user, function (data) {
			console.log(data);
			checkAuth();

		});
	});

	$('#login-form').submit(function (event) {
		event.preventDefault();
		var user = $(this).serialize();

		$.post('/login', user, function (data) {
			checkAuth();
		});
	});

	$('#logout').click(function (event) {
		 event.preventDefault();
		 $.get('/logout', function (data) {
		 	location.reload();
		});
	});
	$('#loginPortal').click(function() {
		if(data.user) {
			if(data.user) {
				window.location.href = "/wall";
			}
		}
	});
});