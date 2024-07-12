import "./App.css";
import Begining from "./sections/Begining";
import Description from "./sections/Description";
import Footer from "./sections/Footer";
import { Header } from "./sections/Header";
import Tendences from "./sections/Tendences";
// import Test from "./sections/Test";
   


function App() {
  return (
    <div className="App  relative">
      <Header />
        <Begining/>
        <Description />
        <Tendences />
        <Footer />
      {/* <Test/> */}
    </div>
  );
}

export default App;
