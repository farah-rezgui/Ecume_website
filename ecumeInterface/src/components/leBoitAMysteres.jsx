import React from 'react';

export default function LeBoiteAMysteres() {
  return (
    <div className="flex gap-16 justify-center min-h-screen bg-gray-100 p-4">
        <div><img
        src="/images/leBoitAMysteres.jpg"
        alt="Le Boîte à Mystères"
        className="w-80 h-auto rounded-lg shadow-lg mb-6"
      /></div>
      <div><h1 className="text-4xl font-bold text-yellow-600 mb-4">Le Boîte à Mystères</h1>
      <h2 className="text-xl text-gray-700 mb-6">صندوق عجب</h2>
      <h4>description</h4>
      <p className="text-xl text-gray-700 mb-6"> hello  </p>
      <a href="/FormulaireCommande">
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
        Commander
      </button></a></div>
      
    </div>
  );
}
