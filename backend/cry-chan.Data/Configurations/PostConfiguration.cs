using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using cry_chan.Core.Models;

namespace cry_chan.Data.Configurations
{
    public class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder
                .HasKey(p => p.Id);

            builder
                .Property(p => p.Id)
                .UseIdentityColumn();

            builder
                .Property(p => p.Content)
                .IsRequired()
                .HasMaxLength(1000);

            builder
                .Property(p => p.Date)
                .IsRequired();

            builder
                .Property(p => p.ImgUrl)
                .IsRequired();

            builder
                .Property(p => p.PostNumber)
                .IsRequired();

            builder
                .Property(p => p.ThreadId)
                .IsRequired();

            builder
                .ToTable("Posts");
        }
    }
}