import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const LOGIN_URL = "/auth/login";


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    


    useEffect(() => {
        userRef.current.focus();
    }, [])



    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const {token, role}  = response?.data;

     
      localStorage.setItem('token', token);
      localStorage.setItem('role', role)


      switch (role) {
        case 'ADMIN':
          navigate('/admin-page')
          break;
        case 'ETUDIANT':
            navigate('/etudiant-page')
          break;
        case 'ENSEIGNANT':
            navigate('/enseignant-page')
          break;
        default:
            navigate('/Inscription')
          break;
      }
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            setEmail('');
            setPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('email Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div id="login-component">
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <img id="logoLogin" src={require('../images/bretagne.png')} />
                    <form onSubmit={handleSubmit}>
                        <div id="inputs">
                        <input 
                            type="email"
                            id="email"
                            ref={userRef}
                            placeholder="Email"
                            autoComplete="off"
                            className="input"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          
                            aria-describedby="uidnote"
                           
                        />
                    
                        <input 
                            type="password"
                            id="password"
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="input"
                            required
                            aria-describedby="pwdnote"
                           
                        />
                        </div>
                


                        <button id="login">
                            Se connecter
                        </button>
                        <hr></hr>
                        <p className="warning">Ne complétez jamais un formulaire d'authentification dont l'adresse paraît suspecte. En cas de doute, contactez l'assistance informatique.</p>
                        <p className="warning">Déconnectez-vous et fermez votre navigateur lorsque vous avez fini d'accéder aux services authentifiés.</p>


                    </form>

                </section>
              
            )}
        </div>
    )
}

export default Register