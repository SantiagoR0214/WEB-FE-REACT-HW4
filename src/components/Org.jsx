// src/components/OrganizationalIdentity.jsx
import React from 'react';

const Org = () => {
  return (
    <section className="p-6 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md m-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Identidad Organizacional</h2>
      <div className="space-y-6">
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Misión</h3>
          <p className="text-gray-600">
            Proveer productos de alta calidad que satisfagan las necesidades de nuestros clientes, basados en innovación y sostenibilidad.
          </p>
        </div>
        
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Visión</h3>
          <p className="text-gray-600">
            Ser líderes en el mercado nacional e internacional, ofreciendo productos únicos que promuevan la sostenibilidad.
          </p>
        </div>
        
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Políticas Corporativas</h3>
          <p className="text-gray-600">
            Cumplir con los más altos estándares de calidad y responsabilidad social, garantizando el bienestar de nuestros empleados y el medio ambiente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Org;
