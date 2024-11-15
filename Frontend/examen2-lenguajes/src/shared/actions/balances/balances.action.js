import { examenApi } from '../../../config/api';

// Obtener todos
export const getBalancesList = async (searchTerm = "", page = 1) => {
    try {
        const {data} = await examenApi.get(`/balances?searchTerm=${searchTerm}&page=${page}`);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}