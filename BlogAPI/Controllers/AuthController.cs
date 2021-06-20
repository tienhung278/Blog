using BlogAPI.Contracts;
using BlogAPI.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BlogAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJwtHandler _jwtHandler;

        public AuthController(IJwtHandler jwtHandler)
        {
            _jwtHandler = jwtHandler;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User userForAuthentication)
        {
            var users = new List<User>
            {
                new User { Email = "user1@blogapi.com", Password = "user1" },
                new User { Email = "admin@blogapi.com", Password = "admin" }
            };

            var isAuth = users.Any(user => user.Email == userForAuthentication.Email && user.Password == userForAuthentication.Password);
            if (!isAuth)
                return Unauthorized();

            var signingCredentials = _jwtHandler.GetSigningCredentials();
            var claims = _jwtHandler.GetClaims(userForAuthentication);
            var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            return Ok(new AuthResponse { IsAuthSuccessful = true, Token = token });
        }
    }
}
