import axios from "axios";
import React, { useState } from "react";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3500/signIn",
        { email, motDePasse },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      localStorage.setItem('accessToken',response.data.accessToken)
      setEmail("");
      setMotDePasse("");
      setError(null);



     } catch (err) {
      if (err?.response?.data?.message) {
        //handle custom error handled by the backend
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className=" flex h-full justify-center items-center ">
      <div className="bg-white rounded flex-col w-full max-w-sm shadow-2xl   ">
        <p className="text-white bg-[#0F4C67] font-bold rounded-t p-2 text-center">
          Se Connecter
        </p>
        <form
          className=" px-14 py-5 rounded flex flex-col items-center mt-5  "
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Email *"
            className="inputconnectForm"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe *"
            className="inputconnectForm mb-0"
            value={motDePasse}
            onChange={(e) => {
              setMotDePasse(e.target.value);
            }}
            required
          />
          {<p className="text-red-600 text-xs mt-1 h-5">{error}</p>}
          <div className="w-2/3 flex flex-col items-center">
            <button
              type="submit"
              className="bg-custom-blue rounded-2xl text-white font-semibold w-full  p-1.5 px-3 mt-3 hover:bg-sky-600"
            >
              Se connecter
            </button>
            <p className="text-[11px] mt-1 text-[#0F4C67] font-semibold underline cursor-pointer">
              mot de passe oublier ?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
