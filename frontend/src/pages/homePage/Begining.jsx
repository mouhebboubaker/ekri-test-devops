import React, { useContext, useState } from "react";
import HeaderHouse from "../../assets/HeaderHouse.png";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";

function  Begining() {

  const[option,setOption]=useState("Faculte");
  const[value,setValue]=useState("Institut Supérieur d'Informatique et de Mathématiques de Monastir");
  const navigate = useNavigate();
  const {maisons,setMaisons}=useContext(DataContext)





  const hundleSubmit=(event)=>{
    event.preventDefault();
    const filtredMaisons = maisons.filter((maisonObj) => {
      return  option in maisonObj && maisonObj[option] === value;
    });
    setTimeout(() => { 
      setMaisons(filtredMaisons);
    }, 2000);
    navigate("/Annonces");
  }
 

  
  return (
    <div className="w-full h-full+   relative   overflow-hidden ">
      <img
        className="absolute w-full h-full object-cover "
        src={HeaderHouse}
        alt="HeaderHouse"
      ></img>
      <div
        className="relative  z-10 my-44 w-full  sm:max-w-[360px]   sm:mx-80 px-10 py-6  
     bg-gradient-to-b from-custom-indigo/90  to-custom-cyan/90 rounded-[5px]  "
      >
        <p className="text-white text-xl font-bold">
          Trouvrer votre maison facilment{" "}
        </p>

        <form className="flex flex-col" onSubmit={(event)=>{hundleSubmit(event)}}>
          <div className="mt-11">
            <label className="text-white text-sm  font-normale">
              Rercherche selon:
            </label>

            <div className="flex justify-between mt-2">
              <div className="text-center   bg-zinc-300 p-1 py-2 w-[85px] rounded-md  text-neutral-800 text-sm font-normale hover:bg-green-50" onClick={()=>{setOption("Faculte")}}>
                <p>Faculté</p>
              </div>
              <div className="text-center   bg-zinc-300 p-1 py-2 w-[85px] rounded-md     text-neutral-800 text-sm font-normale hover:bg-green-50" onClick={()=>{setOption("Plage")}}>
                <span>Plage</span>
              </div>
              <div className="text-center   bg-zinc-300 p-1 py-2 w-[85px] rounded-md     text-neutral-800 text-sm font-normale  hover:bg-green-50" onClick={()=>{setOption("Ville")}}>
                Ville
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label className="text-white text-sm font-normale">
              Choisir selon votre choix:
            </label>
            <select id="myselect" className="w-full p-2 mt-2 bg-zinc-300 text-neutral-800 text-sm font-sm border-none rounded" onChange={(e)=>setValue(e.target.value)}  >
              <option    value="Institut Supérieur d'Informatique et de Mathématiques de
                Monastir">
                Institut Supérieur d'Informatique et de Mathématiques de
                Monastir
              </option>
              <option value="Faculté des Sciences à Monastir">Faculté des Sciences à Monastir</option>
              <option value="École Préparatoire à Monastir">École Préparatoire à Monastir</option>
            </select>
          </div>

          <button className="self-end mt-16 mb-5 border border-stone-300 bg-custom-lime hover:bg-[#6E8B8A] transition-colors duration-300 text-white text-sm font-normal rounded-md p-2"
          type="submit">
            Chercher
          </button>
        </form>
      </div>
    </div>
  );
}

export default Begining;
