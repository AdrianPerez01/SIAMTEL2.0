import React, { useState } from "react";
import { Link } from "react-router-dom";
import { client } from "/src/supabase/client.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const navigate = useNavigate;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await client.auth.signInWithOtp({
        email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (client.auth.user) {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Crear <span className="text-primary">cuenta</span>
        </h1>
        <form className="mb-8" onSubmit={handleSubmit}>
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            Registrate con google
          </button>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email" 
              name="email" 
              placeholder="tucorreo@ejemplo.com"
              onChange={(e)=> setEmail(e.target.value)}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"/>
          </div>
          {/* <div className="relative mb-4">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Contraseña"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Confirmar contraseña"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div> */}
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Registrarme
            </button>
          </div>
        </form>
        <span className="flex items-center justify-center gap-2">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-gray-100 transition-colors"
          >
            Ingresa
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;