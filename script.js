let nom = "";

function demanderNom() {
    nom = prompt("Quel est ton nom ?");
}

const cards = [
    'https://picsum.photos/id/137/100/100', 
    'https://picsum.photos/id/210/100/100',
    'https://picsum.photos/id/213/100/100',
    'https://picsum.photos/id/230/100/100',
    'https://picsum.photos/id/235/100/100',
    'https://picsum.photos/id/222/100/100',
    'https://picsum.photos/id/220/100/100',
    'https://picsum.photos/id/206/100/100'
];

const gameBoard = document.getElementById('game-board');
let selectedCards = [];

function createCard(cardUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardUrl;

    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = cardUrl;
    card.appendChild(cardContent);

    card.addEventListener('click', onCardClick);
    return card;
}

function duplicateArray(arraySimple) {
    return [...arraySimple, ...arraySimple];
}

function shuffleArray(arrayToShuffle) {
    return arrayToShuffle.sort(() => 0.5 - Math.random());
}

function onCardClick(e) {
    const card = e.target.parentElement;
    card.classList.add('flip');

    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(() => {
            if (selectedCards[0].dataset.value === selectedCards[1].dataset.value) {
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                selectedCards[0].removeEventListener('click', onCardClick);
                selectedCards[1].removeEventListener('click', onCardClick);

                const allCardsNotMatched = document.querySelectorAll('.card:not(.matched)');
                if (allCardsNotMatched.length === 0) {
                    alert("Bravo " + nom + " ! Tu as Gagné !");
                }
            } else {
                selectedCards[0].classList.remove("flip");
                selectedCards[1].classList.remove("flip");
            }
            selectedCards = [];
        }, 700);
    }
}

function initGame() {
    gameBoard.innerHTML = "";
    selectedCards = [];

    let allCards = duplicateArray(cards);
    allCards = shuffleArray(allCards);

    allCards.forEach(cardUrl => {
        const cardHtml = createCard(cardUrl);
        gameBoard.appendChild(cardHtml);
    });
}

// Restart game
const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', () => {
    demanderNom();
    initGame();
});

// Initialisation
demanderNom();
initGame();
