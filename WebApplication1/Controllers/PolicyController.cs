using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;
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

        [HttpPost]
        [Route("Create/{policyNumber}")]
        public void Create([FromBody] Policy policy)
        {
            _policyRepository.Add(policy);
        }

        [HttpPost]
        [Route("Update/{policyNumber}")]
        public void Update([FromBody] Policy policy)
        {
            _policyRepository.Update(policy);
        }

        [HttpDelete]
        [Route("Delete/{policyNumber}")]
        public void Delete(int policyNumber)
        {
            _policyRepository.Remove(policyNumber);
        }
    }
}