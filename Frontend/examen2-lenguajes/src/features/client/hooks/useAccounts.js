import { useState } from "react";
import { createAccountApi, editAccountApi, getAccountById, getAccountsList } from "../../../shared/actions/accounts/accounts.action";

export const useAccounts = () => {
    const [accounts, setAccounts] = useState({});
    const [account, setAccount] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Cargar todas las cuentas
    const loadAccounts = async (searchTerm, page) => {
        setIsLoading(true);

        const result = await getAccountsList(searchTerm, page);
        setAccounts(result);

        setIsLoading(false);
    }

    // Cargar cuenta por Id
    const loadAccountById = async (id) => {
        const result = await getAccountById(id);
        setAccount(result);
    }

    // Crear cuenta
    const createAccount = async (accountData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await createAccountApi(accountData);
            setAccount(result);
        } catch(error) {
            setError(error)
        } finally {
            setIsSubmitting(false);
        }
    }

    // Editar cuenta
    const editAccount = async (id, accountData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await editAccountApi(id, accountData);
            setAccount(result);
        } catch (error) {
            setError(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        // Properties
        accounts,
        account,
        isLoading,
        isSubmitting,
        error,
        // Methods
        loadAccounts,
        loadAccountById,
        createAccount,
        editAccount,
    };
}