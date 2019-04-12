using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace WebApplication1.Data
{
    public class PolicyHolder
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("age")]
        public int Age { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Gender Gender { get; set; }
    }
}