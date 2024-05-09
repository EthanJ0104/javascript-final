const router = new VueRouter({
    routes: [
        {path: '/', component: HomePage},
        {name: 'home', path: '/home', component: HomePage},
        {name: 'baseball', path: '/baseball', component: BaseballPage},
        {name: 'basketball', path: '/basketball', component: BasketballPage},
        {name: 'cart', path: '/cart', component: CartPage},
        {name: 'collection', path: '/collection', component: CollectionPage},
        {name: 'football', path: '/football', component: FootballPage},
        {name: 'inventory', path: '/inventory', component: InventoryPage},
        {name: 'soccer', path: '/soccer', component: SoccerPage},
    ]
});