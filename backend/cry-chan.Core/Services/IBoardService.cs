using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core.Models;

namespace cry_chan.Core.Services
{
    public interface IBoardService
    {
        Task<IEnumerable<Board>> GetAllBoards();
    }
}

