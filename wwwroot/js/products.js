var products = products || {};

// Creating a function that we'll call when we want to initialize our script.
products.init = function () {
    products.getProducts();
}

// Retrieve products from the API.
products.getProducts = function () {
    $.ajax({
        url: 'api/Products/All',
        dataType: 'json',
        success: function (data) {
            // If the API request was successful, pass the received JSON response over to the function responsible for displaying the products.
            products.processProducts(data);
        }
    })
};

// Display the products with the help of KendoUI Templates.
products.processProducts = function (data) {
    let template = null;

    for (const product of data) {
        if (product.unitsInStock > 0) {
            // This template will be used when the product is in stock.
            template = kendo.template(`
                <div class='card col-lg-3'>
                    <span class="badge badge-success">In stock</span>
                    <img src="https://#= pictureUrl #" style="width:100%; height:250px">
                    <h6>#= productName #</h6>
                    <p class="price">$#= unitPrice #.00</p>
                    <small>Date of delivery: #= date #</small>
                    <small>In stock: #= unitsInStock #</small>
                    <p><button>Add to Cart</button></p>
                </div>`)
        } else {
            // This template will be used when the product is NOT in stock.
            template = kendo.template(`
                <div class='card col-lg-3'>
                    <span class="badge badge-danger">Out of stock</span>
                    <img src="https://#= pictureUrl #" style="width:100%; height:250px">
                    <h6>#= productName #</h6>
                    <p class="price">$#= unitPrice #.00</p>
                    <small>Date of delivery: #= date #</small>
                    <small>In stock: #= unitsInStock #</small>
                    <p><button>Add to Cart</button></p>
                </div>`)
        }
        // Create the current product from the iteration using one of the two templates.
        let result = template(product);
        // Finally append the product html to the div with id "#products", in index.html.
        $("#products").append(result);
    }
}

// Lastly call the initiliazing function, once the DOM has loaded.
$(document).ready(function () {
    products.init();
});