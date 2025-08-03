using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Hire_Go_Server
{
    [Serializable]
    public class DashBoard : IBussinessinterface
    {
        Context _ctx = new Context();
        public string  LoginAccess { get; set; }
        public string Delete(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Fetch(object obj, string classname)
        {
            
            return LoginAccess;
        }

        public string FetchAll(string obj, string classname)
        {
            //var compaydta = -_ctx.company_details.Where(c=>c.UserName == );

            return null;
        }

        public string Insert(string obj, string classname)
        {
            string data = obj.ToString();
            var companydetails = JsonConvert.DeserializeObject<List<company_details>>(data);

            foreach(var companydetail in companydetails)
            {

                var datafound = _ctx.loginsessionDetails.Where(c => c.UserID == companydetail.UserName && c.Password==companydetail.Password).FirstOrDefault();
                if (datafound != null)
                {
                    datafound.UserID = companydetail.UserName;
                    datafound.Password = companydetail.Password;
                    _ctx.loginsessionDetails.Update(datafound);
                    _ctx.SaveChanges();
                }
                if (companydetail.UserName != null && companydetail.Password != null)
                {
                    LoginSessionDetails login = new LoginSessionDetails();
                    login.ID = Guid.NewGuid();
                    login.UserID = companydetail.UserName;
                    login.Password = companydetail.Password;
                    _ctx.loginsessionDetails.Add(login);
                    company_details company = new company_details();
                    company.CompanyID = Guid.NewGuid();
                    company.LoginSessionID = login.ID;
                    company.CompanyName = companydetail.CompanyName;
                    company.CompanyDetails = companydetail.CompanyDetails;
                    company.Roles = companydetail.Roles;
                    company.UserName = "Token" + companydetail.UserName;
                    _ctx.company_details.Add(company);
                   _ctx.SaveChanges();
                }



            }
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
