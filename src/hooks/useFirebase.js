import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }
    return {
        signInWithGoogle,
        user
    }
}

export default useFirebase;