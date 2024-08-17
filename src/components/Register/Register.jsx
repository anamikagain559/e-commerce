import React, { useContext, useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
function Register() {
  useEffect(() => {
    document.title = "Register Page";
  });
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [validPassword, setValidPassword] = useState(false);

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
 
    const isValid = validatePassword(newPassword);
    setValidPassword(isValid);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    return hasUppercase && hasLowercase && hasLength;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (!validatePassword(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password Requirements',
        text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.',
      });
      return;
    }
    try {
      const user = await createUser(email, password, name, photo);
    //  console.log("User registered successfully:", user);
  

      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error("Error registering user:", error);

      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
        text: error.message,
      });
    }
  };

  return (
    <main className="">
    
      <div className="bg-gradient-to-t from-[#8779d7] to-[#f8fdfe] min-h-screen flex justify-center items-center p-5 ">
        <div className="bg-white shadow-2xl rounded-3xl py-8 w-full max-w-md relative">
          <form onSubmit={handleRegister} className="px-4 lg:px-8">
            <div className="py-6 flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="h-12 lg:h-14 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="h-12 lg:h-14 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <input
                placeholder="Enter Your Photo Url"
                name="photo"
                type="text"
                className="h-12 lg:h-14 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`h-12 lg:h-14 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2 lg:pr-[157px] pr-[80px] ${
                    validPassword ? "border-green-500" : "border-[#e5e5e5 ]"
                  }`}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute top-1/2 right-[30px] transform -translate-y-1/2 focus:outline-none"
                >
                  {showPassword ? <FaEye /> :<FaRegEyeSlash />}
                </button>
              </div>
              {!validPassword && (
                <p className="text-red-500 text-sm mt-1">
                  Password must have at least one uppercase letter, one
                  lowercase letter, and a minimum length of 6 characters.
                </p>
              )}

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-12 lg:h-14 text-white bg-[#836ff0]"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-[#808080] text-center mb-6">
            Already Have An Account !!! 
          </p>
         
          <div className="flex justify-center gap-x-10">
          <Link to="/login" className="font-bold text-[#836ff0]">Login</Link>
            {/* <button className="text-[#1a73e8]">
              <FcGoogle className="w-12 lg:w-14 h-12 lg:h-14 border p-3 border-gray-300 hover:border-[#26374d]" />
            </button>
            <button className="text-[#333]">
              <TfiGithub className="w-12 lg:w-14 h-12 lg:h-14 border p-3 border-gray-300 hover:border-[#26374d]" />
            </button>
            <button className="text-[#d62408] hover:text-[#ff5a5f]">
              <SiInstagram className="w-12 lg:w-14 h-12 lg:h-14 border p-3 border-gray-300 hover:border-[#26374d]" />
            </button> */}
          </div>
        </div>
      </div>

    </main>
  );
}

export default Register;
