const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data() {
        return {
            newCard: new Card(),
            authUser: null,
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {

    },

    // computed: values that are updated and cached if dependencies change
    computed: {

    },

    //mounted:  called after the instance has been mounted,
    created() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.authUser = new User(user);
                console.log('Signed in as: ', user);
            }
            else {
                this.authUser = null;
                console.log('Not signed in.')
            }
        })
    },

    // watch:   calls the function if the value changes
    watch: {

    }
});