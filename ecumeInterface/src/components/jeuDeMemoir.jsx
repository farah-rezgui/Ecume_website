import React from 'react';

export default function JeuDeMemoir() {
  return (

    <div className="flex gap-16   justify-center min-h-screen bg-gray-50 p-4">
        <div><img
        src="/images/jeuDeMemoir.jpg"
        alt="Jeu De Mémoire"
        className="w-80 h-auto rounded-lg shadow-lg mb-6"
      /></div>
      <div>
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">Jeu De Mémoire</h1>
      <h2 className="text-xl text-gray-700 mb-6">فردة و لقات اختها</h2>
      <h4>description</h4>
      <p className="text-xl text-gray-700 mb-6"> ndjanofkjnzokcksdncjlkqsdvlknqsdmkvnkndvklsqdvnkdnvkjiovkjz,epo,vkjevjempvje</p>
      
      <a href="/FormulaireCommande">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
        Commander
      </button>
      </a>
      </div>
        
      
    </div>
    
  );
}
