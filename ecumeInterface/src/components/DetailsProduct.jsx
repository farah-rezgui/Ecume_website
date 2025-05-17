import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CartSlider from "./cartSlider";

export default function DetailsProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store product details
  const [quantity, setQuantity] = useState(1); // State to track selected quantity
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch product details by ID
    fetch(`http://localhost:5000/prod/getProduitById/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.produit);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    const id_cart = localStorage.getItem("cart_id"); // Get cart_id from localStorage
    if (!id_cart) {
      alert("Cart not initialized. Please refresh the page.");
      return;
    }

    const payload = {
      id_cart,
      id_produit: product._id,
      quantity: parseInt(quantity, 10),
    };

    fetch("http://localhost:5000/cart/addToCart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsCartOpen(true)
        } else {
          alert("Failed to add product to cart.");
        }
      })
      .catch((error) => console.error("Error adding product to cart:", error));
  };
  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className='flex flex-col justify-center gap-16 p-4 mx-auto rounded-lg bg-gray-50 mt-36 max-w-7xl md:flex-row'>
      <div>
        <img
          src={`/public/images/${product.image}`}
          alt={product.title}
          className='w-3/5 h-auto mx-auto mb-6 rounded-lg shadow-lg md:w-full'
        />
      </div>
      <div>
        <h1 className='mb-2 text-4xl font-bold text-yellow-600'>
          {product.titre}
        </h1>
        <h2 className='mb-2 text-2xl font-bold'>{product.description}</h2>
        <h2 className='mb-2 text-xl font-semibold text-gray-800'>Prix: {product.prix} TND</h2>
        <h2>Description</h2>
        <p className='mb-6 text-xl text-gray-700'>{product.body}</p>

        {/* Quantity Selector */}
        <div className='mb-4'>
          <label htmlFor='quantity' className='block mb-2 text-lg font-semibold'>
            Quantité:
          </label>
          <select
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='px-4 py-2 border rounded-lg'
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleAddToCart}
          className='px-6 py-2 font-semibold text-white transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500'>
          Commander
        </button>

        <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      </div>

    </div>

  );
}
