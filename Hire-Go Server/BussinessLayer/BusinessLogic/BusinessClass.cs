using Newtonsoft.Json;
using Project1.Server;
using Project1.Server.BussinessLayer.Interface;
using System.Reflection;

namespace Project1.Server
{
    public class BusinessClass : IBussinessinterface
    {
        private IBussinessinterface GetBusinessLogic(string className)
        {
            string fullTypeName = $"Hire_Go_Server.{className}";;
            var type = Assembly.GetExecutingAssembly().GetType(fullTypeName);
            var instance = Activator.CreateInstance(type) as IBussinessinterface;
            return instance;
        }
        #region Interface Methods

        public string Delete(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result = logic.Delete(obj, classname);
            return result;

        }

        public string Fetch(object payload, string classname)
        {

            var logic = GetBusinessLogic(classname);
            logic.Fetch(payload, classname);
            return JsonConvert.SerializeObject(logic);
        }

        public string FetchAll(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result = logic.FetchAll(obj, classname);
            return result;
        }

        public string Insert(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            logic.Insert(obj,classname);

            return JsonConvert.SerializeObject(logic);
        }

        public string Search(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result  = logic.Search(obj, classname);

        
            return result;
        }

        public string Update(object obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var data = logic.Update(obj, classname);

            return data?.ToString() ?? string.Empty;
        }

        public string Single(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result = logic.Single(obj, classname);


            return result;
        }
        #endregion
    }

}
