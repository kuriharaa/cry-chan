using cry_chan.Api.Models;
using cry_chan.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cry_chan.Api.Helpers
{
    public static class ResponseBuilder
    {
        private static OpPost GetOpPost(Thread thread)
        {
            return new OpPost()
            {
                content = thread.Content,
                date = ((DateTimeOffset)thread.Date).ToUnixTimeSeconds(),
                postNumber = thread.Id,
                subject = thread.Subject,
                thread = thread.Id,
                _id = thread.Id,
                authorName = "Annonymous"
            };
        }

        private static List<NotOpPost> GetNotOpPosts(List<Post> allPosts)
        {
            List<NotOpPost> notOpPosts = new List<NotOpPost>();

            foreach (var post in allPosts)
            {
                notOpPosts.Add(new NotOpPost()
                {
                    content = post.Content,
                    date = ((DateTimeOffset)post.Date).ToUnixTimeSeconds(),
                    postNumber = post.PostNumber,
                    thread = post.ThreadId,
                    _id = post.Id,
                    authorName = "Annonymous"
                });
            }

            return notOpPosts;
        }

        public static List<ResponseThread> GetResponseBoard(IEnumerable<Thread> threads)
        {
            List<ResponseThread> responseThreads = new List<ResponseThread>();
            foreach (var thread in threads)
            {
                List<Post> allPosts = thread.Posts;

                responseThreads.Add(new ResponseThread() 
                {
                    boardId = thread.BoardId,
                    _id = thread.Id,
                    opPostNumber = thread.Id.ToString(),
                    opPost = GetOpPost(thread),
                    posts = (allPosts.Count > 0) ? GetNotOpPosts(allPosts) : null
            });
            }
            return responseThreads;
        }

        public static ResponseThread GetResponseThread(Thread thread)
        {
            List<Post> allPosts = thread.Posts;

            ResponseThread responseThread = new ResponseThread()
            {
                boardId = thread.BoardId,
                _id = thread.Id,
                opPostNumber = thread.Id.ToString(),
                opPost = GetOpPost(thread),
                posts = (allPosts.Count > 0) ? GetNotOpPosts(allPosts) : null
            };
            
            return responseThread;
        }
    }
}
