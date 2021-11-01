import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAuthentication from "../Components/Login/Firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const emailLogIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const stateChanged = onAuthStateChanged(auth, user => {
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
        return () => stateChanged;
    }, []);

const logOut = () => {
    setLoading(true);
    signOut(auth)
    .then( { })
    .finally(setLoading(false));
}

    return {
        user,
        setUser,
        loading,
        setLoading,
        emailLogIn,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;