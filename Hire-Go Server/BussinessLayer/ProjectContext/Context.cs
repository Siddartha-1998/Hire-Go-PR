using Microsoft.EntityFrameworkCore;

public class Context : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<LoginSessionDetails> loginsessionDetails { get; set; }
    public DbSet<company_details> company_details { get; set; }
    public DbSet<MapView> mapview { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Project_Siddartha;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");


    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<company_details>()
    .HasKey(cd => cd.CompanyID); // 👈 This explicitly sets the primary key

        modelBuilder.Entity<company_details>()
            .HasOne(cd => cd.LoginSession)
            .WithOne(ls => ls.CompanyDetails)
            .HasForeignKey<company_details>(cd => cd.LoginSessionID)
            .OnDelete(DeleteBehavior.Cascade);

        base.OnModelCreating(modelBuilder);
    }

}
