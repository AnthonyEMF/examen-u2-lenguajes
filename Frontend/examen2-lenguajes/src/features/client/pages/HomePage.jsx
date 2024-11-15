import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center content-center w-full">
      <div className="max-w-5xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sis-Pa-Co</h1>
        <p className="text-xl text-center mb-6">Sistema de Partidas Contables</p>
        <div className="grid grid-cols-1 mt-14 md:grid-cols-2 gap-6">
          {/* Catálogo de Cuentas */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Catálogo de Cuentas</h2>
            <p className="text-gray-500 mb-6">Gestiona el catálogo de cuentas de tu sistema contable.</p>
            <Link to="/catalogs" className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Ver Catálogo
            </Link>
          </div>

          {/* Partidas Contables */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Partidas Contables</h2>
            <p className="text-gray-500 mb-6">Crea y gestiona las partidas contables fácilmente.</p>
            <Link to="/transactions" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Ir a Partidas
            </Link>
          </div>

          {/* Saldos */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Saldos de Cuentas</h2>
            <p className="text-gray-500 mb-6">Consulta los saldos actuales de tus cuentas.</p>
            <Link to="/balances" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Ver Saldos
            </Link>
          </div>

          {/* Logs */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Registro de Cambios</h2>
            <p className="text-gray-500 mb-6">Revisa el historial de cambios en los saldos y cuentas.</p>
            <Link to="/logs" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Ver Logs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
