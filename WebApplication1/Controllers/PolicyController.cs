using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApplication1.Data;

namespace WebApplication1.Controllers
{
    [Route("api/Policies")]
    public class PolicyController : Controller
    {
        private readonly IPolicyRepository _policyRepository;

        public PolicyController(IPolicyRepository policyRepository)
        {
            _policyRepository = policyRepository;
        }

        [HttpGet]
        public string Get()
        {
            return JsonConvert.SerializeObject(_policyRepository.Get(), Formatting.Indented);
        }

        [HttpDelete]
        [Route("api/Policies/Delete/{id}")]
        public void Delete(int policyNumber)
        {
            _policyRepository.Remove(policyNumber);
        }
    }
}