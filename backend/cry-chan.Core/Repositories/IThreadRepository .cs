using cry_chan.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace cry_chan.Core.Repositories
{
    public interface IThreadRepository : IRepository<Thread>
    {
        Task<IEnumerable<Thread>> GetAllWithBoardByIdAsync(int boardId);
    }
}
