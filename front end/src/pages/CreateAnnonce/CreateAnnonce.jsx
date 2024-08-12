import React, { createContext, useState } from "react";
import Header from "../../components/Header2";
import { Outlet } from "react-router-dom";
import headerImg from "../../assets/blueKey.jpeg";
import { MdOutlineMicrowave } from "react-icons/md";

export const CreateAnnonceContext = createContext();

function CreateAnnonce() {
  const [part, setPart] = useState(1);
  // État pour les valeurs du formulaire
  const [formData, setFormData] = useState({
    titre: "",
    numero: "",
    description: "",
    adresse: "",
    faculte:
      "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
    photos: null,
    typeDeLocation: "MaisonEntiere",
    chambres: 2,
    prix: "",
    Equipment:[]
  });

  //tailwind style
  const cheked = "bg-custom-blue text-white leading-[19px]";
  const nonChecke =
    "text-gray-500  border-gray-500 border-2  bg-gray-100 leading-4";

  return (
    <div>
      <Header />

      <nav className="bg-gray-100 p-5">
        <p className="text-center text-sm font-semibold text-gray-500 ">
          Creer votre annonce :
          <span className="text-custom-blue ">
            {part === 1 ? "Etape 1" : "Etape 2"}
          </span>
        </p>

        <div className="flex flex-col justify-center max-w-80 w-full mx-auto relative">
          <hr className="border-gray-500 border-t-[1.6px] w-full  absolute z-10" />
          <div className="flex  w-full max-w-sm justify-between relative items-center z-10">
            <span
              className={`rounded-full    w-5 h-5 text-center text-sm font-medium ${
                part >= 1 ? cheked : nonChecke
              }`}
            >
              1
            </span>
            <span
              className={` rounded-full  w-5 h-5 text-center text-sm font-medium ${
                part === 2 ? cheked : nonChecke
              }`}
            >
              2
            </span>
          </div>
        </div>
      </nav>
      <CreateAnnonceContext.Provider value={{ formData, setFormData }}>
        <Outlet />
      </CreateAnnonceContext.Provider>
    </div>
  );
}

export default CreateAnnonce;
