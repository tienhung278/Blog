using BlogAPI.Contracts;
using BlogAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BlogAPI.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        private readonly RepositoryContext context;
        private readonly DbSet<T> table;

        public RepositoryBase(RepositoryContext context)
        {
            this.context = context;
            table = context.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            await table.AddAsync(entity);
        }

        public void Delete(T entity)
        {
            table.Remove(entity);
        }

        public IQueryable<T> FindAll()
        {
            return table.AsNoTracking();
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expresstion)
        {
            return table.Where(expresstion).AsNoTracking();
        }

        public IQueryable<T> GetItemsByPage(IQueryable<T> collection, QueryParameter parameter)
        {
            return collection.Skip((parameter.PageNumber - 1) * parameter.PageSize)
                .Take(parameter.PageSize);
        }

        public PageInfo<T> GetPageInfo(QueryParameter parameter)
        {
            var totalCount = FindAll().Count();
            return new PageInfo<T>(totalCount, parameter.PageNumber, parameter.PageSize);
        }

        public void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
        }
    }
}
