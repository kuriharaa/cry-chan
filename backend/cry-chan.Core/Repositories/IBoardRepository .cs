using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core.Models;

namespace cry_chan.Core.Repositories
{
    public interface IBoardRepository : IRepository<Board>
    {
        Task<IEnumerable<Board>> GetAllWithThreadAsync();
    }
}
