var password = "kompiuterasai"

fuction passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Wrong Password, Try again.');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct Password. Click OK to enter');
}
}
