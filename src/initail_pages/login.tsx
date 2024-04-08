import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/cofig/config";
import { useState } from "react";
const Login = () => {
  // schemas for froma validaton
  const [disableBtn, setdisableBtn] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [err, setErr] = useState(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("invalid email")
      .required("Please Enter Your Email "),
    password: yup
      .string()
      .min(4)
      .max(16)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      )
      .required("Please Enter You Password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //checking data in dataBase  to login
  const sumitData = async (data: any) => {
    setdisableBtn(true);
    setLogin(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setdisableBtn(false);
      setLogin(false);
      return;
    } catch (error) {
      console.log(error);
      setErr(true)
      setdisableBtn(false);
      setLogin(false);

      return;
    }
    console.log(data);
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-black p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-white font-bold text-lg lg:text-xl header"
            >
              Crypto 2.0
            </Link>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="bg-black text-white min-h-screen font-sans">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 header">
            Login to Your Crypto 2.0 Account
          </h1>
          <p className="text-red-500 mb-4">{err ? 'User already exists' : ''}</p>

          <form className="max-w-sm" onSubmit={handleSubmit(sumitData)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
                {...register("email")}
              />
              <p className="">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
                {...register("password")}
              />
              <p className="">{errors.password?.message}</p>
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300"
              disabled={disableBtn}
            >
            {login?'Login...': 'Login' }  
            </button>
          </form>
          {/* Sign up link */}
          <div className="mt-4 text-lg">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
