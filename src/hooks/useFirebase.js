import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [error, setError] = useState('');

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    const registerWithEmailandPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);

            });
    }
    const signInUsingEmailandPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, []);

    return {
        signInWithGoogle,
        user,
        logOut,
        registerWithEmailandPass,
        error,
        setError,
        signInUsingEmailandPassword
    }
}

export default useFirebase;