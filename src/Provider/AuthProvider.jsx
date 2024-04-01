import PropTypes from 'prop-types'; // ES6
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ Children }) => {
    const authInfo = { name: "me" }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    Children: PropTypes.node,

}
export default AuthProvider;