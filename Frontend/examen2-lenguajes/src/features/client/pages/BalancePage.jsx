import { useState } from "react";
// import { Pagination } from "../../../shared/components/Pagination";

export const BalancePage = () => {
  const [search, setSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState(selectedCategory || "");
  // const [fetching, setFetching] = useState(true);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFetching(true);
  // };

  // // Cambiar a una página especifica
  // const handleCurrentPage = (index = 1) => {
  //   setCurrentPage(index);
  //   setFetching(true);
  // };

  // // Ir a página anterior
  // const handlePreviousPage = () => {
  //   if (events.data.hasPreviousPage) {
  //     setCurrentPage((prevPage) => prevPage - 1);
  //     setFetching(true);
  //   }
  // };

  // // Ir a página siguiente
  // const handleNextPage = () => {
  //   if (events.data.hasNextPage) {
  //     setCurrentPage((prevPage) => prevPage + 1);
  //     setFetching(true);
  //   }
  // };

  const balances = [
    { code: "101", name: "Caja", month: "Enero", year: "2024", balance: "$1,000.00" },
    { code: "102", name: "Bancos", month: "Enero", year: "2024", balance: "$5,000.00" },
    { code: "103", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "104", name: "Inventario", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "105", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "106", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "107", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "108", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "109", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "110", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "111", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "112", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "113", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "114", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "115", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "116", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "117", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "118", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "119", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "120", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "121", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "122", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
    { code: "123", name: "Cuentas por Cobrar", month: "Enero", year: "2024", balance: "$2,500.00" },
  ];

  const filteredBalances = balances.filter((balance) =>
    balance.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full h-full p-8 bg-gray-100">
      <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Saldos de Cuentas</h2>
          <div className="flex">
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
                <th className="px-4 py-2 text-left text-gray-600 border-b">NOMBRE DE CUENTA</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">MES</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">AÑO</th>
                <th className="px-4 py-2 text-left text-gray-600 border-b">SALDO</th>
              </tr>
            </thead>
            <tbody>
              {filteredBalances.length > 0 ? (
                filteredBalances.map((balance, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{balance.code}</td>
                    <td className="px-4 py-2 border-b">{balance.name}</td>
                    <td className="px-4 py-2 border-b">{balance.month}</td>
                    <td className="px-4 py-2 border-b">{balance.year}</td>
                    <td className="px-4 py-2 border-b">{balance.balance}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                    No se encontraron resultados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Paginación
      <div className="mt-6 mb-6">
        <Pagination
          totalPages={events?.data?.totalPages}
          hasNextPage={events?.data?.hasNextPage}
          hasPreviousPage={events?.data?.hasPreviousPage}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          setCurrentPage={setCurrentPage}
          handleCurrentPage={handleCurrentPage}
        />
      </div> */}
    </div>
    )
  }

 