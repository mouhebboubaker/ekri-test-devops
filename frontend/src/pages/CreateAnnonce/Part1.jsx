import React, { useContext, useState } from "react";
import house from "../../assets/formHouse1.jpg";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CreateAnnonceContext } from "./CreateAnnonce";

function Part1() {
  const { formData, setFormData } = useContext(CreateAnnonceContext);
  console.log(formData);
  const navigate = useNavigate();

  // Fonction pour mettre à jour les champs du formulaire
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Affiche les données du formulaire dans la console
    navigate("part2");
  };

  return (
    <div className="flex justify-end items-center">
      <form
        className="flex flex-col max-w-2xl bg-gray-100 border-1 border-gray-500 border rounded m-20 p-5"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 mb-5">
          <div className="grow-[10]">
            <label className="text-sm">
              Titre<span className="text-red-600 font-bold"> *</span>
            </label>
            <input
              className="block outline outline-1 outline-gray-500 rounded text-sm p-1 w-full"
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleInputChange}
            />
          </div>
          <div className="grow-[1]">
            <label className="text-sm leading-3">
              Numero<span className="text-red-600 font-bold"> *</span>
            </label>
            <input
              className="block outline outline-1 outline-gray-500 rounded text-sm p-1 w-full"
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="text-sm">
            Description<span className="text-red-600 font-bold"> *</span>
          </label>
          <textarea
            className="inputCreate1"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-5">
          <label className="text-sm">
            Adresse<span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            className="inputCreate1"
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label className="text-sm">
            Faculté<span className="text-red-600 font-bold"> *</span>
          </label>
          <select
            className="inputCreate1"
            name="faculte"
            value={formData.faculte}
            onChange={handleInputChange}
          >
            <option value="Institut Supérieur d'Informatique et de Mathématiques de Monastir">
              Institut Supérieur d'Informatique et de Mathématiques de Monastir
            </option>
            <option value="Faculté de Science Monastir">
              Faculté de Science Monastir
            </option>
            <option value="Faculté de Medecine Monastir">
              Faculté de Medecine Monastir
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="outline-2 outline-custom-blue outline w-1/3 self-end rounded text-sm p-1 text-custom-blue font-medium hover:bg-custom-blue hover:text-gray-200 mt-4"
        >
          Suivant
        </button>
      </form>

      <img
        src={house}
        className="w-full max-w-[350px] rounded-full shadow-lg mr-36 hover:bg-custom-blue"
      />
    </div>
  );
}

export default Part1;
