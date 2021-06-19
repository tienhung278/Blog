using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Contracts
{
    public interface IRepositoryWrapper
    {
        ICollection<Post> GetPosts();
        ICollection<Title> GetTitles();
        Post GetPost(int id);
        Task CreatePostAsync(Post post, string userId);
        Task UpdatePostAsync(Post post, string userId);
        Task DeletePostAsync(Post post, string userId);
        Task<int> SaveAsync();
    }
}
