﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using cry_chan.Core;
using cry_chan.Core.Models;
using cry_chan.Core.Services;

namespace cry_chan.Services
{
    public class PostService : IPostService
    {
        private readonly IUnitOfWork _unitOfWork;
        public PostService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<Post> CreatePost(Post newPost)
        {
            newPost.Date = DateTime.Now;
            newPost.PostNumber = 0;
            await _unitOfWork.Posts.AddAsync(newPost);
            await _unitOfWork.CommitAsync();
            return newPost;
        }

        public async Task<IEnumerable<Post>> GetPostsByThreadId(int threadId)
        {
            return await _unitOfWork.Posts.GetAllWithThreadByIdAsync(threadId);
        }

        public async Task<Post> UpdatePost(Post newPost)
        {
            newPost.Date = DateTime.Now;
            newPost.PostNumber = newPost.Id;
            await _unitOfWork.CommitAsync();
            return newPost;
        }
    }
}
