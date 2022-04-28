using Microsoft.EntityFrameworkCore;
using JAModel;
namespace JAConsoleDL;
public class Context : DbContext
{
    //command: dotnet ef migrations add <name> -c Context --startup-project ../WebAPI

    public Context() : base() { }

    public Context(DbContextOptions options) : base(options){ }

    public DbSet<users> users {get; set;}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<users>().Property(i => i.userid).ValueGeneratedOnAdd();
    }





}