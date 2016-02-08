
console.log("Sanity Check: JS is working!");

var code1;
var code2;
var code3;
var res;

$(document).ready(function(){
  // code in here


  // catch the input in a variable
	var $inputbox = $('#inputbox');
	$('#tag').submit(function(event){
		event.preventDefault();
		// set variable to catch which radio-button selected
		var $paint = $('input[type=radio]:checked');
		//uses both aforementioned variables to add to the graffiti wall.
		$('ul').prepend('</br><li class="ui-state-default ' + $paint.val() +  '">' + $inputbox.val() + '</li>');
	});
	//an alert to explain the value of colors. mainly for RP
	$('#help').click(function(){
			alert("Colors are important, here. Red signifies a request. Blue indicates a response to a request. Yellow represents new updayand developments. And most importantly, white symbolizes a call to action, or plan set to be initialized.");
	});
	$('#login').submit(function(event){
		event.preventDefault();
		//this is an unfunny joke
		alert("WHAT THE FUCK ARE YOU THINKING? THE WHOLE POINT OF THIS OVERLY COMPLICATED PROCESS IS ANONYMITY!");
	});
//the log of codewords and their meanings, respectively
code = {action:[{ 'BAD': 'RESCUE'}, {'GOOD': 'ELIMINATE'}, {'FUCK': 'MEETING AT'}, {'SEE': 'SABOTAGE'}, {'ASSHOLE': 'CASE'}, {'LOUD': 'BURGLARY'}, {'DANCE': 'DISTRACT'}],
		location:[{'WOLF': 'DETENTION CENTER'}, {'POLICE': 'SAFEHOUSE 1'}, {'KARATE': 'SAFEHOUSE 2'}, {'TIME': 'SAFEHOUSE 3'}, {'ANIMAL': 'SAFEHOUSE 4'}, {'DAMN': 'WEAPON CACHE'}, {'NOW': 'THIS WALL'}, {'DESPERADO': 'CITY HALL'}, {'FUNKY': 'SUBWAY'}, {'KANYE': 'STADIUM'}],
		day:[{'SONNYBOI': 'SUNDAY'}, {'JUNNIPER': 'MONDAY'}, {'MARRRTY': 'TUESDAY'}, {'MERCUTIO': 'WEDNESDAY'}, {'GIOVANNI': 'THURSDAY'}, {'THEVENETIAN': 'FRIDAY'}, {'KINGKRON': 'SATURDAY'}, {'TINY': 'ASAP'}]
	}; 
//function for decryption. as is, it must be case sensitive and words must be in quotes and in corresponding sequence. fix coming soon.
	$('#codify').click(function () {
		event.preventDefault();
		var $str = $("#decoderRing").val();
		console.log($str);
		var str = $str.split(" ");
		debugger
		var a = str[0];
		var b = str[1];
		var c = str[2];
		var $res = decode( a, b, c);

		res = [code1, code2, code3];
		res = res.join(" ");
		$('#encoderRing').val(res);
	});

});

function decode( word1, word2, word3 ) {
	for (var x = 0; x < code.action.length; x++) {
		if(code.action[x][word1]){
			code1 = (code.action[x][word1]);
			 
		}
	}
	for (var y = 0; y < code.location.length; y++) {
		if(code.location[y][word2]){
			code2 = (code.location[y][word2]);
		}
	}
	for (var z = 0; z < code.day.length; z++) {
		if(code.day[z][word3]){
			code3 = (code.day[z][word3]);
		}
	}
}
