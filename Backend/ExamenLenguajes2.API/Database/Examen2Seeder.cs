using ExamenLenguajes2.API.Constants;
using ExamenLenguajes2.API.Database.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ExamenLenguajes2.API.Database
{
	public class Examen2Seeder
	{
		public static async Task LoadDataAsync(
			Examen2Context context,
			UserManager<UserEntity> userManager,
			RoleManager<IdentityRole> roleManager,
			ILoggerFactory loggerFactory)
		{
			try
			{
				await LoadUsersAndRolesAsync(userManager, roleManager, loggerFactory);
				//await Load...Async(context, loggerFactory);
			}
			catch (Exception ex)
			{
				var logger = loggerFactory.CreateLogger<Examen2Seeder>();
				logger.LogError(ex, "Error al inicializar la Data del API.");
			}
		}

		private static async Task LoadUsersAndRolesAsync(UserManager<UserEntity> userManager, RoleManager<IdentityRole> roleManager, ILoggerFactory loggerFactory)
		{
			try
			{
				if (!await roleManager.Roles.AnyAsync())
				{
					await roleManager.CreateAsync(new IdentityRole(RolesConstant.USER));
				}

				if (!await userManager.Users.AnyAsync())
				{
					var userAdmin = new UserEntity
					{
						Id = "2a373bd7-1829-4bb4-abb7-19da4257891d",
						Email = "user@example.com",
						UserName = "user@example.com",
						Name = "Juan Perez",
					};

					await userManager.CreateAsync(userAdmin, "Temporal01*");
					await userManager.AddToRoleAsync(userAdmin, RolesConstant.USER);
				}
			}
			catch (Exception e)
			{
				var logger = loggerFactory.CreateLogger<Examen2Seeder>();
				logger.LogError(e.Message);
			}
		}
	}
}
