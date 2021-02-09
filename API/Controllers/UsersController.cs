using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Application.DTOs;
using Application.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IDatingService datingService;
        private readonly IMapper mapper;

        public UsersController(IDatingService datingService, IMapper mapper)
        {
            this.datingService = datingService;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await datingService.GetUsers();
            var usersToReturn = mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await datingService.GetUser(id);
            var usersToReturn = mapper.Map<UserForDetailedDto>(user);
            return Ok(usersToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForEditDto userForEditDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (id != int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)))
                return Unauthorized();
            var userFromRepo = await datingService.GetUser(id);
            mapper.Map(userForEditDto, userFromRepo);

            if (await datingService.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");
        }
    }
}