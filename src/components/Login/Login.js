import "../../sass/components/login.css";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { login } = useContext(UserContext);
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        const objUserLogin = {
            username: username,
            email: email,
            password
        }

        login(objUserLogin);
        history.push("/");
    }

    return(
        <div className="loginContainer">
            <div className="logTitle">
                <h1>Get the party started!</h1>
            </div>
            <div className="formContainer">
                <form onSubmit={handleLogin}>
                    <label>
                        User Name:
                        <input type="text" id="username" name="username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
                    </label>
                    <label>
                        Email:
                        <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    </label>
                    <label>
                        Set a password:
                        <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login