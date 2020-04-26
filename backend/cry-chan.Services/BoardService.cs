using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core;
using cry_chan.Core.Models;
using cry_chan.Core.Services;

namespace cry_chan.Services
{
    public class BoardService : IBoardService
    {
        private readonly IUnitOfWork _unitOfWork;
        public BoardService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Board>> GetAllBoards()
        {
            return await _unitOfWork
                .Boards
                .GetAllAsync();
        }
    }
}