console.log('Širina: ' + window.innerWidth);
console.log('Visina: ' + window.innerHeight);

console.log(window.location.hostname);
//windows.location vraća url na kojem se trenutno nalazimo
window.location = 'https://www.google.com';

window.confirm('We use cookies on this website. Do you agree to enter?');

window.setTimeout(function () {
	console.log('I am late.');
}, 2000);

window.alert('Hello! I am an alert box!');