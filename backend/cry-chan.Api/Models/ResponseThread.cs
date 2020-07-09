using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cry_chan.Api.Models
{
    public class ResponseThread
    {
        public List<NotOpPost> posts { get; set; }
        public int _id { get; set; }
        public int boardId { get; set; }
        public OpPost opPost { get; set; }
        public string opPostNumber { get; set; }
    }
}
