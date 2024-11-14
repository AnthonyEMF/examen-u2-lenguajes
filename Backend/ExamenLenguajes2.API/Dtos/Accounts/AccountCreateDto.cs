using System.ComponentModel.DataAnnotations;

namespace ExamenLenguajes2.API.Dtos.Accounts
{
	public class AccountCreateDto
	{
		[Required(ErrorMessage = "El codigo de la cuenta es requerido.")]
		public string Code { get; set; }

		[Required(ErrorMessage = "El nombre de la cuenta es requerido.")]
		public string Name { get; set; }

		public Guid? ParentId { get; set; }
	}
}
