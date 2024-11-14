using ExamenLenguajes2.API.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace ExamenLenguajes2.API.Database
{
	public class Examen2LogsContext : DbContext
	{
        public Examen2LogsContext(DbContextOptions<Examen2LogsContext> options) : base(options)
        {
        }

		public DbSet<LogEntity> Logs { get; set; }
}
}
