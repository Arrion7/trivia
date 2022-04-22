using Microsoft.EntityFrameworkCore;

namespace JAConsoleDL;
public class Context : DbContext
{
    public Context() : base()
    {}

    public Context(DbContextOptions options) : base(options){}

    public DbSet<JAModel.UserPass> Users {get; set;}

    public DbSet<JAModel.ShopItem> ShopItem {get; set; }



}