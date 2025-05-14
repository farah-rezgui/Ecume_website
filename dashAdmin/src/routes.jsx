import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ShoppingCartIcon,       // Pour Produit
  UsersIcon,              // Pour Client
  ClipboardDocumentIcon,
  PlusCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Produit from "./pages/dashboard/produit";
import User from "./pages/dashboard/user";
import Commande from "./pages/dashboard/commande";
import AjouterProduit from "./pages/dashboard/AjouterProduit";
import { Route } from "react-router-dom";
import NewsLetter from "./pages/dashboard/newsLetter";
import Reservation from "./pages/dashboard/reservation";



// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAdminAuth();

  if (!isAdmin) {
    return <Navigate to='/admin/login' replace />;
  }

  return children;
};


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "produit",
        path: "/produit",
        element: <Produit />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "user",
        path: "/user",
        element: <User />,
      },
      {
        icon: <ClipboardDocumentIcon {...icon} />,
        name: "commande",
        path: "/commande",
        element: <Commande />,
      },
        {
        icon: <EnvelopeIcon {...icon} />, 
        name: "NewsLetterr",
        path: "/newsLetter",
        element: <NewsLetter />,
      },
              {
        icon: <EnvelopeIcon {...icon} />, 
        name: "Reservation",
        path: "/reservation",
        element: <Reservation />,
      },
      
    ],
  },

  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
