﻿using System;
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
            newthread.Date = DateTime.Now;
            newthread.OpPostNumber = "0";
            newthread.PostNumber = 0;
            await _unitOfWork.Threads.AddAsync(newthread);
            await _unitOfWork.CommitAsync();
            return newthread;
        }

        public async Task<Thread> GetThreadById(int threadId)
        {
            return await _unitOfWork.Threads.GetThreadByIdAsync(threadId);
        }

        public async Task<IEnumerable<Thread>> GetThreadsByBoardId(int boardId)
        {
            return await _unitOfWork.Threads.GetAllWithBoardByIdAsync(boardId);
        }

        public async Task<Thread> UpdateThread(Thread newthread)
        {
            newthread.OpPostNumber = newthread.Id.ToString();
            newthread.PostNumber = newthread.Id;
            await _unitOfWork.CommitAsync();
            return newthread;
        }
    }
}
