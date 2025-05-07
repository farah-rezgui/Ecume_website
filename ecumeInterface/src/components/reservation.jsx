import React, { useState } from 'react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    hebergement: '',
    date: '',
    personnes: 1,
    age: '',
    experience: 'Débutant',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center relative justify-center p-4">
      <div className='absolute inset-0 bg-opacity-50 -z-10'>
        <img
          src='/public/images/bgFormulaire.jpg'
          alt='Archaeological site'
          className='w-full h-full opacity-75  object-cover '
        />
        
      </div>
      <form
        onSubmit={handleSubmit}
        className=" bg-opacity-20 p-8 rounded-xl shadow-xl w-full max-w-4xl grid md:grid-cols-2 gap-6"
      >
        <h2 className="md:col-span-2 text-4xl font-bold text-center text-white">
          Réservez Votre Expérience Culturelle
        </h2>

        <div>
          <label className="block text-2xl font-bold  text-white mb-1">Type d’hébergement</label>
          <select
            name="hebergement"
            value={formData.hebergement}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          >
            <option value="">Sélectionnez l’hébergement</option>
            <option value="camping">Camping</option>
            <option value="maison d’hôtes">Maison d’hôtes</option>
            <option value="auberge">Auberge</option>
          </select>
        </div>

        <div>
          <label className="block text-2xl font-bold text-white mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-2xl font-bold text-white mb-1">Nombre de personnes</label>
          <input
            type="number"
            name="personnes"
            min="1"
            value={formData.personnes}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-2xl font-bold text-white mb-1">Tranche d’âge</label>
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          >
            <option value="">Sélectionnez votre âge</option>
            <option value="18-25">18 - 25</option>
            <option value="26-40">26 - 40</option>
            <option value="41+">41 et plus</option>
          </select>
        </div>

        <div>
          <label className="block text-2xl font-bold text-white mb-1">Niveau d’expérience</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Réserver maintenant
        </button>
      </form>
    </div>
  );
}
