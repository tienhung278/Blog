using BlogAPI.Contracts;
using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Repositories
{
    public class EventLogRepository : RepositoryBase<EventLog>, IEventLogRepository
    {
        public EventLogRepository(RepositoryContext context) : base(context)
        {

        }

        public EventLog GetEventLogById(int id)
        {
            return FindByCondition(e => e.Id == id).FirstOrDefault();
        }

        public ICollection<EventLog> GetAllEventLogs()
        {
            return FindAll()
                .OrderByDescending(e => e.CreatedAt)
                .ToList();
        }
    }
}
