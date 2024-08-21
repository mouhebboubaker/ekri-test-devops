import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    nomPrenom: "",
    email: "",
    motDePasse: "",
    confirmMotDePasse: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.motDePasse !== formData.confirmMotDePasse)
        throw new Error("les deux mot de passes ne sont pas identiques");
      else setError(null);

      const response = await axios.post(
        "http://localhost:3500/singUp",
        formData
      );

      // navigate("/annonces");
    } catch (err) {
      if (err.response) {
        setError("in response");
        // Handle the error response from the backend(status code out of 2xx)
        setError(err.response.data.message || err.message);
        // Server Error (5xx): Server-side issue (e.g., 500 Internal Server Error), leading to an error being caught in the error.response block.
        // Client Error (4xx): Issues like validation errors, unauthorized access, or forbidden resources, leading to an error in the error.response block
      } else if (err.request) {
        // request was made but no response was recieved
        setError(err.request);
        // Network issues, such as the server being down or unreachable.
        // CORS (Cross-Origin Resource Sharing) issues that prevent the server from sending a response.
        // The server took too long to respond (timeout).
      } else {
        // error occured in setting up the request
        setError(err.message); // it can be my custom error or a built in error before the request
      }
    }
  };

  return (
    <div className="flex h-full justify-center items-center">
      <div className="bg-white rounded flex-col w-full max-w-sm shadow-2xl">
        <p className="text-white bg-[#0F4C67] font-bold rounded-t p-2 text-center">
          Creér Votre Compte
        </p>
        <form
          className="px-14 py-5 rounded flex flex-col items-center mt-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nomPrenom"
            placeholder="Nom & Prenom *"
            className="inputconnectForm"
            value={formData.nomPrenom}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email *"
            className="inputconnectForm"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="motDePasse"
            placeholder="Mot de passe *"
            className="inputconnectForm"
            value={formData.motDePasse}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmMotDePasse"
            placeholder="Confirmer Mot de passe *"
            className="inputconnectForm mb-0"
            value={formData.confirmMotDePasse}
            onChange={handleInputChange}
            required
          />
          {<p className="text-red-600 text-xs mt-1 h-5">{error}</p>}
          <button
            type="submit"
            className="bg-custom-blue rounded-2xl text-white font-semibold w-2/3 p-1.5 px-3 mt-3 hover:bg-sky-400"
          >
            Creer
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
