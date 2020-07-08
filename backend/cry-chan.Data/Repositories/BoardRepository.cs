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

        public async Task<Board> GetAllWithBoardByNameAsync(string boardName)
        {
            return await CryChanDbContext.Boards
                .Include(t => t.Threads)
                .SingleOrDefaultAsync(b => b.Name.Equals(boardName));
        }

        private CryChanDbContext CryChanDbContext
        {
            get { return Context as CryChanDbContext; }
        }
    }
}