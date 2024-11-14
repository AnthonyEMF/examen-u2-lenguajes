using AutoMapper;
using ExamenLenguajes2.API.Database;
using ExamenLenguajes2.API.Dtos.Common;
using ExamenLenguajes2.API.Dtos.Logs;
using ExamenLenguajes2.API.Services.Interfaces;

namespace ExamenLenguajes2.API.Services
{
	public class LogsService : ILogsService
	{
		private readonly Examen2LogsContext _context;
		private readonly IMapper _mapper;
		private readonly int PAGE_SIZE;

		public LogsService(Examen2LogsContext context, IMapper mapper, IConfiguration configuration)
        {
			this._context = context;
			this._mapper = mapper;
			PAGE_SIZE = configuration.GetValue<int>("PageSize");
		}

        public Task<ResponseDto<PaginationDto<List<LogDto>>>> GetAllLogsAsync(string searchTerm = "", int page = 1)
		{
			throw new NotImplementedException();
		}
	}
}
