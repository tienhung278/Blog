using BlogAPI.Contracts;
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

        public PostsController(IRepositoryWrapper repository)
        {
            this.repository = repository;
        }

        // GET: api/<PostsController>/titles
        [HttpGet("/titles")]
        public IActionResult GetPostTitles()
        {
            return Ok(repository.GetPostTitles());
        }

        // GET: api/<PostsController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(repository.GetPosts());
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
            return Ok(post);
        }

        // POST api/<PostsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            string userId = HttpContext.User.Identity.Name;
            await repository.CreatePostAsync(post, userId);
            await repository.SaveAsync();
            return CreatedAtRoute(new { id = post.Id }, post);
        }

        // PUT api/<PostsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Post post)
        {
            var p = repository.GetPost(id);
            if (p == null)
            {
                return NotFound();
            } else if (!ModelState.IsValid)
            {
                return BadRequest();
            }
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
