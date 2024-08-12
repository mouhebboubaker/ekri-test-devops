import React, { useContext, useEffect, useState } from "react";
import Begining from "./Begining";
import Tendences from "./Tendences";
import Description from "./Description";
import Test from "./Test";
import WidthSizes from "./WidthSizes";
import { Header } from "../../components/Header1";
 
function HomePage( ) {
 

  return (
    <div>
      <Header />
      <Begining   />
      <Description />
      <Tendences />
      {/* <WidthSizes /> */}
      {/* <Test /> */}
    </div>
  );
}

export default HomePage;
