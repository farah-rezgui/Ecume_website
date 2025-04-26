import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import AjouterProduit from "./AjouterProduit";
import ModifierProduit from "./ModifierProduit";
import { useNavigate } from "react-router-dom";

export function Produit() {
    const [produits, setProduits] = useState([]);
    const [openAdd, setOpenAdd] = useState(false);
    const[change,setChange]=useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedProduit, setSelectedProduit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleOpenAdd = () => setOpenAdd(!openAdd);
    
    const handleOpenEdit = (produit) => {
    setSelectedProduit(produit);
    setOpenEdit(!openEdit);
    };
    const handleChange = ()=>setChange(!change);

    const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedProduit(null);
    };

    const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/prod/deleteProduit/${id}`);
        fetchProduits(); // Rafraîchir la liste
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        setError("Erreur lors de la suppression du produit");
    }
    };

    const fetchProduits = async () => {
    try {
        const response = await axios.get("http://localhost:5000/prod/getAllProduit");
        if (response.status === 200) {
        setProduits(response.data.produitList);
        }
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    useEffect(() => {
    fetchProduits();

    }, [change]);
    

    if (loading) return <div>Chargement en cours...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
        {/* Dialogue pour ajouter un produit */}
        <Dialog open={openAdd} handler={handleOpenAdd} size="lg">
        <DialogHeader>Ajouter un nouveau produit</DialogHeader>
        <DialogBody>
            <AjouterProduit handleOpen={handleOpenAdd} fetchProduits={fetchProduits} />
        </DialogBody>
        </Dialog>

        {/* Dialogue pour modifier un produit */}
        <Dialog open={openEdit} handler={handleCloseEdit} size="lg">
        <DialogHeader>Modifier le produit</DialogHeader>
        <DialogBody>
            {selectedProduit && (
            <ModifierProduit 
                handleOpenAdd={handleCloseEdit} 
                produit={selectedProduit} 
                fetchProduits={fetchProduits} 
                changed={handleChange}            />
            )}
        </DialogBody>
        </Dialog>

        <Card>
        <CardHeader variant="gradient" color="white" className="mb-8 p-6 flex justify-between items-center">
            <Typography variant="h6" color="black">
            Liste de produits ({produits.length})
            </Typography>
            <Button 
            color="white" 
            size="sm"
            onClick={handleOpenAdd}
            >
            Ajouter un produit
            </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
            <thead>
                <tr>
                {["Titre", "Description", "Image", "Prix", "Stock", "Date création", "Actions"].map((el) => (
                    <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                        {el}
                    </Typography>
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {produits.map((produit) => (
                <tr key={produit._id}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                        {produit.titre}
                    </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Typography className="text-xs font-normal text-blue-gray-500 line-clamp-2">
                        {produit.description}
                    </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    {produit.image && (
                        <Avatar 
                        src={`http://localhost:5000${produit.image}`} 
                        alt={produit.titre} 
                        size="sm" 
                        variant="rounded" 
                        />
                    )}
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                        {produit.prix} DT
                    </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                        {produit.quantityStock}
                    </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Typography className="text-xs font-normal text-blue-gray-500">
                        {new Date(produit.createdAt).toLocaleDateString()}
                    </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex gap-2">
                        <Button
                        variant="text"
                        color="blue"
                        size="sm"
                        onClick={() => handleOpenEdit(produit) }

                        >
                        Modifier
                        </Button>
                        <Button
                        variant="text"
                        color="red"
                        size="sm"
                        onClick={() => handleDelete(produit._id)}
                        >
                        Supprimer
                        </Button>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </CardBody>
        </Card>
    </div>
    );
}

export default Produit;