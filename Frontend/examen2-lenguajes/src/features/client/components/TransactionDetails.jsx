import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TransactionDetails = () => {
    const { id } = useParams(); // Suponiendo que pasas el ID de la partida como parámetro en la URL
    const [partida, setPartida] = useState(null);
  
    // Simulando la obtención de datos de una API o base de datos
    useEffect(() => {
      // Aquí iría la llamada a la API para obtener los detalles de la partida por ID
      const fetchPartida = async () => {
        const response = await fetch(`/api/partidas/${id}`);
        const data = await response.json();
        setPartida(data);
      };
      
      fetchPartida();
    }, [id]);
  
    if (!partida) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Detalles de la Partida Contable</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Fecha:</label>
          <input
            type="text"
            value={partida.fecha}
            readOnly
            className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>
  
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Descripción:</label>
          <input
            type="text"
            value={partida.descripcion}
            readOnly
            className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>
  
        <h2 className="text-xl font-semibold mt-6 mb-4">Entradas</h2>
        <div className="space-y-4">
          {partida.entradas.map((entrada, index) => (
            <div key={index} className="flex space-x-4">
              <div className="w-1/3">
                <label className="block text-sm font-medium text-gray-600">Cuenta:</label>
                <input
                  type="text"
                  value={entrada.cuenta}
                  readOnly
                  className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
  
              <div className="w-1/3">
                <label className="block text-sm font-medium text-gray-600">Tipo:</label>
                <input
                  type="text"
                  value={entrada.tipo}
                  readOnly
                  className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
  
              <div className="w-1/3">
                <label className="block text-sm font-medium text-gray-600">Monto:</label>
                <input
                  type="text"
                  value={entrada.monto}
                  readOnly
                  className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-6 flex justify-between">
          <div>
            <span className="text-sm font-medium text-gray-600">Total Débito:</span>
            <span className="font-semibold">{partida.totalDebito}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-600">Total Crédito:</span>
            <span className="font-semibold">{partida.totalCredito}</span>
          </div>
        </div>
      </div>
  )
}

