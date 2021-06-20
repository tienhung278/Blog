using BlogAPI.Contracts;
using BlogAPI.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly RepositoryContext context;
        private readonly IPostRepository postRepository;
        private readonly IEventLogRepository eventLogRepository;

        public RepositoryWrapper(RepositoryContext context, IPostRepository postRepository, IEventLogRepository eventLogRepository)
        {
            this.context = context;
            this.postRepository = postRepository;
            this.eventLogRepository = eventLogRepository;
        }
        public async Task CreatePostAsync(Post post, string userId)
        {
            await postRepository.AddAsync(post);
            await AddEventLogAsync(EventType.Created, userId, post);
        }

        public async Task DeletePostAsync(Post post, string userId)
        {
            postRepository.Delete(post);
            await AddEventLogAsync(EventType.Deleted, userId, post);
        }

        public ICollection<EventLog> GetEventLogs(QueryParameter parameter)
        {
            return eventLogRepository.GetAllEventLogs(parameter);
        }

        public PageInfo<Post> GetPageInfo(QueryParameter parameter)
        {
            return postRepository.GetPageInfo(parameter);
        }

        public Post GetPost(int id)
        {
            return postRepository.GetPostById(id);
        }

        public ICollection<Post> GetPosts(QueryParameter parameter)
        {
            return postRepository.GetAllPosts(parameter);
        }

        public ICollection<Title> GetTitles(QueryParameter parameter)
        {
            return postRepository.GetAllTitles(parameter);
        }

        public async Task<int> SaveAsync()
        {
            int result = await context.SaveChangesAsync();
            return result;
        }

        public async Task UpdatePostAsync(Post post, string userId)
        {
            postRepository.Update(post);
            await AddEventLogAsync(EventType.Updated, userId, post);
        }

        private async Task AddEventLogAsync(EventType type, string userId, Post post)
        {
            EventLog eventLog = new()
            {
                Content = JsonConvert.SerializeObject(post),
                CreatedAt = DateTime.Now,
                CreatedBy = userId,
                EventType = type,
                TransactionId = new Guid()
            };
            await eventLogRepository.AddAsync(eventLog);
        }
    }
}
