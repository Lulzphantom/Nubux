import React from 'react';
import './authForm.scss';  

export const AuthForm = (props) => {

    const { loading, handleLogin, handleChange } = props;   

    return (
        <div>
            <div className="columns is-mobile is-centered ">
                <h2 className="head-text">Iniciar sesión</h2>
            </div>
            <form>
                <div className="field">
                    <label className="label">Correo electronico</label>
                    <div className="control has-icons-left">
                        <input type="email" id='email' autoComplete='email' onChange={handleChange} placeholder="correo@gmail.com" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Constraseña</label>
                    <div className="control has-icons-left">
                        <input type="password" id='password' autoComplete='password' onChange={handleChange} placeholder="*******" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                        </span>
                    </div>
                </div>
            </form>       
            <button onClick={handleLogin} className={`button is-info is-rounded is-fullwidth input-margin ${loading}`}>Iniciar sesión</button>     
        </div>
    )
}