//creo la lista di immagini e scritte  



const images = [
    {
        image: "01.webp",
        title: "Marvel s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: "02.webp",
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: "03.webp",
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "04.webp",
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: "05.webp",
        title: "Marvel's Avengers",
        text: 'Marvels Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//creo un ciclo 
images.forEach((element, index, arrayS) => {
    immagine = `<img class="img" src="${element.image}"></img>`;
	document.getElementById("container").innerHTML += immagine;
});
images.forEach((element, index, arrayS) => {
    frase = `<img class="img" src="${element.title}"></img>`;
	document.getElementById("container").innerHTML += frase;
});


const immagini = document.getElementsByClassName("img");
let imgPrima = 0;
const imgUltima = images.length - 1;
immagini[imgPrima].classList.add("visibile");


document.getElementById("btnDx").addEventListener("click", function () {

	if (imgPrima < imgUltima) {
		//rimuovo la visibilità sull'immagine attuale
		immagini[imgPrima].classList.remove("visibile");

		//aggiorno il contatore dell'immagine attuale
		imgPrima++;

		//aggiungo la visibilità sulla prossima immagine
		immagini[imgPrima].classList.add("visibile");
	
    }
    

});

document.getElementById("btnSx").addEventListener("click", function () {
	if (imgPrima > 0) {
		//rimuovo la visibilità sull'immagine attuale
		immagini[imgPrima].classList.remove("visibile");

		//aggiorno il contatore dell'immagine attuale
		imgPrima--;

		//aggiungo la visibilità sulla prossima immagine
		immagini[imgPrima].classList.add("visibile");
	}
});




/*let percorso = [
    "consegna/img/01.webp",
    "consegna/img/02.webp",
    "consegna/img/03.webp",
    "consegna/img/04.webp",
    "consegna/img/05.webp"
]

for (let i = 0; i < percorso.length; i++) {

	immagine = `<img class="img" src="${percorso[i]}"></img>`;
	document.getElementById("container").innerHTML += immagine;
}



const immagini = document.getElementsByClassName("img");
let imgPrima = 0;
const imgUltima = percorso.length - 1;
immagini[imgPrima].classList.add("visibile");




document.getElementById("btnDx").addEventListener("click", function () {

	if (imgPrima < imgUltima) {
		//rimuovo la visibilità sull'immagine attuale
		immagini[imgPrima].classList.remove("visibile");

		//aggiorno il contatore dell'immagine attuale
		imgPrima++;

		//aggiungo la visibilità sulla prossima immagine
		immagini[imgPrima].classList.add("visibile");
	
    }
    

});

document.getElementById("btnSx").addEventListener("click", function () {
	if (imgPrima > 0) {
		//rimuovo la visibilità sull'immagine attuale
		immagini[imgPrima].classList.remove("visibile");

		//aggiorno il contatore dell'immagine attuale
		imgPrima--;

		//aggiungo la visibilità sulla prossima immagine
		immagini[imgPrima].classList.add("visibile");
	}
});*/
