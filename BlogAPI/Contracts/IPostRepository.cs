using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Contracts
{
    public interface IPostRepository : IRepositoryBase<Post>
    {
        ICollection<Post> GetPostsAll();
        Post GetPostById(int id);
        ICollection<string> GetPostTitlesAll();
    }
}
