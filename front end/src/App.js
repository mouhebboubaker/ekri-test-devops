import "./App.css";
import Begining from "./sections/Begining";
import Description from "./sections/Description";
import WidthSizes from "./sections/WidthSizes";
import { Header } from "./components/Header";
import Tendences from "./sections/Tendences";
import Footer from "./sections/Footer";
// import Test from "./sections/Test";
   


function App() {
  return (
    <div className="App  relative">
      <Header />
        <Begining/>
        <Description />
        <Tendences />
        <Footer/>
        {/* <WidthSizes /> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;
