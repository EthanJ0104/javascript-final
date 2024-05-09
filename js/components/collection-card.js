app.component('CollectionCard', {
   props: {
      card: {type: Object, required: true},
   },

   methods: {
      deleteCard() {
         console.log(this.card.id);
         db.collection('personal-collection').doc(this.card.id).delete();
      }
   },

   template: `
        <div class="col">
           <div class="card">
              <img :src="card.imgURL" class="card-img-top" alt="...">
              <div class="card-body">
                 <h5 class="card-title">{{ card.playerName }}</h5>
                 <p class="card-text"><b>Card Name:</b> {{ card.cardName }}</p>
                 <p class="card-text"><b>Price:</b> {{ card.price }}</p>
                 <button href="#" class="btn btn-primary">Edit</button>
                 <button href="#" @click="deleteCard" class="btn btn-danger">Remove</button>
              </div>
           </div>
        </div>
   `
});