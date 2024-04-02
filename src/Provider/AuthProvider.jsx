import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current value of the current user", currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = { user, CreateUser, LoginUser ,LogOut}
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