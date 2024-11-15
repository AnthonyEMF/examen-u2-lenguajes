import {useState } from "react";
// import { useParams } from "react-router-dom";

export const TransactionDetails = () => {
    // const { id } = useParams(); // Suponiendo que pasas el ID de la partida como parámetro en la URL
    // const [partida, setPartida] = useState(null);
  
    // // Simulando la obtención de datos de una API o base de datos
    // useEffect(() => {
    //   // Aquí iría la llamada a la API para obtener los detalles de la partida por ID
    //   const fetchPartida = async () => {
    //     const response = await fetch(`/api/partidas/${id}`);
    //     const data = await response.json();
    //     setPartida(data);
    //   };
      
    //   fetchPartida();
    // }, [id]);
  
    // if (!partida) {
    //   return <div>Cargando...</div>;
    // }
    const [partida, setPartida] = useState({
      fecha: "2024-11-14",
      descripcion: "Pago de proveedor",
      entradas: [
        { cuenta: "Caja", tipo: "Débito", monto: "1000" },
        { cuenta: "Bancos", tipo: "Crédito", monto: "1000" },
        { cuenta: "Cuentas por Cobrar", tipo: "Crédito", monto: "1000" },
        { cuenta: "Inventario", tipo: "Crédito", monto: "1000" },
      ],
      totalDebito: 1000,
      totalCredito: 1000
    });

    const darDeBaja = async () => {
      try {
        // Aquí iría la llamada para eliminar la partida en la base de datos o API
        // Ejemplo: await fetch(`/api/partidas/${partida.id}`, { method: 'DELETE' });
  
        // Actualizamos el estado para simular la eliminación de la partida
        setPartida(null);
        
        // Mostrar la alerta
        alert("La partida ha sido eliminada.");
      } catch (error) {
        console.error("Error al dar de baja la partida:", error);
        alert("Hubo un error al intentar dar de baja la partida.");
      }
    };


  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Detalles de la Partida Contable</h1>

      <div className="flex space-x-4 mb-6">
        <div className="w-1/4">
          <label className="block text-sm font-medium text-gray-600">Fecha:</label>
          <input
            type="text"
            value={partida.fecha}
            readOnly
            className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-2/3">
          <label className="block text-sm font-medium text-gray-600">Descripción:</label>
          <input
            type="text"
            value={partida.descripcion}
            readOnly
            className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>
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

      <div className="flex mt-6 justify-center">
        <button
          onClick={darDeBaja}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Dar de Baja la Partida
        </button>
      </div>
    </div>
  )
}

