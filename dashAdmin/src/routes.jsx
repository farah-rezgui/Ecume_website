import { useEffect, useState } from "react";

export default function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    const res = await fetch("http://localhost:5000/reservation/all");
    const data = await res.json();
    setReservations(data);
    setLoading(false);
  };

  const deleteReservation = async (id) => {
    if (window.confirm("Voulez-vous supprimer cette réservation ?")) {
      await fetch(`http://localhost:5000/reservation/delete/${id}`, {
        method: "DELETE",
      });
      fetchReservations();
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Liste des Réservations</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Hébergement</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Personnes</th>
            <th className="p-2 border">Tranche d’âge</th>
            <th className="p-2 border">Niveau</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r._id} className="text-center border-t">
              <td className="p-2 border">{r.hebergement}</td>
              <td className="p-2 border">{new Date(r.date).toLocaleDateString()}</td>
              <td className="p-2 border">{r.nombrePersonnes}</td>
              <td className="p-2 border">{r.trancheAge}</td>
              <td className="p-2 border">{r.niveauExperience}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteReservation(r._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
