using Microsoft.EntityFrameworkCore;
using JAModel;
namespace JAConsoleDL;
public class Context : DbContext
{


    public Context() : base() { }

    public Context(DbContextOptions options) : base(options){ }

    public DbSet<users> users {get; set;}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<users>().Property(i => i.userid).ValueGeneratedOnAdd();
    }





}