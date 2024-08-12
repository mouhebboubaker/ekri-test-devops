import "./App.css";
import { createContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import AnnoncesPage from "./pages/AnnoncesPage/AnnoncesPage";
import AnnoncePage from "./pages/AnnoncePage/AnnoncePage";
import SignUp from "./pages/AuthPage/SignUp";
import SignIn from "./pages/AuthPage/SignIn";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import CreateAnnonce from "./pages/CreateAnnonce/CreateAnnonce";
import Part1 from "./pages/CreateAnnonce/Part1";
import Part2 from "./pages/CreateAnnonce/Part2";
import { useAxiosFetch } from "./hooks/useAxiosFetch";
import RouteLayout from "./layouts/RouteLayout";
import axios from "axios";
 

export const DataContext = createContext();

function App() {
  const URI = "http://localhost:4000/api/maisons";
  const [maisons, setMaisons] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(URI);

  const myAxios=axios.create({
    baseURL:'http://localhost:4000/api/maisons'
  })
  console.log(myAxios)

  useEffect(() => {
    setMaisons(data);
  }, [data]);

  // Define your routes using createRoutesFromElements
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="Annonces" element={<AnnoncesPage   />} />
        <Route path="Annonce/*" element={<AnnoncePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="createAnnonce" element={<CreateAnnonce />}>
          <Route index element={<Part1 />} />
          <Route path="part2" element={<Part2 />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <DataContext.Provider
        value={{ maisons, setMaisons, fetchError, isLoading,myAxios}}
      >
        <RouterProvider router={router} />
      </DataContext.Provider>
    </>
  );
}

export default App;
