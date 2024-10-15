const container = document.getElementById("cards");

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const card = document.createElement('button');
        card.className = 'cardStyle';
        container.appendChild(card);
    }
}


