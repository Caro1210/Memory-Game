//Création des cartes

function createCard(cardUrl){
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardUrl;

    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = cardUrl;

    card.appendChild(cardContent);

    return card;
}

const gameBoard = document.getElementById('game-board');
const newCard = createCard('https://picsum.photos/id/243/100/100');
gameBoard.appendChild(newCard);