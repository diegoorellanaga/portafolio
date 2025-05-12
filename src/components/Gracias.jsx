import React from "react";
import { Link } from "react-router-dom";

const Gracias = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-green-700">¡Gracias por tu mensaje!</h1>
      <p className="text-gray-700 mb-6">Te responderé lo antes posible. ¡Hablemos pronto!</p>
      <Link
        to="/"
        className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default Gracias;