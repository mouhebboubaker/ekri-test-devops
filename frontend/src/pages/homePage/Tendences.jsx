import React, { useContext } from "react";
 import Card from "../../components/Card";
import cuisine from "../../backEnd/cuisine.jpeg";
// import salle from "../../../back end/salle.jpeg";
// import chambre1 from "../../../back end/chambre 1.jpeg";
import { DataContext } from "../../App";


function Tendences() {
  const {maisons}=useContext(DataContext)
  
  return (
    <div className="mb-10">
      <p className="text-center my-5 mt-10 font-bold font-Inika  text-3xl text-custom-lime">
        tendences
      </p>
      <div className="flex flex-wrap px-40 py-5 justify-between gap-y-5 ">
        {maisons.map((item) => {
          return <Card key={item.id} photo={cuisine} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Tendences;
