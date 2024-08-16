import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import app from "../Firebase/firebase.init.js";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";

import { AuthContext } from "../Provider/AuthProvider.jsx";

function Login() {
  const { signIn, user, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const auth = getAuth(app);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    document.title = "Login Page";
  });
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
     //   console.log(result.user);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        const user = { email };
        navigate(location?.state ? location.state : "/");

        // axios.post("https://blog-website-server-self.vercel.app/jwt",user ,{withCredentials:true})
        // .then((res) => {
        //   console.log(res.data);
        // });
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Google Sign-In Successful",
        text: "You have successfully signed in with Google!",
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Error",
        text: error.message,
      });
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithGithub();
      Swal.fire({
        icon: "success",
        title: "GitHub Sign-In Successful",
        text: "You have successfully signed in with GitHub!",
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
      Swal.fire({
        icon: "error",
        title: "GitHub Sign-In Error",
        text: error.message,
      });
    }
  };

  return (
    <>
      <main className="mt-3">
        <div className="bg-gradient-to-t from-[#8779d7] to-[#f8fdfe] py-5">
          <div className="container mx-auto px-3 lg:flex justify-center items-center lg:h-screen">
            <div className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12">
              <form onSubmit={handleLogin}>
                <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
                  />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2 pr-16 relative]"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 lg:-top-[230px] -top-[185px] lg:right-12 right-5 pr-4 flex items-center focus:outline-none"
                  >
                    {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                  </button>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#836ff0]"
                  >
                    Login
                  </button>
                </div>
                <button className="bg-gradient-to-r from-[#836ff0] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
              </form>
              <p className="text-[#808080] text-center mb-4">
                Or use one of these options:
              </p>
              <div className="flex justify-center gap-x-10">
                <button onClick={handleGoogleSignIn} className="text-[#1a73e8]">
                  <FcGoogle className="lg:w-24 w-12 lg:h-24 h-12 border lg:p-5 p-1 border-gray-300 hover:border-[#26374d]" />
                </button>
                {/* <button onClick={handleGithubSignIn} className="text-[#333]">
                  <TfiGithub className="lg:w-24 w-12 lg:h-24 h-12 border lg:p-5 p-1 border-gray-300 hover:border-[#26374d]" />
                </button> */}

                {/* <button className="text-[#d62408] hover:text-[#ff5a5f]">
                <SiInstagram className="lg:w-24 w-12 lg:h-24 h-12 border lg:p-5 p-1 border-gray-300 hover:border-[#26374d]" />
              </button> */}
              </div>
              <p className="text-[#e96363] text-center mb-6 pt-9">
                Don't Have An Account !!!
              </p>

              <div className="flex justify-center gap-x-10">
                <Link
                  to="/register"
                  className="font-bold text-[#836ff0] border rounded-3xl px-4 py-2"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
