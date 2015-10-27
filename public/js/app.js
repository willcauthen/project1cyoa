var $email;
var $password;
var $pass2;
var $user;

$(document).ready(function () {
	console.log('JS is hooked up');

	////////////
	//Tutorial//
	////////////
	$('#intro1').hide();
	$('#intro2').hide();
	$('#intro3').hide();
	$('#intro4').hide();
	$('#intro5').hide();
	$('#kill1').hide();
	$('#intro6').hide();
	$('#intro7').hide();
	$('#toIntro').click(function () {
		$('#intro').hide();
		$('#intro1').show();

	});
	$('#toIntro2').click(function () {
		$('#intro1').hide();
		$('#intro2').show();
	});

	$('.toIntro3').click(function () {
		$('#intro2').hide();
		$('#intro3').show();
	});

	//this function  will eventually send a given email address to the database, to start building a user accoutn
	$('form#form1').submit(function (event) {
		event.preventDefault();
		$email = document.getElementById("yremail").value;
			console.log($email);
			$('#intro3').hide();
			$('#intro4').show();
	});

	$('form#form2').submit(function (event) {
		event.preventDefault();
		$password = document.getElementById("pass1").value;
		console.log($password);
		$('#intro4').hide();
		$('#intro5').show();
	});
	$('form#form3').submit(function (event) {
		event.preventDefault();
		var $pass2 = document.getElementById("pass2").value;
		console.log($pass2);
		if( $password === $pass2 ) {
			$('#intro5').hide();
			$('#intro6').show();
		} else {
			$('#intro5').hide();
			$('#kill1').show();
			console.log('you done fucked up');
		}
	});
	$('form#form4').submit(function (event) {
		event.preventDefault();
		var $user = document.getElementById('username').value;
		console.log($user);
		$('#intro6').hide();
		$('#intro7').show();
	});



	$('.killedOff').click(function () {
		location.reload();
	});
	////////////////////
	//server.stuff
	$('form#userCreate').submit(function (event) {
		event.preventDefault();
		var user = $(this).serialize();
		console.log(user);
		$.post('/users', user, function (data) {
			debugger
			$('.users-list').append("<li id='" + data.id + "'>" + data.body + "</li>");
			$('#userCreate')[0].reset();
			//location.reload();
		});
	});

	$('#remove-user').click(function (event) {
		event.preventDefault();
		var userId = $(this).data(':id');
		console.log(userId);
		debugger
		$.ajax ({
			url: "/users/" + userId,
			type: "DELETE",
			success: function (result) {
				$(this).parent().remove();
			}
		});
	});
});


	


var wqa = {};
var API_URL = "http://en.wikiquote.org/w/api.php";



