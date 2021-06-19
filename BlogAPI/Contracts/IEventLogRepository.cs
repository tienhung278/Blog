using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Contracts
{
    public interface IEventLogRepository : IRepositoryBase<EventLog>
    {
        ICollection<EventLog> GetAllEventLogs();
        EventLog GetEventLogById(int id);
    }
}
