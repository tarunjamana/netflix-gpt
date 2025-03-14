import { createBrowserRouter} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const Body = () => {
    const dispatch = useDispatch()
    

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        }, 
        {
            path:"/browse",
            element:<Browse />
        }
    ])

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
            } else {
                dispatch(removeUser());
            }
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, [dispatch]);


  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body