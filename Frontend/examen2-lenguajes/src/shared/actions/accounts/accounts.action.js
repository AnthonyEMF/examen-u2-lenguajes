import { examenApi } from '../../../config/api';

// Obtener todos
export const getAccountsList = async (searchTerm = "", page = 1) => {
    try {
        const {data} = await examenApi.get(`/accounts?searchTerm=${searchTerm}&page=${page}`);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}

// Obtener por Id
export const getAccountById = async (id) => {
    try {
        const {data} = await examenApi.get(`/accounts/${id}`);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}

// Crear
export const createAccountApi = async (accountData) => {
    try {
        const {data} = await examenApi.post(`/accounts`, accountData);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}

// Editar 
export const editAccountApi = async (id, accountData) => {
    try {
        const {data} = await examenApi.put(`/accounts/${id}`, accountData);
        return data;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}