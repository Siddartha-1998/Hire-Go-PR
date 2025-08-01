using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Product
{
    public int Id { get; set; }
    public string name { get; set; }
    public decimal price { get; set; }
    public string image { get; set; }
    public string quantity { get; set; }
}
public class LoginSessionDetails
{
    public Guid ID { get; set; }
    public string UserID { get; set; }
    public string Password { get; set; }

    public company_details CompanyDetails { get; set; }
}
public class MapView
{
    public int ID { get; set; }
    public string lat { get; set; }
    public string lon { get; set; }
}
public class company_details
{
    [Key]
    public Guid CompanyID { get; set; }
    [ForeignKey("LoginSession")]
    public Guid LoginSessionID { get; set; }
    public string CompanyName { get; set; }
    public string CompanyDetails { get; set; }
    public string Roles { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public LoginSessionDetails LoginSession
    {
        get; set;

    }
}