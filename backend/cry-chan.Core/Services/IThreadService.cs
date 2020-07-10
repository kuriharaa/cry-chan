using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core.Models;

namespace cry_chan.Core.Services
{
    public interface IThreadService
    {
        Task<IEnumerable<Thread>> GetThreadsByBoardId(int boardId);
        Task<Thread> GetThreadById(int threadId);
        Task<Thread> CreateThread(Thread newthread);
        Task<Thread> UpdateThread(Thread newthread);
    }
}
