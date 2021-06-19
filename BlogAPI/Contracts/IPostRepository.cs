using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Contracts
{
    public interface IPostRepository : IRepositoryBase<Post>
    {
        ICollection<Post> GetAllPosts(QueryParameter parameter);
        Post GetPostById(int id);
        ICollection<Title> GetAllTitles(QueryParameter parameter);
    }
}
