using Microsoft.EntityFrameworkCore;
using cry_chan.Core.Models;
using cry_chan.Data.Configurations;

namespace cry_chan.Data
{
    public class CryChanDbContext : DbContext
    {
        public DbSet<Board> Boards { get; set; }
        public DbSet<Thread> Threads { get; set; }
        public DbSet<Post> Posts { get; set; }

        public CryChanDbContext(DbContextOptions<CryChanDbContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .ApplyConfiguration(new BoardConfiguration());

            builder
                .ApplyConfiguration(new ThreadConfiguration());

            builder
                .ApplyConfiguration(new PostConfiguration());
        }
    }
}