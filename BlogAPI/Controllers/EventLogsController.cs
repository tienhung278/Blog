using BlogAPI.Contracts;
using BlogAPI.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BlogAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class EventLogsController : ControllerBase
    {
        private readonly IRepositoryWrapper repository;

        public EventLogsController(IRepositoryWrapper repository)
        {
            this.repository = repository;
        }

        // GET: api/<EventLogsController>
        [HttpGet]
        public IActionResult Get([FromQuery] QueryParameter parameter)
        {
            return Ok(repository.GetEventLogs(parameter));
        }      
    }
}
