using AutoMapper;
using ExamenLenguajes2.API.Constants;
using ExamenLenguajes2.API.Database;
using ExamenLenguajes2.API.Dtos.Accounts;
using ExamenLenguajes2.API.Dtos.Common;
using ExamenLenguajes2.API.Dtos.Transactions;
using ExamenLenguajes2.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ExamenLenguajes2.API.Services
{
	public class AccountsService : IAccountsService
	{
		private readonly Examen2Context _context;
		private readonly IMapper _mapper;
		private readonly ILogger<AccountsService> _logger;
		private readonly int PAGE_SIZE;

		public AccountsService(Examen2Context context, IMapper mapper, ILogger<AccountsService> logger, IConfiguration configuration)
        {
			this._context = context;
			this._mapper = mapper;
			this._logger = logger;
			PAGE_SIZE = configuration.GetValue<int>("PageSize");
		}

        public Task<ResponseDto<PaginationDto<List<AccountDto>>>> GetAllAccountsAsync(string searchTerm = "", int page = 1)
		{
			throw new NotImplementedException();
		}

		public async Task<ResponseDto<AccountDto>> GetAccountByIdAsync(Guid id)
		{
			var accountEntity = await _context.Accounts.FirstOrDefaultAsync(a => a.Id == id);

			if (accountEntity is null)
			{
				return new ResponseDto<AccountDto>
				{
					StatusCode = 404,
					Status = false,
					Message = MessagesConstant.RECORD_NOT_FOUND
				};
			}

			var transactionDto = _mapper.Map<AccountDto>(accountEntity);

			return new ResponseDto<AccountDto>
			{
				StatusCode = 200,
				Status = true,
				Message = MessagesConstant.RECORD_FOUND,
				Data = transactionDto
			};
		}

		public Task<ResponseDto<AccountDto>> CreateAccountAsync(AccountCreateDto dto)
		{
			throw new NotImplementedException();
		}

		public Task<ResponseDto<AccountDto>> ToggleAccountStatusAsync(AccountEditDto dto, Guid id)
		{
			throw new NotImplementedException();
		}
	}
}
