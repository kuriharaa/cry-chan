using System;
using System.Collections.Generic;

namespace cry_chan.Core.Models
{
	public class Thread
	{
		public int Id { get; set; }
		public int BoardId { get; set; }

		public string Subject { get; set; }
		public string OpPostNumber { get; set; }
		public string ImgUrl { get; set; }
		public int PostNumber { get; set; }

		public DateTime Date { get; set; }
		public string Content { get; set; }
		public List<Post> Posts { get; set; }

	}
}