using Fragrance_Shop.Data;
using Fragrance_Shop.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fragrance_Shop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {

        private readonly FragranceShopDbContext _context;

        public ProductController(FragranceShopDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProduscts()
        {
            if (_context.Products == null)
                return NotFound();
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> GetSingleProduct(int id)
        {
            if (_context.Products == null)
                return NotFound();
            Product? products = await _context.Products.FirstOrDefaultAsync(prod => prod.id == id);

            if (products == null)
                return NotFound();
            return Ok(products);
        }

        [HttpGet("{productsPerPage}/{page}")]
        public async Task<ActionResult<List<Product>>> GetProduscts(int page, int productsPerPage)
        {
            if(_context.Products == null) 
                return NotFound();

            var pageResults = productsPerPage;
            var pageCount = Math.Ceiling(_context.Products.Count() / (float)pageResults);
            var products = await _context.Products
                .Skip((page - 1) * (int)pageResults)
                .Take((int)pageResults)
                .ToListAsync();

            var response = new ProductResponse { Products = products, CurrentPage = page, Pages = (int)pageCount };
            return Ok(response);
        }
    }
}
