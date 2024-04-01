import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
            <h1>Home : {authInfo.name}</h1>
        </div>
    );
};

export default Home;