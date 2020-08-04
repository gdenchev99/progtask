namespace ProgressTask.Services
{
    using Newtonsoft.Json;
    using ProgressTask.DTOs;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    public class ProductsService : IProductsService
    {
        /* Simulate a sample DB information retrieval using a JSON file */
        public List<ProductDTO> GetProducts()
        {
            /* Read the contents of the products.json file located in the Data folder. */
            string productsJson = File.ReadAllText(@"Data/products.json");
            /* Using Newtonsoft.Json deserialize the retrieved json and create a list from it. */
            var products = JsonConvert.DeserializeObject<ProductDTO[]>(productsJson).ToList();

            return products;
        }
    }
}
