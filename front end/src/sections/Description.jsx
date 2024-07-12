import React from "react";
import ai from "../assets/ai.svg";
import motivation from "../assets/motivation.svg";

function Description() {
  return (
    <div className="flex flex-wrap px-40 py-24 ">
      
      <div className="w-full flex justify-between items-center flex-wrap max-2xl:justify-center" >
      
      <div className="">
        <p className="mb-5 font-bold font-Inika  text-3xl text-custom-lime">Que propose notre site :</p>
        <p className="sm:max-w-2xl">
          Êtes-vous un étudiant à la recherche d'une maison près de votre
          faculté ou d'un binôme ? Êtes-vous un vacancier qui cherche une maison
          près de la plage, ou toute autre personne en quête d'un logement ?
          Notre site vous facilite la recherche de votre maison selon vos
          besoins. Vous pouvez chercher selon plusieurs filtres (prix,
          localisation, proximité de la plage ou de la faculté, équipements,
          etc.). Vous pouvez également publier une annonce pour attirer un
          client.
        </p>
      </div>
      <img src={motivation} alt="motivation" className="my-10"></img>
      
      </div>

      <div className="flex justify-center w-full flex-wrap mt-24 ">
      <div className="sm:max-w-md  relative right-5 ">
        <p className="mb-5 font-bold font-Inika  text-3xl text-custom-lime">de plus :</p>
        <p>
          Si vous avez une maison et hésitez sur le prix, <br/>ne vous inquiétez pas,
          ekri.tn vous propose une estimation de votre mai son.  En utilisant
          l'intelligence artificielle et en se basant sur différents critères
          tels que la localisation et les photos, nous vous offrons une
          estimation précise.
        </p>
      </div>

      <img src={ai} className="mr-24 mt-10" alt="ai" width="300px" ></img>
      </div>
    </div>
  );
}

export default Description;
