using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core.Models;

namespace cry_chan.Core.Repositories
{
    public interface IPostRepository : IRepository<Post>
    {
        Task<IEnumerable<Post>> GetAllWithThreadByIdAsync(int threadId);
    }
}
