import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signInUser, setUser, user} = useContext(AuthContext)

    const userLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(data => {
            const newUser = {email: email}
            setUser(data.user)
            axios.post('http://localhost:5200/jwt', newUser, {withCredentials: true})
            .then(res => console.log(res.data))
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    console.log(user)
    return (
        <div className="m-20">
            <form onSubmit={userLogin}>
                <input type="email" name="email" placeholder="Email" /><br />
                <input type="password" name="password" placeholder="Password" />
                <input className="btn" type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;