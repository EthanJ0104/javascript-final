app.component('CollectionList', {
    props : {
        collection: {type: String},
        user: {type: Object},
    },

    data() {
      return {
          cards: null,
      }
    },

    created() {
        let query = {};

        query = db.collection('personal-collection')
            .where('createdBy.uid', '==', this.user.uid);

        query.onSnapshot(snapshot => {
            this.cards = [];
            snapshot.forEach(doc => {
                this.cards.push({id: doc.id, ...doc.data()});
            });
        });
    },

    template:`
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <collection-card v-for="card in cards" :key="card.id" :card="card"></collection-card>
        </div>
   `
});