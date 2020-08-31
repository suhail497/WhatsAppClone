import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css"
import { auth, provider } from '../Firebase/Firebase';
import { useStateValue } from '../contextapi/StateProvider';
import { userActionTypes } from '../contextapi/Reducer';

const Login = () => {
    const [{ }, dispatch] = useStateValue()


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                // console.log(result)
                dispatch({
                    type: userActionTypes.SET_USER,
                    user: result.user

                });
            })
            .catch(error => alert(error.message))
    };
    return (
        <div className='login'>
            <div className='login__container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
                    alt="logo" />
                <div className='login__text'>
                    <h3>Sign in to Whatsapp </h3>
                </div>
                <Button type="submit" onClick={signIn} >
                    Signin with Google
                    </Button>
            </div>
        </div>
    );
}

export default Login;
