app.component('AddCardModal', {
    props: {
        authUser: {required: true},
    },

    data() {
        return {
            newCard: new Card(),
        };
    },

    computed: {
        loggedIn() {
            return (this.authUser && this.authUser.uid);
        }
    },

    methods: {
        addCard() {
            var theCard = this.newCard;

            theCard.createdBy = this.authUser;

            //theCard.users.push(this.newCard.uid);
            db.collection('personal-collection')
                .add(theCard)
                .then(function(docRef) {
                    console.log("Document written:", docRef);

                    theCard = new Card();
                })
                .catch(function(error) {
                    console.error('Error adding card', error);
                });
        }
    },

    template: `
        <div @submit.prevent="addCard" class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addModalLabel">Add a Card</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div class="modal-body">
                          <label for="playerName" class="form-label">Sport</label>
                          <select v-model="newCard.sport" class="form-control" name="sport" id="sport">
                            <option value="baseball">Baseball</option>
                            <option value="basketball">Basketball</option>
                            <option value="football">Football</option>
                            <option value="soccer">Soccer</option>
                          </select>
                            <label for="playerName" class="form-label">Player Name</label>
                            <input v-model="newCard.playerName" class="form-control" id="playerName" type="text" aria-label="playerName">
                            <label for="cardName" class="form-label">Card Name</label>
                            <input v-model="newCard.cardName" class="form-control" id="cardName" type="text" aria-label="cardName">
                            <label for="cardNumber" class="form-label">Card Number</label>
                            <input v-model="newCard.cardNumber" class="form-control" id="cardNumber" type="number" aria-label="cardNumber">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input v-model="newCard.quantity" class="form-control" id="quantity" type="number" aria-label="quantity">
                          <label for="price" class="form-label">Price</label>
                          <input v-model="newCard.price" class="form-control" id="price" type="text" aria-label="price">
                            <label for="image" class="form-label">Image Address</label>
                            <input v-model="newCard.imgURL" class="form-control" type="text" id="image" name="image">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-dismiss="modal">Add Card</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
});