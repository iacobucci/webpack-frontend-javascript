# Webpack frontend typescript

Questo è un boilerplate per app frontend che usa javascript vanilla e gli import ES6+, al posto dell'inclusione degli script all'interno di tag html.

**All'inizio:**

```
npm install
```

## Dev server

```
npm run dev
```

Usa il devserver di webpack, su `localhost:3000`, e permette di ricaricare la pagina automaticamente al salvataggio di cambiamenti nei files


## Output per il deploy su un server statico

```
npm run pack
```

genera il file `bundle.js` nella directory `dist` che è quella da caricare nel server di files statici.

## Aggiungere librerie

```
npm install axios
```

e provare ad aggiungere il file `requests.js`

```js
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
```

e chiamare la funzione `request` dal "main"