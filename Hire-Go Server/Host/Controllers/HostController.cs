using Microsoft.AspNetCore.Mvc;
using Project1.Server;
using Project1.Server.BussinessLayer;
using Project1.Server.BussinessLayer.Interface;

[ApiController]
[Route("[controller]")]
public class HostController : ControllerBase
{
    Context _ctx = new Context();
    [HttpGet]
    public IActionResult Get(string className, string obj, string type)
    {
        IBussinessinterface instance = null;
        string result = string.Empty;

        if (className != null)
        {
            switch (type)
            {
                case "Insert":
                    instance = new BusinessClass();
                    result = instance.Insert(obj, className);
                    break;
                case "Update":
                    instance = new BusinessClass();
                    result = instance.Update(obj, className);
                    break;
                case "Fetch":
                    instance = new BusinessClass();
                    result =  instance.Fetch(obj, className);
                    break;
                case "Search":
                    instance = new BusinessClass();
                    result = instance.Search(obj, className);
                    break;
                case "Fetchall":
                    instance = new BusinessClass();
                    result = instance.FetchAll(obj, className);
                    break;
                case "Delete":
                    instance = new BusinessClass();
                    result = instance.Delete(obj, className);
                    break;
                case "Single":
                    instance = new BusinessClass();
                    result = instance.Single(obj, className);
                    break;
            }
        }
        _ctx.SaveChanges();
        return Ok(result);
    }



}


