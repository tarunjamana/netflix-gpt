import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // Clear error message when switching forms
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    setErrorMessage(null);

    const message = checkValidData(
      isSignInForm ? "SignIn Form" : fullName.current?.value,
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);

    if (message) return; // Add early return if validation fails

    if(!isSignInForm){
      // Signup Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/41354942?v=4"
          }).then(() => {
            // Get fresh user data after profile update
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
              uid,
              email,
              displayName,
              photoURL
            }));
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => {
          // Get fresh user data for sign in
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({
            uid,
            email,
            displayName,
            photoURL
          }));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="background"
        />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="w-3/12 mx-auto p-12 absolute my-36 left-0 right-0 bg-black text-white rounded-lg bg-opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        )}
        <button
          onClick={handleButtonClick}
          className="p-4 my-4 bg-red-700 w-full rounded-lg hover:bg-red-800 transition-colors"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer hover:underline" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
