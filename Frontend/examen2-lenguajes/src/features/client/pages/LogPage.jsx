import { useState } from "react";

export const LogPage = () => {
  const [search, setSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState(selectedCategory || "");
  // const [fetching, setFetching] = useState(true);

  const logs = [
    { action: "Creación", description: "Cuenta creada", userEmail: "usuario1@example.com", date: "2024-11-12" },
    { action: "Actualización", description: "Saldo actualizado", userEmail: "usuario2@example.com", date: "2024-11-12" },
    { action: "Eliminación", description: "Cuenta eliminada", userEmail: "usuario3@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario4@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario5@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario6@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario7@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario8@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario9@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario10@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario11@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario12@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario13@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario14@example.com", date: "2024-11-12" },
    { action: "Consulta", description: "Consulta de balances", userEmail: "usuario15@example.com", date: "2024-11-12" },
  ];

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

  const filteredLogs = logs.filter((log) => {
    return (
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.description.toLowerCase().includes(search.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col items-center w-full h-full p-8 bg-gray-100">
    <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Registro de Actividades</h2>
        <div className="flex">
          <input
            type="search"
            placeholder="Buscar registro..."
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
              <th className="px-4 py-2 text-left text-gray-600 border-b">Acción</th>
              <th className="px-4 py-2 text-left text-gray-600 border-b">Descripción</th>
              <th className="px-4 py-2 text-left text-gray-600 border-b">Correo del Usuario</th>
              <th className="px-4 py-2 text-left text-gray-600 border-b">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{log.action}</td>
                  <td className="px-4 py-2 border-b">{log.description}</td>
                  <td className="px-4 py-2 border-b">{log.userEmail}</td>
                  <td className="px-4 py-2 border-b">{log.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                  No se encontraron registros.
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

