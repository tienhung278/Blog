using BlogAPI.Contracts;
using BlogAPI.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Configuration
{
    public static class RepositoryConfiguration
    {
        public static void ConfigureRepository(this IServiceCollection services)
        {
            services.AddScoped<IPostRepository, PostRepository>();
            services.AddScoped<IEventLogRepository, EventLogRepository>();
            services.AddScoped<IRepositoryWrapper>(implementationFactory =>
            {                
                RepositoryWrapper repositoryWrapper = new RepositoryWrapper(implementationFactory.GetRequiredService<RepositoryContext>(),
                    implementationFactory.GetRequiredService<IPostRepository>(),
                    implementationFactory.GetRequiredService<IEventLogRepository>());
                return repositoryWrapper;
            });
        }
    }
}
