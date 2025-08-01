using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Hire_Go_Server
{
    [Serializable]
    public class LoginSession : IBussinessinterface
    {
        Context _ctx = new Context();
        public string  LoginAccess { get; set; }
        List<company_details> com = new List<company_details>();
        public string Delete(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Fetch(object obj, string classname)
        {
            if (obj != null)
            {
                string data = obj.ToString();
                var sessions = JsonConvert.DeserializeObject<List<LoginSessionDetails>>(data);
                foreach (var login in sessions) { 
                    var criteria = _ctx.loginsessionDetails.Where(c=>c.UserID==login.UserID && c.Password==login.Password).FirstOrDefault();
                    if (criteria != null) {
                        LoginAccess = "Granted";
                        
                    }
                    else
                    {
                        LoginAccess = "Denied";
                    }
                }
            }
            return LoginAccess;
        }

        public string FetchAll(string obj, string classname)
        {

            return null;
        }

        public string Insert(string obj, string classname)
        {
            
            return null;
        }


        public string Search(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Update(object obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
}
