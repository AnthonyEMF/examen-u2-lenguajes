import { examenApi } from '../../../config/api';

// Obtener todos
export const getLogsList = async (searchTerm = "", page = 1) => {
    try {
        const {data} = await examenApi.get(`/logs?searchTerm=${searchTerm}&page=${page}`);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}