import React, { useState } from 'react';

export default function FormulaireCommande() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    adresse: '',
    numero: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Commande envoyée :', formData);
    // Ici tu peux envoyer les données au backend avec Axios ou fetch
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6    bg-opacity-30 shadow-lg  rounded-xl">
          <div className='absolute inset-0 -z-10'>
        <img
          src='/public/images/bgComande.jpg'
          alt='Archaeological site'
          className='w-full h-full object-cover'

        />  </div>
        <h2 className="text-2xl font-bold text-center text-black-600 mb-6">Commander le Jeu</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block text-black-700 font-semibold mb-1">Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full border border-black-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-black-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-black-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-black-700 font-semibold mb-1">Adresse</label>
          <textarea
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            required
            className="w-full border border-black-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-black-700 font-semibold mb-1">Numéro de téléphone</label>
          <input
            type="tel"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
            className="w-full border border-black-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Envoyer la commande
        </button>
      </form>
        
      
    </div>
  );
}
