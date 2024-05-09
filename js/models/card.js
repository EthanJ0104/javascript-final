function Card() {
    return {
        id: Math.floor(Math.random() * 10e15),
        sport: '',
        playerName: '',
        cardName: '',
        cardNumber: '',
        imgURL: '',
        price: '',
        quantity: 0,
    }
};