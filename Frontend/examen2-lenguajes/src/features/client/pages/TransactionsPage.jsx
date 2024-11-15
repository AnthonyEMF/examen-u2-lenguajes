import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialTransactions = [
  { number: 1, description: "Compra de materiales", status: "Activa" },
  { number: 2, description: "Pago de servicios", status: "Desactivada" },
  { number: 3, description: "Venta de productos", status: "Activa" },
  { number: 4, description: "Pago de servicios", status: "Desactivada" },
  { number: 5, description: "Venta de productos", status: "Activa" },
  { number: 6, description: "Pago de servicios", status: "Desactivada" },
  { number: 7, description: "Venta de productos", status: "Activa" },
  { number: 8, description: "Pago de servicios", status: "Desactivada" },
  { number: 9, description: "Venta de productos", status: "Activa" },
  { number: 10, description: "Pago de servicios", status: "Desactivada" },
  { number: 11, description: "Venta de productos", status: "Activa" },
];

export const TransactionsPage = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleStatus = (number) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.number === number
          ? { ...transaction, status: transaction.status === "Activa" ? "Desactivada" : "Activa" }
          : transaction
      )
    );
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Partidas Contables</h1>

      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar partida..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Número
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acción
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.number}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === "Activa"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => toggleStatus(transaction.number)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded"
                  >
                    Cambiar estado
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
        to="/post/transactions"
      >
        + Crear Partida
      </Link>
    </div>
  );
};