import React from "react";

function Card({ titre, photo, prix, typeLocation, dateCreation }) {
  return (
     
      <div className="max-w-xs bg-gray-100 rounded-xl shadow-md hover:shadow-xl">
        <img
          src={photo}
          className="object-cover h-44  w-full rounded-t-xl"
        />
        <div className="flex items-start  justify-between m-2 ">
          <div className="m-2">
            <p className="text-custom-blue  font-medium">{titre}</p>
            <p className="font-normal text-sm">{prix}</p>
            <p className="text-xs font-semibold text-gray-500 mt-4">{dateCreation}</p>
          </div>
          <p className="font-medium text-sm text-right text-custom-orange mt-3 w-14 leading-4">
            {typeLocation}
          </p>
        </div>
      </div>
     
  );
}

export default Card;
