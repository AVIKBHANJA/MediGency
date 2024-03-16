import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase/FirebaseConfig";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const register = async () => {
    if (email === "" || password === "") {
      return alert("Please fill all fields");
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row p-10 justify-center bg-gradient-to-b from-blue-500 to-slate-50 text-center items-center bg-slate-100 ">
        <div className="flex flex-col z-30 relative top-[2.5rem] items-start h-96 justify-evenly sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
          <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
            Register to EduMate
          </span>

          <div className="text-start">
            <span className="text-2xl">Create an Account</span>
            <p>already have an account?</p>
            <Link to="/login" className="font-bold underline">
              Sign in
            </Link>
          </div>

          <span className="m-1">
            <label>Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded mx-3"
              placeholder="Email"
              // required
            />
          </span>
          <span className="m-1">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded mx-3"
              placeholder="Password"
              // required
            />
          </span>

          <button
            onClick={register}
            className=" m-2 p-2 w-3/4 self-center rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300"
          >
            Register
          </button>

          <button className="m-2 p-2 w-3/4 self-center rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300">
            <Link to="/login">Log In With Google</Link>
          </button>
        </div>
        <div>
          {/* Show the image only on screens wider than small (sm) and position it to the left */}
          <img
            src="registerpg.png"
            alt="register page img"
            className="scale-15"
          />
        </div>
      </div>
    </>
  );
}

export default Register;
