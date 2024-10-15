const container = document.getElementById("cards");
const timerDisplay = document.getElementById("time");


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


const dupimage = images.concat(images);
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
    if (matchedPairs === images.length) {
        clearInterval(timer);
        alert(`Parabéns! Você encontrou todos os pares em ${timeElapsed} segundos.`)
        container.innerHTML = '';
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        matchedPairs = 0;
        timeElapsed = 0;

        createCards();
    }
}

function handleCardClick(event) {
    if (lockBoard) return;

    const clickedCard = event.currentTarget;
    if (clickedCard === firstCard) return;

    clickedCard.classList.add('show');

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

