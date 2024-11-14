﻿using ExamenLenguajes2.API.Dtos.Common;
using ExamenLenguajes2.API.Dtos.Accounts;

namespace ExamenLenguajes2.API.Services.Interfaces
{
	public interface IAccountsService
	{
		Task<ResponseDto<PaginationDto<List<AccountDto>>>> GetAllAccountsAsync(string searchTerm = "", int page = 1);
		Task<ResponseDto<AccountDto>> GetAccountByIdAsync(Guid id);
		Task<ResponseDto<AccountDto>> CreateAccountAsync(AccountCreateDto dto);
		Task<ResponseDto<AccountDto>> ToggleAccountStatusAsync(AccountEditDto dto, Guid id);
	}
}
