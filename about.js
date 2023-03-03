console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been Submitted Succesfully!")
}


let form = document.querySelector('#contact');

let rubberDuck = document.querySelector("#rubber-duck");

form.addEventListener('submit', handleSubmit);

rubberDuck.addEventListener('mouseover', () => {alert("That shirt really brings out your Eyes!")});