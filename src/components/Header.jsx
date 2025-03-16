import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
<img className="w-44" src={LOGO} alt="logo" />
   { user && <div className="flex p-2 items-center">
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