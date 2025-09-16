using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Hire_Go_Server
{
    [Serializable]
    public class LoginSession : IBussinessinterface
    {
        Context _ctx = new Context();
        public string LoginAccess { get; set; }
        public string RoleName { get; set; }
        List<company_details> company = new List<company_details>();
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
                foreach (var login in sessions)
                {
                    if (login.Type == "Admin Login")
                    {
                        var criteria = _ctx.loginsessionDetails.Where(c => c.UserID == login.UserID && c.Password == login.Password).FirstOrDefault();
                        if (criteria != null)
                        {
                            LoginAccess = "Granted";
                            var companydetails = _ctx.company_details.Where(c => c.UserName == login.UserID).FirstOrDefault();
                            if (companydetails != null)
                            {
                                company.Add(new company_details
                                {
                                    CompanyID = companydetails.CompanyID,
                                    CompanyName = companydetails.CompanyName,
                                    CompanyDetails = companydetails.CompanyDetails,
                                    Roles = companydetails.Roles,
                                });
                            }
                            RoleName = criteria.Type??string.Empty;
                        }
                        else
                        {
                            LoginAccess = "Denied";
                        }
                    }
                    else if (login.Type == "Register Admin")
                    {
                        LoginSessionDetails Register = new LoginSessionDetails();
                        Register.UserID = login.UserID;
                        Register.Password = login.Password;
                        Register.Type = "Admin New";
                        _ctx.loginsessionDetails.Add(Register);
                        _ctx.SaveChanges();
                        LoginAccess = "Account Added SuccessFully!";


                    }
                    else if(login.Type == "Interviewer Register")
                    {
                        InterviewerLogin InterviewerLogins = new InterviewerLogin();
                        InterviewerLogins.Username = login.UserID;
                        InterviewerLogins.Password = login.Password;
                        _ctx.InterviewerLogins.Add(InterviewerLogins);
                        _ctx.SaveChanges();
                        LoginAccess = "Account Added SuccessFully!";

                    }
                    else
                    {
                        var criteria = _ctx.InterviewerLogins.Where(c => c.Username == login.UserID && c.Password == login.Password).FirstOrDefault();
                        if (criteria != null)
                        {
                            LoginAccess = criteria.ID.ToString();
                        }

                    }

                }
            }
            return null;
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

        public string Single(string obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
}
