// Elements to display the deck and each player's hand
const deckDiv = document.querySelector('.deck-card');
const playerHands = {
    1: document.querySelector('.player1-hand'),
    2: document.querySelector('.player2-hand'),
    3: document.querySelector('.player3-hand'),
    4: document.querySelector('.player4-hand')
};

// Example deck of cards (42 cards, two copies of each rank from 9 to Ace)
const deck = [
    '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥',
    '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠',
    '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦',
    '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣',
    '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥',
    '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠',
    '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦',
    '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣'
];

// Shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Deal 12 cards to each player, 3 cards at a time
function dealCards() {
    shuffleDeck(deck);

    // Clear existing hands
    Object.values(playerHands).forEach(hand => hand.innerHTML = '');

    // Distribute cards in rounds, 3 cards at a time
    for (let i = 0; i < 12; i += 3) {
        Object.keys(playerHands).forEach(player => {
            const hand = playerHands[player];
            const cardsToDeal = deck.splice(0, 3);
            cardsToDeal.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                cardDiv.textContent = card;
                hand.appendChild(cardDiv);
            });
        });
    }
}

// Event listener to deal cards when the deck is clicked
deckDiv.addEventListener('click', dealCards);
