import React from "react";
import axios from "axios";

function Card({item , photo }) {
 
  const deleteMaison = async (id) => {
    console.log(id)
    try {
      const response = await axios.delete(`http://localhost:3500/maisons/${id}`);
      console.log(response.data); // Affiche le message de succès
    } catch (error) {
      console.error('Erreur lors de la suppression de la maison:', error.response ? error.response.data : error.message);
    }
    
  };


  return (
     
      <div className="max-w-xs bg-gray-100 rounded-xl shadow-md hover:shadow-xl flex-shrink-0 w-[270px]" onClick={()=>{deleteMaison(item._id)}}>
        <img
          src={photo}
          className="object-cover h-44  w-full rounded-t-xl"
        />
        <div className="flex items-start  justify-between m-2 ">
          <div className="m-2">
            <p className="text-custom-blue  font-medium">{item.titre}</p>
            <p className="font-normal text-sm">{item.prix}</p>
            <p className="text-xs font-semibold text-gray-500 mt-4">{"créé le "}{new Date(item.createdAt).toLocaleDateString()}</p>
          </div>
          <p className="font-medium text-sm text-right text-custom-orange mt-3 w-15 leading-4">
            {item.typeDeLocation}
          </p>
        </div>
      </div>
     
  );
}

export default Card;
