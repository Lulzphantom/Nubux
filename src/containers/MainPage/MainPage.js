import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../Auth';
import { useHistory } from 'react-router-dom';

import './mainPage.scss';
import illustration from '../../assets/illustration.png';
import FadeIn from 'react-fade-in';


export const MainPage = () => {

    const history = useHistory();

    //get user of context
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            history.push('/dashboard');
        }
    }, [currentUser, history])

    const handleClick = () => {
        history.push('/auth/login');
    }

    return (
        <React.Fragment>
            <section className="hero is-fullheight-with-navbar info-section">
                <div className="hero-body">
                    <div className="main-hero">
                        <FadeIn transitionDuration={1000}>
                            <img src={illustration} alt="test" />
                        </FadeIn>
                        <FadeIn delay={300} transitionDuration={1000}>
                            <div>
                                <p>Tu herramienta</p>
                                <p>Favorita de marketing</p>
                                <p>Digital en la nube</p>
                                <a href='#benefics' className="button is-light is-rounded is-large is-fullwidth">Conoce más</a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            <section className="hero is-fullheight benefics-section" id='benefics'>
                <div className="hero-body">
                    <div className="container">
                        <div className="benefics-hero">
                            <div className="leyend">
                                <h1>Mas de 20 plataformas en una sola aplicacion</h1>
                                <p>Agiliza y ahorra tiempo en la gestión de tu Ecosistema Digital,
                                tendrás mas de 20 aplicaciones para marketing digital
                                disponibles en un solo lugar, tips de negocios y una plataforma de capacitación
                            exclusiva para usuarios Nubux.</p>
                                <br></br>
                                <button onClick={handleClick} className="button is-link is-rounded is-large">Ingresar</button>
                            </div>
                            <div className="leyend-info">
                                <div>
                                    <div class="box has-background-info has-text-white">
                                        20+ plataformas
                                </div>
                                    <br></br>
                                    <div class="box has-background-primary has-text-white">
                                        100+ Cursos
                                </div>
                                </div>
                                <div>
                                    <div class="box has-background-light">
                                        250+ Clientes
                                </div>
                                    <br></br>
                                    <div class="box has-background-warning">
                                        Soporte
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="hero applications-section">
                <div className="hero-body">
                    <div className="container">
                        <div className="applications-hero">
                            <h1 className="title">
                                Aplicaciones Especializadas
                            </h1>
                            <h2 className="subtitle">
                                Las mejores aplicaciones de marketing y gestión empresarial a un solo click.
                            </h2>
                            <div className="cards">
                                <div className="box">
                                    <span className="icon is-large has-text-info">
                                        <i className="fas fa-file-invoice fa-3x"></i>
                                    </span>
                                    <h1 className="title is-4">
                                        Alegra
                                    </h1>
                                    <p>
                                        Software contable en la nube, intuitivo, facil de usar y de bajo costo.
                                    </p>
                                </div>
                                <div class="box">
                                    <span className="icon is-large has-text-primary">
                                        <i className="fab fa-cloudversify fa-3x"></i>
                                    </span>
                                    <h1 className="title is-4">
                                        vTiger Cloud
                                    </h1>
                                    <p>
                                    CRM para tu gestión comercial y de mercadeo, completamente en la nube y con multiples opciones de integración.
                                    </p>
                                </div>
                                <div class="box">
                                    <span className="icon is-large has-text-warning">
                                        <i className="fas fa-box-open fa-3x"></i>
                                    </span>
                                    <h1 className="title is-4">
                                        Hootsuite
                                    </h1>
                                    <p>
                                    Descubre cómo Hootsuite facilita la búsqueda, programación, gestión y análisis de la efectividad de tu contenido en redes sociales.
                                    </p>
                                </div>
                                <div class="box">
                                    <span className="icon is-large has-text-danger">
                                        <i className="fas fa-mail-bulk fa-3x"></i>
                                    </span>
                                    <h1 className="title is-4">
                                        Mailer Lite
                                    </h1>
                                    <p>
                                        Una solución simple de email marketing para todo tipo de negocios.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="content has-text-centered">
                </div>
            </footer>
        </React.Fragment>
    )
}
