using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core;
using cry_chan.Core.Models;
using cry_chan.Core.Services;

namespace cry_chan.Services
{
    public class ThreadService : IThreadService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ThreadService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<Thread> CreateThread(Thread newthread)
        {
            await _unitOfWork.Threads.AddAsync(newthread);
            await _unitOfWork.CommitAsync();
            return newthread;
        }

        public async Task<IEnumerable<Thread>> GetThreadsByBoardId(int boardId)
        {
            return await _unitOfWork.Threads.GetAllWithBoardByIdAsync(boardId);
        }
    }
}
