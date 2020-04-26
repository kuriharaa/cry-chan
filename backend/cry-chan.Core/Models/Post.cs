using System;

namespace cry_chan.Core.Models
{
	public class Post
	{
		public int Id { get; set; }
		public int ThreadId { get; set; }

		public string ImgUrl { get; set; }
		public int PostNumber { get; set; }

		public DateTime Date { get; set; }
		public string Content { get; set; }
	}
}
