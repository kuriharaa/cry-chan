using System.Threading.Tasks;
using cry_chan.Core;
using cry_chan.Core.Repositories;
using cry_chan.Data;
using cry_chan.Data.Repositories;

namespace MyMusic.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CryChanDbContext _context;
        private BoardRepository _boardRepository;
        private ThreadRepository _threadRepository;
        private PostRepository _postRepository;

        public UnitOfWork(CryChanDbContext context)
        {
            this._context = context;
        }

        public IBoardRepository Boards => _boardRepository = _boardRepository ?? new BoardRepository(_context);
        public IThreadRepository Threads => _threadRepository = _threadRepository ?? new ThreadRepository(_context);
        public IPostRepository Posts => _postRepository = _postRepository ?? new PostRepository(_context);

        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}