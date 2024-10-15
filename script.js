const container = document.getElementById("cards");

const images = [
    './assets/0.png', './assets/1.png', './assets/2.png', './assets/3.png',
    './assets/4.png', './assets/5.png', './assets/6.png', './assets/7.png'
];

const dupimage = images.concat(images)

<<<<<<< HEAD

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


embaralhar(dupimage);



=======
>>>>>>> 73519364910a21cded65007579ddffc0a0266c10
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
