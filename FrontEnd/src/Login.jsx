import React from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./Firebase/FirebaseConfig";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(auth?.currentUser?.email);
  const navigate = useNavigate();

  const signin = async () => {
    if (email === "" || password === "") {
      return alert("Please fill all fields");
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const users = localStorage.setItem("user", JSON.stringify(user));
      alert("Signin Successful");
      navigate("/home");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      const users = localStorage.setItem("user", JSON.stringify(user));
      alert("Signin Successful");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex  flex-wrap bg-gradient-to-b from-blue-500 to-slate-50 justify-center items-center">
        <div className="flex flex-col p-8 sm:p-12 md:p-16 lg:p-20 items-start sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
          <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
            Login to MediGency
          </span>
          

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="email"
            className=" rounded	m-2 "
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded m-1"
            required
          />
<div className="flex gap-4">
<button
            onClick={signin}
            className="mt-4 p-4 rounded bg-blue-400 text-slate-50 hover:bg-indigo-500 hover:text-stone-300"
          >
            Log In <img src="heartRate.png" alt="" />
          </button>

          <button
            onClick={signInWithGoogle}
            className="mt-4 p-4 rounded bg-blue-400 text-slate-50 hover:bg-indigo-500 hover:text-stone-300"
          >
            Log In <img src="google.png" alt="" />
           
          </button>
</div>
          
          <div className=" my-4">
           
           <p className="font-semibold ">Don't have an account?</p>
           <Link
             to="/register"
             className="rounded text-slate-900 text-sm mb-4 p-1 bg-gradient-to-r from-blue-300 hover:underline font-bold"
           >
             Sign up
           </Link>
         </div>
        </div>
        <div className=" sm:block ">
         
          <img src="login.png" alt="login page img" className="scale-90" />
        </div>
      
      </div>
    </>
  );
}

export default Login;
