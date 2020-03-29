import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth';

import './authContainer.scss';
import { AuthForm } from '../../components/forms/authForm';
import { signInUser } from '../../modules/firebaseUsage';

export const AuthContainer = () => {  

    const history = useHistory();

    const { currentUser } = useContext(AuthContext);
    
    useEffect(() => {
        currentUser && history.push('/dashboard');
    }, [currentUser, history])

    const [loading, setLoading] = useState('');

    const [userValues , setUserValues] = useState({
        email: '',
        password: ''
    });

    //Update inputValue on change
    const handleChange = (event) => {
        setUserValues({...userValues,[event.target.id] :  event.target.value})
    }

    const handleLogin = (e) => {
        // Set loading status on login button
        setLoading('is-loading');
        
        //Login
        signInUser(userValues.email, userValues.password)
            .catch((err) => {
                setLoading('');
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: err.message,
                });
            })        
    }    

    return (
        <section className="hero authHero is-light is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-5-desktop">
                            <div className="box">
                                <FadeIn>
                                    <AuthForm 
                                        loading={loading}
                                        handleLogin={handleLogin}
                                        handleChange={handleChange}
                                    />
                                </FadeIn>                                
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
}
