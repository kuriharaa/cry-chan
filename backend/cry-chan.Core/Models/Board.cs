using System;
using System.Collections.Generic;

namespace cry_chan.Core.Models
{
    public class Board
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Thread> Threads { get; set; }
    }
}
