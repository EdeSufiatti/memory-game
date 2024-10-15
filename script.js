const container = document.getElementById("cards");

const images = [
    './assets/cardeal.jpg', './assets/macaco.jpg', './assets/papagaio.jpg', './assets/arara.jpg',
    './assets/capivaras.jpg', './assets/jaguar.jpg', './assets/gatoselva.jpg', './assets/tucano.jpg'
];

const dupimage = images.concat(images)


function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


embaralhar(dupimage);



for (let i = 0; i < 16; i++) {
    const card = document.createElement('button');
    card.className = 'cardStyle';


    const img = document.createElement('img');
    img.src = dupimage[i];

    img.style.width = '100%';
    img.style.height = 'auto';

    card.appendChild(img);
    container.appendChild(card);
}
