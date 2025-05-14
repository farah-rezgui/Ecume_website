import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spinner,
  Alert,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export function NewsLetter() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emailToDelete, setEmailToDelete] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/newsletter/getNewsletter");

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      setEmails(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEmail = async () => {
    if (!emailToDelete) return;

    try {
      setDeleteLoading(true);
      const response = await fetch(`http://localhost:5000/newsletter/delete/${emailToDelete._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      await fetchEmails();
      setOpenDeleteDialog(false);
      setEmailToDelete(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  const openDeleteConfirmation = (email) => {
    setEmailToDelete(email);
    setOpenDeleteDialog(true);
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 mx-4">
        <Alert color="red" className="mb-4">
          Erreur : {error}
        </Alert>
        <Button onClick={fetchEmails} className="mt-4 flex items-center gap-2">
          <ArrowPathIcon className="h-5 w-5" />
          Réessayer
        </Button>
      </div>
    );
  }

  if (!emails || emails.length === 0) {
    return (
      <Alert color="blue" className="mx-auto max-w-screen-md mt-8">
        Aucun email trouvé dans la newsletter.
      </Alert>
    );
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="white" className="mb-8 p-6">
          <Typography variant="h6" color="black">
            Liste des Emails Newsletter ({emails.length})
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                    Email
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                    Actions
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, key) => (
                <tr key={key}>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Typography className="text-sm font-medium text-blue-gray-700">{email.email}</Typography>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Button
                      variant="text"
                      color="red"
                      onClick={() => openDeleteConfirmation(email)}
                      className="flex items-center gap-2"
                    >
                      <TrashIcon className="h-5 w-5" />
                      Supprimer
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Dialog open={openDeleteDialog} handler={() => setOpenDeleteDialog(false)}>
        <DialogHeader>Supprimer l'email</DialogHeader>
        <DialogBody divider>
          Êtes-vous sûr de vouloir supprimer l'email :{" "}
          <span className="font-bold text-red-600">{emailToDelete?.email}</span> ?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={() => setOpenDeleteDialog(false)} className="mr-2">
            Annuler
          </Button>
          <Button variant="gradient" color="red" onClick={handleDeleteEmail} disabled={deleteLoading}>
            {deleteLoading ? (
              <div className="flex items-center gap-2">
                <Spinner className="h-4 w-4" />
                <span>Suppression...</span>
              </div>
            ) : (
              "Supprimer"
            )}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default NewsLetter;
