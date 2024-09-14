// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-teal-900 p-6 text-center text-white border-t-4 border-teal-600">
      <div className="container mx-auto">
        <p className="text-sm">
          © 2024 <span className="font-semibold">Tu Empresa</span> - Todos los derechos reservados.
        </p>
        <p className="mt-2 text-xs">
          <a href="https://www.tuempresa.com/privacy" className="hover:underline">Política de Privacidad</a> | 
          <a href="https://www.tuempresa.com/terms" className="hover:underline"> Términos de Servicio</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
