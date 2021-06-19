using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BlogAPI.Contracts
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> FindAll();
        IQueryable<T> FindByCondition(Expression<Func<T, bool>> expresstion);
        IQueryable<T> GetItemsByPage(IQueryable<T> collection, QueryParameter parameter);
        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
