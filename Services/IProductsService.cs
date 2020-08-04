namespace ProgressTask.Services
{
    using ProgressTask.DTOs;
    using System.Collections.Generic;

    public interface IProductsService
    {
        /* A method used to retrieve all the products from the products.json file. */
        List<ProductDTO> GetProducts();
    }
}
