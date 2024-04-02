import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if (user) {
        return children
    }
    return <Navigate to="/signup"></Navigate>
};
PrivetRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivetRoute;