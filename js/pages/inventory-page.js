const InventoryPage = app.component('InventoryPage', {
    template: `
        <navbar></navbar>
        <div class="container">
            <h1 class="header" style="text-align: center;">ALL INVENTORY</h1>
            <input class="form-control form-control-lg me-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 25%; margin-bottom: 20px; width: 50%;">
            <card-list></card-list>
        </div>
    `
});