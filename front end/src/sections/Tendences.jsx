import React from "react";
import { maisons } from "../back end/index";
import Card from "../components/Card";
import cuisine from "../back end/cuisine.jpeg";
import salle from "../back end/salle.jpeg";
import chambre1 from "../back end/chambre 1.jpeg";
function Tendences() {
  return (
    <div className="">
      <p className="text-center my-5 mt-10 font-bold font-Inika  text-3xl text-custom-lime">
        tendences
      </p>
      <div className="flex flex-wrap px-40 py-5 justify-between gap-y-5 ">
        {maisons.map((value) => {
          return <Card
            titre={value.titre}
            photo={cuisine}
            prix={value.prix}
            typeLocation={value.typeLocation}
            dateCreation={value.dateCreation}
          /> ; 
        })}
      </div>
    </div>
  );
}

export default Tendences;
