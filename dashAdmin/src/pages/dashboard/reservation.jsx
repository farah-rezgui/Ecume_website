import React, { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    typeHebergement: "",
    date: "",
    nombrePersonnes: 1,
    trancheAge: "",
    niveauExperience: "Débutant",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/reservations/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert("Réservation effectuée avec succès !");
    } catch (err) {
      alert("Erreur lors de la réservation");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <h1 className="text-white text-3xl font-bold mb-6 text-center">Réservez Votre Expérience Culturelle</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl bg-white bg-opacity-80 p-6 rounded-xl">
        <div>
          <label>Type d'hébergement</label>
          <select name="typeHebergement" value={formData.typeHebergement} onChange={handleChange} className="w-full p-2 rounded">
            <option value="">Sélectionnez l'hébergement</option>
            <option value="Maison d'hôtes">Maison d'hôtes</option>
            <option value="Camping">Camping</option>
            <option value="Chez l'habitant">Chez l'habitant</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 rounded" />
        </div>
        <div>
          <label>Nombre de personnes</label>
          <input type="number" name="nombrePersonnes" value={formData.nombrePersonnes} onChange={handleChange} className="w-full p-2 rounded" min="1" />
        </div>
        <div>
          <label>Tranche d'âge</label>
          <select name="trancheAge" value={formData.trancheAge} onChange={handleChange} className="w-full p-2 rounded">
            <option value="">Sélectionnez votre âge</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-50">36-50</option>
            <option value="51+">51+</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label>Niveau d'expérience</label>
          <select name="niveauExperience" value={formData.niveauExperience} onChange={handleChange} className="w-full p-2 rounded">
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Confirmé">Confirmé</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="bg-yellow-400 w-full py-3 rounded font-bold text-white">
            Réserver maintenant
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;