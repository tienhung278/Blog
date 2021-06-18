using BlogAPI.Contracts;
using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Repositories
{
    public class PostRepository : RepositoryBase<Post>, IPostRepository
    {        
        public PostRepository(RepositoryContext context) : base(context)
        {
            
        }        

        public Post GetPostById(int id)
        {
            return FindByCondition(p => p.Id == id).FirstOrDefault();
        }

        public ICollection<Post> GetPostsAll()
        {
            return FindAll()
                .OrderByDescending(o => o.CreatedAt)
                .ToList();
        }

        public ICollection<string> GetPostTitlesAll()
        {
            return FindAll()
                .OrderBy(p => p.Title)
                .Select(p => p.Title)
                .ToList();
        }
    }
}
