using Microsoft.AspNetCore.Mvc;
using TriviaBL;
using Models;
using Microsoft.Extensions.Caching.Memory;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IJABL _bl;

        public ItemController(IJABL bl)
        {
            _bl = bl;

        
        }
        [HttpGet("GetUsers")]
        public async Task<List<users>> GetAllUsersAsync()
        {
            return await _bl.GetAllUsersAsync(); 
        }

        [HttpGet("SearchUser/{username}")]
        public async Task<List<users>> SearchUser(string username)
        {
            return await _bl.SearchUsers(username);
        }

        [HttpPost("CreateNewUser/{username}/{password}")]
        public async Task CreateNewUserAsync(string username, string password)
        {
            await _bl.CreateNewUserAsync(username, password);
        }

        [HttpGet("DailyQuestion")]
        public async Task<List<DailyQuestion>> GetDailyQuestionAsync()
        {
            return await _bl.GetDailyQuestionAsync();
        }


    }

    
}
