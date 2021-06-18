using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Entities
{
    public class EventLog
    {
        public int Id { get; set; }
        public EventType EventType { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public string Content { get; set; }
        public Guid TransactionId { get; set; }
    }
}
