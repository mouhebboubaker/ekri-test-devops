import React, { useContext, useEffect } from "react";
import Header from "../../components/Header2";
import Form from "./Form";
import cuisine from "../../backEnd/cuisine.jpeg";
import Card from "../../components/Card";
import { DataContext } from "../../App";

function AnnoncesPage() {
  const { maisons } = useContext(DataContext);

 
  return (
    <div>
      <Header />

      <div className="flex my-10   items-start justify-center relative max-md:flex-wrap max-sm:mx-4 max-md:justify-center">
        <Form />
        <div className="flex flex-wrap   py-5 justify-center gap-y-5 gap-x-5 w-full max-md:justify-center  rounded  max-w-[850px] ml-20">
          {maisons.map((item) => {
            return <Card key={item.id} photo={cuisine} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AnnoncesPage;
