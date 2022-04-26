using Microsoft.AspNetCore.Mvc;
using JAConsoleBL;
using Models;
using Microsoft.Extensions.Caching.Memory;

namespace WebAPI.Controllers;

// [ApiController]
// [Route("api/[Controller]")]
// public class UserStatisticsController : ControllerBase
// {
//     private readonly IStoreBL _bl;
//     private IMemoryCache _cache;
//     public UserStatisticsController(IStoreBL bl, IMemoryCache cache)
//     {
//         _bl = bl;
//         _cache = cache;
//     }

//     // GET api/<UserStatisticsController>/
//     [HttpGet("{id}")]
//     public async Task<ActionResult<UserStatistics>> GetAsync(int id)
//     {
//         UserStatistics? gotUserStats = await _bl.getUserStatsAsync(id);
//         if (gotUserStats != null)
//         {
//             return Ok(gotUserStats);
//         }
//         return NoContent();
//     }

    
// }