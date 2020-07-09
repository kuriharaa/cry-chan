using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cry_chan.Api.Models
{
    public class NotOpPost
    {
        public string authorName { get; set; }
        public int _id { get; set; }
        public long date { get; set; }
        public string content { get; set; }
        public int thread { get; set; }
        public int postNumber { get; set; }
    }
}
