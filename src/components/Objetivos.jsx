// src/components/StrategicGoals.jsx
import React from 'react';

const goalsData = [
  { id: 1, goal: "Aumentar nuestra participación en el mercado", target: 100, progress: 25, compliance: 25 },
  { id: 2, goal: "Incrementar las ventas totales", target: 150000, progress: 50000, compliance: 33 },
  { id: 3, goal: "Expandirnos a nuevos mercados", target: 100, progress: 80, compliance: 80 },
  { id: 4, goal: "Reducir los costos operativos", target: 50000, progress: 20000, compliance: 40 },
  { id: 5, goal: "Mejorar la satisfacción de nuestros clientes", target: 100, progress: 100, compliance: 100 },
];

const getStatus = (compliance) => {
  if (compliance <= 30) return "Crítico";
  if (compliance <= 70) return "Aceptable";
  return "Exitoso";
};

const StrategicGoals = () => {
  return (
    <section className="p-6 bg-white border-2 border-gray-300 rounded-lg shadow-md mt-6 mx-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Objetivos Estratégicos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-200 border-b-2 border-gray-300">
            <tr>
              <th className="px-4 py-2 font-semibold text-gray-600">Código</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Objetivo</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Meta</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Avance</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Cumplimiento</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {goalsData.map((goal) => (
              <tr key={goal.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-700">{goal.id}</td>
                <td className="px-4 py-2 text-gray-700">{goal.goal}</td>
                <td className="px-4 py-2 text-gray-700">{goal.target.toLocaleString()}</td>
                <td className="px-4 py-2 text-gray-700">{goal.progress.toLocaleString()}</td>
                <td className="px-4 py-2 text-gray-700">{goal.compliance}%</td>
                <td className={`px-4 py-2 font-semibold ${getStatus(goal.compliance) === "Crítico" ? "text-red-600" : getStatus(goal.compliance) === "Aceptable" ? "text-yellow-600" : "text-green-600"}`}>
                  {getStatus(goal.compliance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StrategicGoals;
