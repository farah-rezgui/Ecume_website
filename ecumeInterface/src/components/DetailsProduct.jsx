import React from 'react';

export default function DetailsProduct() {
return (

    <div className="flex gap-16  justify-center min-h-screen bg-gray-50 p-4">
        <div><img
        src="/images/jeuDeMemoir.jpg"
        alt="Jeu De Mémoire"
        className="w-80 h-auto rounded-lg shadow-lg mb-6"
    /></div>
    <div>
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">Jeu de mémoire "فردة و لقات أختها"</h1>
    <h2>description</h2>
    <p className="text-xl text-gray-700 mb-6"> Plongez-vous dans la culture tunisienne avec ce jeu de mémoire captivant ! Retrouvez les paires d'habits traditionnels ou accessoires tunisiens identiques tout en vous amusant. Testez votre mémoire tout en explorant la beauté et la diversité des costumes régionaux tunisiens.</p>
    
    <a href="/FormulaireCommande">
    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
        Commander
    </button>
    </a>
    </div>
        
    
    </div>
    
);
}
