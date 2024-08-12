import React from "react";

function SignInForm() {
  return (
    <div className=" flex h-full justify-center items-center ">
      <div className="bg-white rounded flex-col w-full max-w-sm shadow-2xl   ">
        <p className="text-white bg-custom-orange font-bold rounded-t p-2 text-center">
          Se Connecter
        </p>
        <form className=" px-14 py-5 rounded flex flex-col items-center mt-5  ">
          <input
            type="text"
            placeholder="Email *"
            className="inputconnectForm"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe *"
            className="inputconnectForm"
            required
          />
          
          <div className="w-2/3 flex flex-col items-center mt-5">
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
