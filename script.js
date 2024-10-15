const container = document.getElementById("cards");

const images = [
    './assets/0.png', './assets/1.png', './assets/2.png', './assets/3.png',
    './assets/4.png', './assets/5.png', './assets/6.png', './assets/7.png'
];

for (let i = 0; i < 16; i++) {
    const card = document.createElement('button');
    card.className = 'cardStyle';


    const img = document.createElement('img');
    img.src = images[i];

    img.style.width = '100%';
    img.style.height = 'auto';

    card.appendChild(img);
    container.appendChild(card);
}
