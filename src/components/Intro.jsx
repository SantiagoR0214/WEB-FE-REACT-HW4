// src/components/Introduction.jsx
import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction" className="bg-gray-50 p-8 text-center border-b border-gray-300">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Introducción</h2>
      <p className="text-gray-800 leading-relaxed max-w-3xl mx-auto">
        Este proyecto define nuestra estrategia para el desarrollo y posicionamiento de una innovadora marca de relojes inteligentes. Nuestro objetivo es ofrecer dispositivos que integren tecnología avanzada con un diseño moderno, mejorando la vida de los usuarios mediante funciones inteligentes, personalización y bienestar.
        <br /><br />
        Con un análisis DOFA detallado, evaluaremos nuestras fortalezas y oportunidades internas, así como los retos que presenta un entorno tecnológico en constante cambio. Este enfoque nos permitirá establecer objetivos claros y desarrollar un plan de acción estratégico que posicione nuestra marca como líder en el mercado de wearables, optimizando la experiencia del usuario y expandiendo nuestro alcance global.
      </p>
    </section>
  );
};

export default Introduction;
