import { useState };
import {useNavigate };

function Login(){
    const [email, setEmail] = useState(" ");
    const [password, setPassword ] = useState(" ");
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            navigate("/dashboard");
            
        }else{
            alert("Invalid credentials");
        }
    };
    return(
        <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
        type="email"
        placeholder="password"
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
        Dont have account? <Link to="/register"> Register</Link>
        </p>
        </form>
    );
}