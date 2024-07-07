using Microsoft.AspNetCore.Mvc;

namespace BudgetSimplified.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public IActionResult Index()
        {
            return Json(new { message = "Welcome to BudgetSimplified API." });
        }
    }
}
