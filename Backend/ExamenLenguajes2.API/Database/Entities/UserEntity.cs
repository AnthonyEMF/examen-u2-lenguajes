using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace ExamenLenguajes2.API.Database.Entities
{
	public class UserEntity : IdentityUser
	{
		[StringLength(100, MinimumLength = 5)]
		[Required]
		public string Name { get; set; }
	}
}
