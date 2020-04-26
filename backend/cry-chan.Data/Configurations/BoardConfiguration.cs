using cry_chan.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace cry_chan.Data.Configurations
{
    public class BoardConfiguration : IEntityTypeConfiguration<Board>
    {
        public void Configure(EntityTypeBuilder<Board> builder)
        {
            builder
                .HasKey(b => b.Id);

            builder
                .Property(b => b.Id)
                .UseIdentityColumn();

            builder
                .Property(b => b.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .HasMany(b => b.Threads)
                .WithOne()
                .HasForeignKey(t => t.BoardId);

            builder
                .ToTable("Boards");
        }
    }
}