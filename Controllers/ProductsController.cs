namespace ProgressTask.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using ProgressTask.Services;

    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService service;

        /* Inject the IProductsService using DI, so we can access the GetProducts method. */
        public ProductsController(IProductsService service)
        {
            this.service = service;
        }

        [HttpGet("All")]
        public IActionResult GetProducts()
        {
            /* Call the GetProducts method in order to retrieve all products. */
            var products = this.service.GetProducts();

            return Ok(products);
        }
    }
}
