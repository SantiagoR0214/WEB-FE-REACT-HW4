// src/components/Dofa.jsx
import React from 'react';

const dofaData = [
  { id: 1, type: "Oportunidades", items: [
    { id: 1, description: "Aumento en la demanda de productos en el mercado" },
    { id: 2, description: "Interés creciente en productos fabricados localmente" },
    { id: 3, description: "Posibilidad de entrar en nuevos segmentos de mercado" },
  ]},
  { id: 2, type: "Amenazas", items: [
    { id: 1, description: "Intensificación de la competencia en el sector" },
    { id: 2, description: "Inestabilidad económica que podría afectar operaciones" },
    { id: 3, description: "Riesgo de modificaciones en las normativas legales" },
  ]},
  { id: 3, type: "Debilidades", items: [
    { id: 1, description: "Visibilidad limitada en plataformas de redes sociales" },
    { id: 2, description: "Dependencia de un número reducido de clientes clave" },
    { id: 3, description: "Oferta de productos con poca diversidad" },
  ]},
  { id: 4, type: "Fortalezas", items: [
    { id: 1, description: "Productos de alta calidad reconocida" },
    { id: 2, description: "Sólidas relaciones con nuestros proveedores" },
    { id: 3, description: "Equipo altamente cualificado y comprometido" },
  ]},
];

const Dofa = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-t border-gray-300">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Análisis DOFA</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {dofaData.map((section) => (
          <div key={section.id} className="bg-white shadow-md rounded-xl border border-gray-200 p-6 max-w-xs">
            <div className={`p-4 mb-4 text-white rounded-t-xl ${section.type === 'Fortalezas' ? 'bg-green-500' : section.type === 'Debilidades' ? 'bg-red-500' : section.type === 'Oportunidades' ? 'bg-yellow-500' : 'bg-blue-500'}`}>
              <h3 className="text-2xl font-semibold">{section.type}</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.items.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dofa;
