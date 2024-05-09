app.component('cartItem', {
    template: `
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://www.hrsmartuk.com/wp-content/uploads/2023/01/placeholder-vertical.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Player Name</h5>
                        <p class="card-text">card name</p>
                        <p class="card-text">price</p>
                        <p class="card-text">quantity</p>
                        <a href="#" class="btn btn-danger">Remove</a>
                    </div>
                </div>
            </div>
        </div>
    `
})