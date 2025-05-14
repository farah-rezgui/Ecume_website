import React from "react";
import { useParams } from "react-router-dom";
import prods from "../assets/products.json";

export default function DetailsProduct() {
  const { id } = useParams();
  const product = prods.products.find((p) => p.id == id);
  return (
    <div className='flex gap-16  justify-center  bg-gray-50 p-4 mt-36 max-w-7xl mx-auto flex-col md:flex-row rounded-lg'>
      <div>
        <img
          src={product.image}
          alt={product.title}
          className='md:w-full w-3/5  h-auto rounded-lg shadow-lg mb-6 mx-auto'
        />
      </div>
      <div>
        <h1 className='text-4xl font-bold text-yellow-600 mb-2'>
          {product.title}
        </h1>
        <h2 className='text-2xl font-bold  mb-2'>{product.description}</h2>
        <h2>Description</h2>
        <p className='text-xl text-gray-700 mb-6'> {product.body}</p>

        <a href='/FormulaireCommande'>
          <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300'>
            Commander
          </button>
        </a>
      </div>
    </div>
  );
}
