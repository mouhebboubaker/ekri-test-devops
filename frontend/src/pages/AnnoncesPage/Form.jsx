import React, { useState, useEffect } from "react";

function Form() {
  const [options, setOptions] = useState({
    faculte: null,
    typeLocation: {
      maisonEntiere: false,
      chambreIndivielle: false,
      chambreAPartage: false,
    },
    prix: { minimum: null, maximum: null },
    chambres: { _1: false, _2: false, _3: false, _3plus: false },
    equipmentDeBase: {
      wifi: false,
      four: false,
      chauffage: false,
      machineALave: false,
      climatiseur: false,
    },
  });

  useEffect(() => {
    const faculteElement = document.getElementById("id");

    setOptions((prevOptions) => ({
      ...prevOptions,
      faculte: faculteElement.value,
    }));
    console.log(options);
  }, []);

  const handleChange = (event, option, subOption) => {
    //change the state of the option and then redo the filter and set maisons , we gonna use filter of the json-server

    const modOptions = { ...options };
    if (option === "faculte") {
      modOptions[option] = event.target.value;
    } else if (option === "prix") {
      modOptions[option][subOption] = event.target.value;
    } else {
      modOptions[option][subOption] = !options[option][subOption];
    }
    setOptions(modOptions);
    console.log(modOptions);
  };

  return (
    <div className="max-w-64 rounded-xl bg-gray-200 p-5 space-y-5 sm:sticky top-5 flex-shrink-0  ml-20">
      <div>
        <label className="labelForm">Faculté</label>
        <select
          id="id"
          className={`inputFrom   text-custom-blue w-full focus:text-black`  }
          value={options.faculte}
          onChange={(e) => handleChange(e, "faculte")}
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

      <div>
        <label className="labelForm">Type de location</label>
        <div className="flex flex-col items-start space-y-1 ml-1">
          <div
            className={`inputFrom ${(options.typeLocation.maisonEntiere)?"bg-blue-900 text-white":"hover:bg-cyan-100"} `}
            onClick={(e) => handleChange(e, "typeLocation", "maisonEntiere")}
          >
            Maison entiere
          </div>
          <div
            className={`inputFrom ${(options.typeLocation.chambreIndivielle)?"bg-blue-900 text-white":"hover:bg-cyan-100"} `}
            onClick={(e) =>
              handleChange(e, "typeLocation", "chambreIndivielle")
            }
          >
            Chambre individuelle
          </div>
          <div
            className={`inputFrom ${(options.typeLocation.chambreAPartage)?"bg-blue-900 text-white":"hover:bg-cyan-100"} `}
            onClick={(e) => handleChange(e, "typeLocation", "chambreAPartage")}
          >
            Chambre a partagé
          </div>
        </div>
      </div>

      <div>
        <label className="labelForm">prix</label>
        <div className="ml-1 flex gap-[2px]">
          <input
            className={`inputFrom ${(options.prix.minimum)?"bg-blue-900 text-white":"hover:bg-cyan-100"} placeholder:text-custom-blue rounded-r-none w-1/2`} 
            type="number"
            placeholder="minimum"
            value={options.prix.minimum}
            onChange={(e) => handleChange(e, "prix", "minimum")}
          />
          <input
            className={`inputFrom ${(options.prix.maximum)?"bg-blue-900 text-white":"hover:bg-cyan-100"} placeholder:text-custom-blue rounded-l-none w-1/2`} 
            type="number"
            placeholder="maximum"
            value={options.prix.maximum}
            onChange={(e) => handleChange(e, "prix", "maximum")}
          />
        </div>
      </div>

      <div>
        <label className="labelForm">Chambres</label>
        <div ml-1 className="flex gap-[2px] justify-center">
          <span
            className={`inputFrom ${(options.chambres._1)?"bg-blue-900 text-white":"hover:bg-cyan-100"} rounded-r-none  w-5 text-center`} 
            onClick={(e) => handleChange(e, "chambres", "_1")}
          >
            1
          </span>
          <span
            className={`inputFrom ${(options.chambres._2)?"bg-blue-900 text-white":"hover:bg-cyan-100"} rounded-none  w-5 text-center`} 
            onClick={(e) => handleChange(e, "chambres", "_2")}
          >
            2
          </span>
          <span
            className={`inputFrom ${(options.chambres._3)?"bg-blue-900 text-white":"hover:bg-cyan-100"} rounded-none  w-5 text-center`} 
            onClick={(e) => handleChange(e, "chambres", "_3")}
          >
            3
          </span>
          <span
            className={`inputFrom ${(options.chambres._3plus)?"bg-blue-900 text-white":"hover:bg-cyan-100"} rounded-l-none text-center`} 
            onClick={(e) => handleChange(e, "chambres", "_3plus")}
          >
            3+
          </span>
        </div>
      </div>

      <div>
        <label className="labelForm">Equipment de base</label>
        <div className="flex flex-wrap gap-2 ml-1 justify-center">
          <div
            className={`inputFrom ${(options.equipmentDeBase.wifi)?"bg-blue-900 text-white":"hover:bg-cyan-100"}`} 
            onClick={(e) => handleChange(e, "equipmentDeBase", "wifi")}
          >
            wifi
          </div>
          <div
            className={`inputFrom ${(options.equipmentDeBase.four)?"bg-blue-900 text-white":"hover:bg-cyan-100"}`} 
            onClick={(e) => handleChange(e, "equipmentDeBase", "four")}
          >
            four
          </div>
          <div
            className={`inputFrom ${(options.equipmentDeBase.chauffage)?"bg-blue-900 text-white":"hover:bg-cyan-100"}`} 
            onClick={(e) => handleChange(e, "equipmentDeBase", "chauffage")}
          >
            chauffage
          </div>
          <div
            className={`inputFrom ${(options.equipmentDeBase.machineALave)?"bg-blue-900 text-white":"hover:bg-cyan-100"}`} 
            onClick={(e) => handleChange(e, "equipmentDeBase", "machineALave")}
          >
            machine a lavé
          </div>
          <div
            className={`inputFrom ${(options.equipmentDeBase.climatiseur)?"bg-blue-900 text-white":"hover:bg-cyan-100"}`} 
            onClick={(e) => handleChange(e, "equipmentDeBase", "climatiseur")}
          >
            climatiseur
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
