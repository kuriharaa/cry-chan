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
    public class PostRepository : Repository<Post>, IPostRepository
    {
        public PostRepository(CryChanDbContext context)
            : base(context)
        { }

        public async Task<IEnumerable<Post>> GetAllWithThreadByIdAsync(int threadId)
        {
            return await CryChanDbContext
                .Posts
                .Where(p => p.ThreadId == threadId)
                .ToListAsync();
        }

        private CryChanDbContext CryChanDbContext
        {
            get { return Context as CryChanDbContext; }
        }
    }
}