using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core.Models;

namespace cry_chan.Core.Services
{
    public interface IPostService
    {
        Task<IEnumerable<Post>> GetPostsByThreadId(int threadId);
        Task<Post> CreatePost(Post newPost);
        Task<Post> UpdatePost(Post newPost);
    }
}
