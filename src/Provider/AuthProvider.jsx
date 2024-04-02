import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const Gprovider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const CreateUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LoginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, Gprovider);
    }
    const LogOut = () => {
        setLoader(true)
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current value of the current user", currentUser);
            setLoader(false)
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = { user, CreateUser, LoginUser, LogOut, loader, signWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;