using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ExamenLenguajes2.API.Database.Entities
{
	[Table("logs", Schema = "dbo")]
	public class LogEntity
	{
		[Key]
		[Column("id")]
		public Guid Id { get; set; }

		[Required]
		[Column("user_id")]
		public string UserId { get; set; }
		[ForeignKey(nameof(UserId))]
		public virtual UserEntity User { get; set; }

		[Required]
		[Column("date")]
		public DateTime Date { get; set; }

		[Required]
		[Column("action")]
		public string Action { get; set; } // "Creación", "Modificación", "Eliminación"

		[Column("description")]
		public string Description { get; set; }
	}
}
