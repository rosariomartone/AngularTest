using Newtonsoft.Json;

namespace WebApplication1.Data
{
    public class Policy
    {
        [JsonProperty("policyNumber")]
        public int PolicyNumber { get; set; }

        [JsonProperty("policyHolder")]
        public PolicyHolder PolicyHolder { get; set; }
    }
}