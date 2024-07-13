import React from "react";
import logo from "../assets/logo.svg";
function Footer() {
  return (
    <div className="bg-footer-blue flex flex-col items-center mt-10">
      <div className="flex flex-wrap relative right-10  gap-x-10  m-16 items-start">
       
        <div className="flex bg-white items-center p-4 rounded gap-1 py-7 mr-10" >
          <img src={logo} width="70px" />
          <p className="text-center font-bold text-teal-900 text-2xl ">كريتي</p>
        </div>
        <div className="">
          <p className="text-white text    mb-1"> Publier une annonce</p>
          <p className="text-white text   mb-1">Recherche selon faculté</p>
          <p className="text-white text   mb-1">Recherche selon plage</p>
          <p className="text-white text  mb-1">Recherche selon ville</p>
        </div>
        <div>
          <p className="text-white text  mb-1">Qui somme nous ?</p>
          <p className="text-white text  mb-1" >Contacter nous </p>
        </div>
      </div>

      <hr class="w-[1200px] border-t-0.5 border-white mx-auto  " />
      <p className="text-white text-xs font-semibold my-1">
         
        © 2024 tous droite reservé un site de location de maison en tunisie
        -realisé par la socité MDAK-T 
      </p>
    </div>
  );
}

export default Footer;
