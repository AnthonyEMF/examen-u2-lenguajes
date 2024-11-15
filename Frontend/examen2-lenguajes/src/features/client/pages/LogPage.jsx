export const LogPage = () => {
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

  return (
    <div className="flex flex-col items-center w-full h-full p-8 bg-gray-100">
      <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md">
        <div className="pb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Registro de Actividades</h2>
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
              {logs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{log.action}</td>
                  <td className="px-4 py-2 border-b">{log.description}</td>
                  <td className="px-4 py-2 border-b">{log.userEmail}</td>
                  <td className="px-4 py-2 border-b">{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
