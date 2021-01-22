import React, {useState} from 'react';
import '../styles/LogIn.css';
import logo from '../images/amazon-logo.png'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase/Firebase'

function LogIn() {
    const [email,setEmail]= useState('')
    const [password, setPassword] = useState(null)
    const history = useHistory()
    const logIn = (e) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => history.push('/'))
            .catch((e) => alert(e.message))

    }
    const signUp = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => history.push('/'))
            .catch((e) => alert(e.message))
    }
	return (
        <section className="login">
            <div className="login__wrapper">
                <figure className="login__logo">
                    <Link to ='/'>
                        <img src={logo} alt="logo" className="login__logo--pic"/>
                    </Link>
                </figure>

                <form className="login__form">

                    <h3 className="login__form--heading">sign in</h3>

                    <div className="login__formInput--wrapper">
                        <label className="login__form--title">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            className="login__form--input"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                            />
                    </div>

                    <div className="login__formInput--wrapper">
                        <label className="login__form--title">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="login__form--input"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                            />
                    </div>

                    <button onClick={logIn} type="submit" className="btn-main login__btn">sign in</button>

                    <p className="login__conditions">by signing-in you agree to amazon conditions of USE & SAFE. please see our privacy notice. our cookies notice and our interest. based ADs notice</p>

                    <button onClick={signUp} type="submit" className="btn-main sign-up__btn">create your amazon account</button>

                </form>
            </div>
        </section>
    )
}

export default LogIn;
