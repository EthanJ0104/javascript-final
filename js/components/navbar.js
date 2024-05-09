app.component('navbar', {
    props: {
        name: {type: String},
        authUser: {required: true},
    },

    methods: {
        login() {
            const provider = new firebase.auth.GoogleAuthProvider();

            auth.signInWithPopup(provider)
              .then(() => {

              })
              .catch(error => {
                  console.error('Google sign in failed', error);
              })
        },

        logout() {
          auth.signOut();
        }
    },

    template: `
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="margin-bottom: 100px;">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><b>CARD VAULT</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="collection.html">Collection</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="basketball.html">Basketball</a></li>
                                <li><a class="dropdown-item" href="baseball.html">Baseball</a></li>
                                <li><a class="dropdown-item" href="football.html">Football</a></li>
                                <li><a class="dropdown-item" href="soccer.html">Soccer</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="cart.html">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a v-if="authUser" class="nav-link active" aria-current="page" href="inventory.html">Add Inventory</a>
                        </li>
                    </ul>
                    <div v-if="authUser"><img :src="authUser.photoURL" class="avatar"></img></div>
                    <button v-if="name" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#addModal" style="margin-right: 4px;">Add Card</button>
                    <button v-if="authUser" @click.prevent="logout" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal">Logout</button>
                    <button v-else @click.prevent="login" class="btn btn-outline-success">Login</button>
                </div>
            </div>
        </nav>
    `
});