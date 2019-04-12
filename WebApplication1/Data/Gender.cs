using System.Runtime.Serialization;

namespace WebApplication1.Data
{
    public enum Gender
    {
        [EnumMember(Value = "Male")]
        Male,
        [EnumMember(Value = "Female")]
        Female
    }
}