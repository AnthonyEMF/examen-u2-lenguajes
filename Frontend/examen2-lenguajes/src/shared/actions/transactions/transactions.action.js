import { examenApi } from '../../../config/api';

// Obtener todos
export const getTransactionsList = async (searchTerm = "", page = 1) => {
    try {
        const {data} = await examenApi.get(`/transactions?searchTerm=${searchTerm}&page=${page}`);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}

// Obtener por Id
export const getTransactionById = async (id) => {
    try {
        const {data} = await examenApi.get(`/transactions/${id}`);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}

// Crear
export const createTransactionApi = async (transactionData) => {
    try {
        const {data} = await examenApi.post(`/transactions`, transactionData);
        return data;
    } catch(error) {
        console.error(error);
        return error.response;
    }
}

// Editar 
export const editTransactionApi = async (id, transactionData) => {
    try {
        const {data} = await examenApi.put(`/transactions/${id}`, transactionData);
        return data;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}