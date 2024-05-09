const CollectionPage = app.component('CollectionPage', {
    template: `
        <navbar name="collection"></navbar>
        <div class="container">
            <h1 class="header" style="text-align: center;">YOUR COLLECTION</h1>
            <input class="form-control form-control-lg me-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 25%; margin-bottom: 20px; width: 50%;">
            <card-list></card-list>
        </div>
        <add-card-modal></add-card-modal>
    `
});