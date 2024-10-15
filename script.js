const container = document.getElementById("cards");
const timerDisplay = document.getElementById("time");

// Utilize exatamente 8 imagens diferentes
const images = [
    './assets/cardeal.jpg',
    './assets/macaco.jpg',
    './assets/papagaio.jpg',
    './assets/arara.jpg',
    './assets/capivaras.jpg',
    './assets/jaguar.jpg',
    './assets/gatos.jpg',
    './assets/tucano.jpg'
];

// Duplicar as imagens para criar 16 cartas
const dupimage = images.concat(images); // Agora temos exatamente 16 cartas
let firstCard, secondCard;
let lockBoard = false;
let matchedPairs = 0;
let timer;
let timeElapsed = 0;

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        timerDisplay.textContent = timeElapsed;
    }, 1000);
}

function checkEndGame() {
    if (matchedPairs === images.length) { // 8 imagens = 8 pares
        clearInterval(timer);
        alert(`Parabéns! Você encontrou todos os pares em ${timeElapsed} segundos.`);
    }
}

function handleCardClick(event) {
    if (lockBoard) return;

    const clickedCard = event.currentTarget;
    if (clickedCard === firstCard) return;

    clickedCard.classList.add('show'); // Mostra a imagem

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;

    lockBoard = true;

    setTimeout(() => {
        const firstImage = firstCard.querySelector('img').src;
        const secondImage = secondCard.querySelector('img').src;

        if (firstImage === secondImage) {
            matchedPairs++;
            checkEndGame();
            resetBoard();
        } else {
            firstCard.classList.remove('show');
            secondCard.classList.remove('show');
            resetBoard();
        }
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function createCards() {
    embaralhar(dupimage);

    for (let i = 0; i < dupimage.length; i++) {
        const card = document.createElement('div');
        card.className = 'cardStyle';
        card.addEventListener('click', handleCardClick);

        const img = document.createElement('img');
        img.src = dupimage[i];

        card.appendChild(img);
        container.appendChild(card);
    }
    startTimer();
}

createCards();
