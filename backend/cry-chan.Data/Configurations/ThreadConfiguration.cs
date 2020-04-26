using cry_chan.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace cry_chan.Data.Configurations
{
    public class ThreadConfiguration : IEntityTypeConfiguration<Thread>
    {
        public void Configure(EntityTypeBuilder<Thread> builder)
        {
            builder
                .HasKey(t => t.Id);

            builder
                .Property(t => t.Id)
                .UseIdentityColumn();

            builder
                .Property(t => t.Subject)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(t => t.Date)
                .IsRequired();

            builder
                .Property(t => t.Content)
                .IsRequired()
                .HasMaxLength(1000);

            builder
                .Property(t => t.ImgUrl)
                .IsRequired();

            builder
                .Property(t => t.PostNumber)
                .IsRequired();

            builder
                .Property(t => t.OpPostNumber)
                .IsRequired();

            builder
                .HasMany(t => t.Posts)
                .WithOne()
                .HasForeignKey(p => p.ThreadId);

            builder
                .ToTable("Threads");
        }
    }
}