const HomePage = app.component('HomePage', {
    template: `
        <navbar></navbar>
        <div class="container">
            <h1 class="header" style="text-align: center;">UPGRADE YOUR COLLECTION TODAY</h1>
            <input class="form-control form-control-lg me-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 25%; margin-bottom: 20px; width: 50%;">
            <card-list></card-list>
        </div>
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="loginModalLabel">Login</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <label for="username" class="form-label">Username</label>
                            <input class="form-control" id="username" type="text" aria-label="username">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlock">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
})