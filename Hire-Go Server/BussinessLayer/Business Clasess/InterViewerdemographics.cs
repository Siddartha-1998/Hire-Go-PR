using Csla.Web.Mvc;
using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Hire_Go_Server
{
    [Serializable]
    public class InterViewerdemographics : IBussinessinterface
    {


        #region Prop
        public String Name { get; set; }
        public String Email { get; set; }
        public String phone { get; set; }
        public String profilePicUrl { get; set; }
        public String resume { get; set; }
        public Guid sessionID { get; set; }
        #endregion

        string Added = string.Empty;
        List<inter> Interviewer = new();
        Context _ctx = new Context();

        public string Delete(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Fetch(object obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string FetchAll(string obj, string classname)
        {
           
            List<object> Interviewer = new List<object>();
            var ids = JsonConvert.DeserializeObject<List<string>>(obj);

            string id = ids.FirstOrDefault();
            var interviewProfileDetails = _ctx.InterviewerProfileDetails
                .Where(c => c.InterviewerID == Guid.Parse(id))
                .ToList();

            Interviewer.AddRange(interviewProfileDetails);


            return JsonConvert.SerializeObject(Interviewer);

        }

        public string Insert(string obj, string classname)
        {
            Added = "Success";

            var data = JsonConvert.DeserializeObject<List<inter>>(obj);
            foreach(var item in data)
            {
                var datafound = _ctx.InterviewerProfileDetails.Where(c => c.InterviewerID == item.sessionID).FirstOrDefault();
                if (datafound != null)
                {
                    datafound.Name = item.Name;
                    datafound.Email = item.Email;
                    datafound.PhoneNumber = item.phone;
                    datafound.InterviewerID = item.sessionID;
                    _ctx.InterviewerProfileDetails.Update(datafound);
                    _ctx.SaveChanges();
                }
                else
                {
                    InterviewerProfile interviewerProfile = new InterviewerProfile();
                    interviewerProfile.Name = item.Name;
                    interviewerProfile.Email = item.Email;
                    interviewerProfile.PhoneNumber = item.phone;
                    interviewerProfile.InterviewerID = item.sessionID;
                    _ctx.InterviewerProfileDetails.Add(interviewerProfile);
                    _ctx.SaveChanges();
                }





            }

            return JsonConvert.SerializeObject(Added);
        }

        public string Search(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Single(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Update(object obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
  
    public class inter
    {
        public String Name { get; set; }
        public String Email { get; set; }
        public String phone { get; set; }
        public String profilePicUrl { get; set; }
        public String resume { get; set; }
        public Guid sessionID { get; set; }
    }
}

