export const AccountRowItem = ({account, editAccount}) => {

    const toggleStatus = async (code) => {
        try {
            // Encontrar la cuenta a modificar
            const accountToEdit = accounts.data.items.find((account) => account.code === code);
            
            if (!accountToEdit) {
                console.error("Cuenta no encontrada");
                return;
            }
    
            // Llamar a la API para actualizar el estado de la cuenta
            const updatedAccount = await editAccountApi(accountToEdit.id, {
                isActive: !accountToEdit.isActive, // Alternar el estado
            });
    
            if (updatedAccount) {
                // Actualizar el estado local con la cuenta actualizada
                const updatedAccounts = accounts.data.items.map((account) =>
                    account.code === code ? { ...account, isActive: updatedAccount.isActive } : account
                );
    
                // Actualizar el estado local
                setAccounts({
                    ...accounts,
                    data: {
                        ...accounts.data,
                        items: updatedAccounts, // Reemplazamos la cuenta modificada
                    },
                });
            }
        } catch (error) {
            console.error("Error al cambiar el estado de la cuenta:", error);
        }
    };
    
    

  return (
    <tr key={account.id} className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">{account.code}</td>
        <td className="px-4 py-2 border-b">{account.name}</td>
        <td className="px-4 py-2 border-b">
          {account.allowMovement ? "Sí" : "No"}
        </td>
        <td className="px-4 py-2 border-b">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              account.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {account.isActive ? "Activa" : "Inactiva"}
          </span>
        </td>
        <td className="px-4 py-2 border-b">
          <button
            onClick={() => toggleStatus(account.code)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded"
          >
            Cambiar estado
          </button>
        </td>
    </tr>
  )
}

