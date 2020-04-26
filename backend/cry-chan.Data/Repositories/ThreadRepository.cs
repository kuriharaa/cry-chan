using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using cry_chan.Core.Models;
using cry_chan.Core.Repositories;
using System.Linq.Expressions;
using System;

namespace cry_chan.Data.Repositories
{
    public class ThreadRepository : Repository<Thread>, IThreadRepository
    {
        public ThreadRepository(CryChanDbContext context)
            : base(context)
        { }

        public async Task<IEnumerable<Thread>> GetAllWithBoardByIdAsync(int boardId)
        {
            return await CryChanDbContext
                .Threads
                .Include(m => m.Posts)
                .Where(m => m.BoardId == boardId)
                .ToListAsync();
        }

        private CryChanDbContext CryChanDbContext
        {
            get { return Context as CryChanDbContext; }
        }
    }
}