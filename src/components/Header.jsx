import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const  handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            dispatch(addUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
            navigate("/browse")
        } else {
            dispatch(removeUser());
            navigate("/")
        }
    });

    // Cleanup subscription
    return () => unsubscribe();
}, [dispatch]);


const handleGptSearchClick = () =>{
  // Toggle GPT Search 
  dispatch(toggleGptSearchView());
}

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
};

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
<img className="w-44" src={LOGO} alt="logo" />
   { user && <div className="flex p-2 items-center">
     {showGptSearch && (
       <select 
         className="p-2 m-2 bg-gray-900 text-white rounded-lg"
         onChange={handleLanguageChange}
       >
         {SUPPORTED_LANGUAGES.map((lang) => (
           <option key={lang.identifier} value={lang.identifier}>
             {lang.name}
           </option>
         ))}
       </select>
     )}
     <button 
       onClick={handleGptSearchClick} 
       className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg"
     >
       {showGptSearch ? "Homepage" : "GPT Search"}
     </button>
      <img 
        className="w-12 h-12 "
        alt="usericon"
        src={user?.photoURL}
      />
      <button onClick={handleSignOut} className="font-bold text-white p-2">Sign Out</button>
    </div>}
    </div>
  )
}

export default Header