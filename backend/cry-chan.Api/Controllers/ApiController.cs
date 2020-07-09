using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cry_chan.Api.Helpers;
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
            var board = await _boardService.GetBoardByName(boardName);

            if (board != null)
            {
                var threads = await _threadService.GetThreadsByBoardId(board.Id);
                
                return Ok(ResponseBuilder.GetResponseBoard(threads));
            }
                return Ok();
        }

        [HttpGet("{boardName}/{threadId}")]
        public async Task<ActionResult<IEnumerable<Thread>>> GetPostsByThread(string boardName, int threadId)
        {
            var thread = await _threadService.GetThreadById(threadId);
            //var posts = await _postService.GetPostsByThreadId(threadId);
            return Ok(ResponseBuilder.GetResponseThread(thread));
        }
    }
}
