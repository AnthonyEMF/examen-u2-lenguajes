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
  const [search, setSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState(selectedCategory || "");
  // const [fetching, setFetching] = useState(true);

  const filteredTransactions = initialTransactions.filter(transaction =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

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

  return (
    <div className="flex flex-col items-center w-full h-full p-4 bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between pb-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Partidas Contables</h1>
          <input
            type="text"
            placeholder="Buscar partida..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>
        
        <table className="min-w-full divide-y divide-gray-200 mt-6">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 border-b">
                NÚMERO
              </th>
              <th className="px-4 py-2 text-left text-gray-600 border-b">
                DESCRIPCIÓN
              </th>
              <th className="px-4 py-2 text-left text-gray-600 border-b">
                ESTADO
              </th>
              <th className="px-4 py-2 text-left text-gray-600 border-b">
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/transactions-details/:id`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                  No se encontraron resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Link
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
        to="/post/transactions"
      >
        + Crear Partida
      </Link>

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
  );
};
