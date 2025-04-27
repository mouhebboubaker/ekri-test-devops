import React, { useContext } from "react";
import { FaPlusCircle, FaWifi } from "react-icons/fa";
import { MdOutlineMicrowave } from "react-icons/md";
import { BiSolidWasher } from "react-icons/bi";
import chauffage from "../../assets/heater.png";
import climatiseur from "../../assets/air-conditioner.png";
import { CreateAnnonceContext } from "./CreateAnnonce";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Part2() {
  const navigate=useNavigate();
  const { formData, setFormData } = useContext(CreateAnnonceContext);
  const { myAxios } = useContext(DataContext);

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const handleEquipmentChange = (event) => {
    const { name } = event.currentTarget;

    const data = { ...formData };

    if (data.Equipment.includes(name)) {
      data.Equipment = data.Equipment.filter((value) => value !== name);
    } else {
      data.Equipment.push(name);
    }
    setFormData(data);
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");

      const response = await myAxios.post("/maisons", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });


      
    } catch (err) {
       
      if (err.response.status === 401) {
       
       try{

       
        console.log("invalid access token");
        const response = await myAxios.get("/refreshToken");
        console.log("recieve new access token", response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        
        //refaire l'operation 
        const token = localStorage.getItem("accessToken");
        response = await myAxios.post("/maisons", formData, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      
      
      }catch(err){
        if(err?.response?.status===401)// invalid refresh token due to logout or it's absence
        navigate('/signIn')
      }


      }
    }
  };

  return (
    <div>
      <form
        className="bg-gray-50 rounded mx-auto w-full max-w-2xl border border-1 border-gray-500 m-8 p-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-sm">
            Photos<span className="text-red-600 font-bold"> *</span>
          </label>
          <div className="mb-5 border border-gray-400 p-5 rounded">
            <label className="text-sm fileLabel" htmlFor="inputFile">
              <div className="flex flex-col items-center">
                <FaPlusCircle color="#00aaff" size={22} />
                <p>Ajouter</p>
              </div>
            </label>
            <input
              type="file"
              id="inputFile"
              name="photos"
              className="block fileInput"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex gap-2 mb-5">
          <div className="grow">
            <label className="text-sm">
              Type De location
              <span className="text-red-600 font-bold"> *</span>
            </label>
            <select
              className="inputCreate1 flex-1"
              name="typeDeLocation"
              value={formData.typeDeLocation}
              onChange={handleInputChange}
            >
              <option value="MaisonEntiere">Maison entière</option>
              <option value="chambreAPartage">Chambre à partage</option>
              <option value="chambreIndivielle">Chambre individuelle</option>
            </select>
          </div>
          <div className="grow">
            <label className="text-sm">
              Chambres (s+?)<span className="text-red-600 font-bold"> *</span>
            </label>
            <select
              className="inputCreate1 flex-1"
              name="chambres"
              value={formData.chambres}
              onChange={handleInputChange}
            >
              <option value="1">S+1</option>
              <option value="2">S+2</option>
              <option value="3">S+3</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 mb-5">
          <div className="grow">
            <label className="text-sm">Équipement:</label>
            <div className="flex justify-center gap-5 bg-white rounded border border-gray-400 p-2 px-4">
              <button
                name="wifi"
                onClick={(e) => handleEquipmentChange(e)}
                className="flex flex-col justify-center items-center"
              >
                <span
                  className={`hover:bg-sky-100 h-9 w-9 rounded-full flex items-center justify-center hover:shadow border border-custom-blue  ${
                    formData.Equipment.includes("wifi")
                      ? "bg-sky-100 shadow"
                      : "bg-white"
                  }`}
                >
                  <FaWifi color="#00aaff" size={22} />
                </span>
                <p className="text-xs text-custom-blue font-medium">WiFi</p>
              </button>
              <button
                name="four"
                onClick={(e) => handleEquipmentChange(e)}
                className="flex flex-col justify-center items-center"
              >
                <span
                  className={`hover:bg-sky-100 h-9 w-9 rounded-full flex items-center justify-center hover:shadow border border-custom-blue  ${
                    formData.Equipment.includes("four")
                      ? "bg-sky-100 shadow"
                      : "bg-white"
                  }`}
                >
                  <MdOutlineMicrowave color="#00aaff" size={22} />
                </span>
                <p className="text-xs text-custom-blue font-medium">Four</p>
              </button>
              <button
                name="machineALaver"
                onClick={(e) => handleEquipmentChange(e)}
                className="flex flex-col justify-center items-center mt-2"
              >
                <span
                  className={`hover:bg-sky-100 h-9 w-9 rounded-full flex items-center justify-center hover:shadow border border-custom-blue  ${
                    formData.Equipment.includes("machineALaver")
                      ? "bg-sky-100 shadow"
                      : "bg-white"
                  }`}
                >
                  <BiSolidWasher color="#00aaff" size={22} />
                </span>
                <p className="text-xs text-custom-blue font-medium w-10 leading-3 text-center mt-1">
                  Machine à laver
                </p>
              </button>
              <button
                name="chauffage"
                onClick={(e) => handleEquipmentChange(e)}
                className="flex flex-col justify-center items-center"
              >
                <span
                  className={`hover:bg-sky-100 h-9 w-9 rounded-full flex items-center justify-center hover:shadow border border-custom-blue  ${
                    formData.Equipment.includes("chauffage")
                      ? "bg-sky-100 shadow"
                      : "bg-white"
                  }`}
                >
                  <img src={chauffage} width={22} alt="chauffage" />
                </span>
                <p className="text-xs text-custom-blue font-medium">
                  Chauffage
                </p>
              </button>
              <button
                name="climatiseur"
                onClick={(e) => handleEquipmentChange(e)}
                className="flex flex-col justify-center items-center"
              >
                <span
                  className={`hover:bg-sky-100 h-9 w-9 rounded-full flex items-center justify-center hover:shadow border border-custom-blue  ${
                    formData.Equipment.includes("climatiseur")
                      ? "bg-sky-100 shadow"
                      : "bg-white"
                  }`}
                >
                  <img src={climatiseur} width={22} alt="climatiseur" />
                </span>
                <p className="text-xs text-custom-blue font-medium">
                  Climatiseur
                </p>
              </button>
            </div>
          </div>

          <div className="grow-[1]">
            <label className="text-sm leading-3">
              Prix<span className="text-red-600 font-bold"> *</span>
            </label>
            <input
              className="block outline outline-1 outline-gray-400 rounded text-sm p-1 w-full"
              type="text"
              name="prix"
              value={formData.prix}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="outline-2 outline-custom-blue outline w-1/3 self-end rounded text-sm p-1 text-custom-blue font-medium hover:bg-custom-blue hover:text-white mt-4 relative left-[185px] mb-5"
        >
          Créer
        </button>
      </form>
    </div>
  );
}

export default Part2;
