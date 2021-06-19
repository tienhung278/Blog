using AutoMapper;
using BlogAPI.Contracts;
using BlogAPI.DTOs;
using BlogAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IRepositoryWrapper repository;
        private readonly IMapper mapper;

        public PostsController(IRepositoryWrapper repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        // GET: api/<PostsController>/titles
        [HttpGet("titles")]
        public IActionResult GetPostTitles([FromQuery] QueryParameter parameter)
        {
            return Ok(repository.GetTitles(parameter));
        }

        // GET: api/<PostsController>
        [HttpGet]
        public IActionResult Get([FromQuery] QueryParameter parameter)
        {
            return Ok(mapper.Map<ICollection<PostRead>>(repository.GetPosts(parameter)));
        }

        // GET api/<PostsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = repository.GetPost(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<PostRead>(post));
        }

        // POST api/<PostsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PostWrite postWrite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var post = mapper.Map<Post>(postWrite);
            post.CreatedAt = DateTime.Now;
            string userId = HttpContext.User.Identity.Name;
            await repository.CreatePostAsync(post, userId);
            await repository.SaveAsync();
            return CreatedAtRoute(new { id = post.Id }, mapper.Map<PostRead>(post));
        }

        // PUT api/<PostsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] PostWrite postWrite)
        {
            var p = repository.GetPost(id);
            if (p == null)
            {
                return NotFound();
            } else if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var post = mapper.Map<Post>(postWrite);
            post.Id = id;
            string userId = HttpContext.User.Identity.Name;
            await repository.UpdatePostAsync(post, userId);
            await repository.SaveAsync();
            return NoContent();
        }

        // DELETE api/<PostsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var post = repository.GetPost(id);
            if (post == null)
            {
                return NotFound();
            }
            string userId = HttpContext.User.Identity.Name;
            await repository.DeletePostAsync(post, userId);
            await repository.SaveAsync();
            return NoContent();
        }
    }
}
