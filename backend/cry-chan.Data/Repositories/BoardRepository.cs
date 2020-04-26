using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using cry_chan.Core.Models;
using cry_chan.Core.Repositories;

namespace cry_chan.Data.Repositories
{
    public class BoardRepository : Repository<Board>, IBoardRepository
    {
        public BoardRepository(CryChanDbContext context)
            : base(context)
        { }

        public async Task<IEnumerable<Board>> GetAllWithThreadAsync()
        {
            return await CryChanDbContext
                .Boards
                .Include(m => m.Threads)
                .ToListAsync();
        }

        private CryChanDbContext CryChanDbContext
        {
            get { return Context as CryChanDbContext; }
        }
    }
}