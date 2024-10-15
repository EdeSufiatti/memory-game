const container = document.getElementById("cards");

const images = [
    'url1.jpg', 'url2.jpg', 'url3.jpg', 'url4.jpg',
    'url1.jpg', 'url2.jpg', 'url3.jpg', 'url4.jpg'
];

for (let i = 0; i < 16; i++) {
    const card = document.createElement('button');
    card.className = 'cardStyle';


    const img = document.createElement('img');
    img.src = images[i];
    img.alt = 'Imagem do Jogo';
    img.style.width = '100%';
    img.style.height = 'auto';

    card.appendChild(img);
    container.appendChild(card);
}
