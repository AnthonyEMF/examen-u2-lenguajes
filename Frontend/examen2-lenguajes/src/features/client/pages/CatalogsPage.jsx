import { useState } from "react";
import { Link } from "react-router-dom";

export const CatalogsPage = () => {
  const [search, setSearch] = useState("");
  const [accounts, setAccounts] = useState([
    { code: "101", name: "Caja", allowsMovements: true, isActive: true },
    { code: "102", name: "Bancos", allowsMovements: true, isActive: true },
    { code: "103", name: "Cuentas por Cobrar", allowsMovements: false, isActive: true },
    { code: "104", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "105", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "106", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "107", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "108", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "109", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "110", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "111", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "112", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "113", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "114", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "115", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "116", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "117", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "118", name: "Inventario", allowsMovements: true, isActive: false },
    { code: "119", name: "Inventario", allowsMovements: true, isActive: false },
  ]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleStatus = (code) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.code === code
          ? { ...account, isActive: !account.isActive }
          : account
      )
    );
  };

  const filteredAccounts = accounts.filter(account =>
    account.name.toLowerCase().includes(search.toLowerCase()) ||
    account.code.includes(search)
  );

  return (
    <div className="relative flex flex-col items-center w-full h-full p-8 bg-gray-100">
      <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Catálogo de Cuentas</h2>
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Buscar cuenta..."
              value={search}
              onChange={handleSearchChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 border-b">CÓDIGO DE CUENTA</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">NOMBRE</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">MOVIMIENTOS</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">ESTADO</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((account, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{account.code}</td>
                  <td className="px-4 py-2 border-b">{account.name}</td>
                  <td className="px-4 py-2 border-b">
                    {account.allowsMovements ? "Sí" : "No"}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
        to="/post/account"
      >
        + Crear Cuenta
      </Link>
    </div>
  );
};
