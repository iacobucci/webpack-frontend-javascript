import axios from 'axios';


export function request() {
	let elm = document.createElement("div");

	axios.get('test.txt')
	.then(response => {
		elm.innerText = response.data;
		document.body.appendChild(elm)
	})
	.catch(error => {
		console.error('Errore nella richiesta:', error);
	});

}

