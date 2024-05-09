app.component('cartList', {
    template: `
        <div class="card" style="width: 60%; margin-left: 20%; margin-right: 20%;">
            <div class="card-body">
                <div class="row row-cols-1 row-cols-md-1 g-2">
                    <div class="col">
                        <cart-item></cart-item>
                    </div>
                    <div class="col">
                        <cart-item></cart-item>
                    </div>
                    <div class="col">
                        <cart-item></cart-item>
                    </div>
                </div>
                <a href="#" class="btn btn-primary">Checkout</a>
            </div>
        </div>   
    `
})