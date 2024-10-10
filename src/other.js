export class Greeter{
	name = "";
	elm = null;
	constructor(name){
		this.name = name;
		this.elm = document.createElement("h2");
		this.elm.innerHTML = "Ciao, " + this.name + "!";
	}
	greet() {
		document.body.appendChild(this.elm);
	}
}