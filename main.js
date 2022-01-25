let date = new Date();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = dayNames[date.getDay()];
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today = month + "/" + day + "/" + year;
let startDate = new Date("06/19/2021");
let endDate = new Date(today);
let days = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
fetch ("https://www.powerlanguage.co.uk/wordle/main.e65ce0a5.js")
	.then(x => x.text())
	.then(y => {
		let wordArray = y.slice(y.indexOf('var La='), y.indexOf(',Ta='))
			.replace('var La=', '')
			.replace('[', '')
			.replace(']', '')
			.replace(/"/g, '')
			.split(',');
		alert('The word for today (' + dayName + ' ' + day + '/' + month + '/' + year + ') is ' + wordArray[days].toUpperCase());
	});