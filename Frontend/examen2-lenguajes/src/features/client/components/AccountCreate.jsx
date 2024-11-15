import { useState } from "react";

const parentAccounts = [
  { code: "101", name: "Caja" },
  { code: "102", name: "Bancos" },
  { code: "103", name: "Cuentas por Cobrar" },
];

export const AccountCreate = () => {
  const [accountName, setAccountName] = useState("");
  const [parentAccount, setParentAccount] = useState("");

  const handleCreateAccount = () => {
    if (accountName.trim() === "") {
      alert("El nombre de la cuenta es obligatorio.");
      return;
    }
    console.log("Creando cuenta:", { accountName, parentAccount });
    setAccountName("");
    setParentAccount("");
  };

  return (
    <div className="relative flex flex-col items-center w-full h-full p-8 bg-gray-100">
        <div className="flex flex-col w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Crear Nueva Cuenta</h2>

        <label htmlFor="accountName" className="mb-2 text-gray-700">
            Nombre de la Cuenta
        </label>
        <input
            id="accountName"
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Ingrese el nombre de la cuenta"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        <label htmlFor="parentAccount" className="mb-2 text-gray-700">
            Cuenta Padre (opcional)
        </label>
        <select
            id="parentAccount"
            value={parentAccount}
            onChange={(e) => setParentAccount(e.target.value)}
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="">Seleccione una cuenta padre (opcional)</option>
            {parentAccounts.map((account) => (
                <option key={account.code} value={account.code}>
                {account.name} - {account.code}
            </option>
            ))}
        </select>

        <button
            onClick={handleCreateAccount}
            disabled={!accountName}
            className={`w-full py-2 text-white font-bold rounded-lg shadow-lg ${
                accountName ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
            >
            Crear Cuenta
        </button>
        </div>
    </div>
  );
};

