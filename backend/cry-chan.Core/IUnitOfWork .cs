using System;
using System.Threading.Tasks;
using cry_chan.Core.Repositories;

namespace cry_chan.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IBoardRepository Boards { get; }
        IThreadRepository Threads { get; }
        IPostRepository Posts { get; }
        Task<int> CommitAsync();
    }
}
