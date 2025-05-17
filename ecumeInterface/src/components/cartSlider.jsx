import React, { useState, useEffect } from "react";

const CartSlider = ({ isOpen, onClose }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState({ produit: [], total: 0 }); // State to store cart details

  // Function to fetch the cart details
  const fetchCart = async () => {
    const id_cart = localStorage.getItem("cart_id"); // Get cart_id from localStorage
    if (!id_cart) {
      console.error("Cart ID not found in localStorage.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/cart/getCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_cart }),
      });
      const data = await response.json();
      if (data && data.produit) {
        // Calculate the total price
        const total = data.produit.reduce(
          (sum, item) => sum + item._id.prix * item.quantity,
          0
        );
        setCart({ produit: data.produit, total });
      } else {
        console.error("Failed to fetch cart details:", data);
      }
    } catch (error) {
      console.error("Error fetching cart details:", error);
    }
  };

  // Function to delete an item from the cart
  const deleteFromCart = async (id_produit) => {
    const id_cart = localStorage.getItem("cart_id"); // Get cart_id from localStorage
    if (!id_cart) {
      console.error("Cart ID not found in localStorage.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/cart/deleteFromCart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_cart, id_produit }),
      });
      const data = await response.json();
      if (data.success) {
        console.log("Item deleted successfully:", id_produit);
        fetchCart(); // Refresh the cart after deletion
      } else {
        console.error("Failed to delete item from cart:", data);
      }
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  // Fetch the cart details when the slider is opened
  useEffect(() => {
    if (isOpen) {
      fetchCart();
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Votre Panier</h2>
          <button
            onClick={onClose}
            className="text-gray-500 transition-colors hover:text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cart.produit.length === 0 ? (
            <p className="mt-8 text-center text-gray-500">
              Votre panier est vide
            </p>
          ) : (
            <div className="space-y-4">
              {cart.produit.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-4 border-b"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={`/public/images/${item._id.image}`}
                      alt={item._id.titre}
                      className="object-cover w-16 h-16 rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item._id.titre}</h3>
                      <p className="text-gray-500">
                        {item.quantity} x {item._id.prix} DT
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteFromCart(item._id._id)} // Pass the product ID to delete
                    className="text-red-500 transition-colors hover:text-red-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 mt-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-xl font-bold">{cart.total} DT</span>
          </div>
          <button
            onClick={() => setShowCheckout(true)}
            disabled={cart.produit.length === 0}
            className={`w-full bg-yellow py-3 text-black font-semibold transition-colors duration-300 ${cart.produit.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
              }`}
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;