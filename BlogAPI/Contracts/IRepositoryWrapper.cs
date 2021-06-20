using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Contracts
{
    public interface IRepositoryWrapper
    {
        ICollection<Post> GetPosts(QueryParameter parameter);
        ICollection<Title> GetTitles(QueryParameter parameter);
        Post GetPost(int id);
        PageInfo<Post> GetPageInfo(QueryParameter parameter);
        Task CreatePostAsync(Post post, string userId);
        Task UpdatePostAsync(Post post, string userId);
        Task DeletePostAsync(Post post, string userId);
        Task<int> SaveAsync();
    }
}
