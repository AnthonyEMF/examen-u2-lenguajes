import { useState } from "react";

const accounts = [
  { id: 1, name: "Caja" },
  { id: 2, name: "Bancos" },
  { id: 3, name: "Cuentas por cobrar" },
  // Agrega más cuentas según sea necesario
];

export const TransactionCreate = () => {
  const [description, setDescription] = useState("");
  const [entries, setEntries] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalDebit, setTotalDebit] = useState(0);

  const addEntry = () => {
    setEntries([
      ...entries,
      { accountId: "", type: "DEBITO", amount: 0 },
    ]);
  };

  const removeEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    calculateTotals(updatedEntries);
  };

  const handleEntryChange = (index, field, value) => {
    const updatedEntries = entries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setEntries(updatedEntries);
    calculateTotals(updatedEntries);
  };

  const calculateTotals = (updatedEntries) => {
    const credit = updatedEntries
      .filter(entry => entry.type === "CREDITO")
      .reduce((acc, entry) => acc + parseFloat(entry.amount || 0), 0);
    const debit = updatedEntries
      .filter(entry => entry.type === "DEBITO")
      .reduce((acc, entry) => acc + parseFloat(entry.amount || 0), 0);
    setTotalCredit(credit);
    setTotalDebit(debit);
  };

  const registerTransaction = () => {
    // Aquí puedes agregar la lógica para registrar la partida contable
    alert("Partida registrada");
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Crear Partida Contable</h1>

      <div className="mb-4">
        <label className="block text-gray-700">Fecha:</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded"
          value={new Date().toLocaleDateString()}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Descripción:</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la partida"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold">Entradas</h2>
        {entries.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <select
              className="w-1/3 p-2 border rounded"
              value={entry.accountId}
              onChange={(e) => handleEntryChange(index, "accountId", e.target.value)}
            >
              <option value="">Seleccione cuenta</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              ))}
            </select>

            <select
              className="w-1/4 p-2 border rounded"
              value={entry.type}
              onChange={(e) => handleEntryChange(index, "type", e.target.value)}
            >
              <option value="DEBITO">Débito</option>
              <option value="CREDITO">Crédito</option>
            </select>

            <input
              type="number"
              className="w-1/4 p-2 border rounded"
              value={entry.amount}
              onChange={(e) => handleEntryChange(index, "amount", e.target.value)}
              placeholder="Monto"
            />

            <button
              onClick={() => removeEntry(index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Borrar
            </button>
          </div>
        ))}
        <button
          onClick={addEntry}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Agregar Entrada
        </button>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <span>Total Débito: {totalDebit.toFixed(2)}</span>
          <span>Total Crédito: {totalCredit.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={registerTransaction}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Registrar Partida
      </button>
    </div>
  );
};
