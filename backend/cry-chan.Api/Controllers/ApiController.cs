using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cry_chan.Core.Models;
using cry_chan.Core.Services;
using cry_chan.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace cry_chan.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly IBoardService _boardService;
        private readonly IThreadService _threadService;
        private readonly IPostService _postService;
        public ApiController(IBoardService boardService, IThreadService threadService, IPostService postService/*, IMapper mapper*/)
        {
            this._boardService = boardService;
            this._threadService = threadService;
            this._postService = postService;
            //this._mapper = mapper;
        }

        [HttpGet("{boardName}")]
        public async Task<ActionResult<IEnumerable<Thread>>> GetThreadsByBoard(string boardName)
        {
            int? boardId = _boardService
                                .GetAllBoards()
                                .Result
                                .FirstOrDefault(b => b.Name.Equals(boardName))?
                                .Id;

            if (boardId.HasValue)
            {
                var threads = await _threadService.GetThreadsByBoardId(boardId.Value);
                return Ok(threads);
            }
                return Ok();
        }

        [HttpGet("{boardName}/{threadId}")]
        public async Task<ActionResult<IEnumerable<Thread>>> GetPostsByThread(string boardName, int threadId)
        {
            var posts = await _postService.GetPostsByThreadId(threadId);
            return Ok(posts);
        }
    }
}
