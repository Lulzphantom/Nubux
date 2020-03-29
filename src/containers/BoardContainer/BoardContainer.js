import React from 'react';
import { FixedCard } from '../../components/cards/FixedCard';

export const BoardContainer = () => {
    return (
        <React.Fragment>
            <section className="authHero hero is-light is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-multiline">
                            <FixedCard title='Administrador web' description='Paginas web, administraciones de hosting, etc' icon='fas fa-laptop'/>
                            <FixedCard title='Email marketing' description='Herramientas de email marketing' icon='fas fa-mail-bulk'/>
                            <FixedCard title='CMR' description='Customer Relationship Management' icon='fas fa-users-cog'/>
                            <FixedCard title='Redes sociales' description='Facebook, instagram y mas' icon='fas fa-street-view'/>
                            <FixedCard title='Analitica' description='Gestión de analitica de marketing' icon='fas fa-chart-line'/>
                            <FixedCard title='Publicidad online' description='Herramientas de publicidad online' icon='fas fa-newspaper'/>
                            <FixedCard title='Marketplace' description='Pagínas de Marketplace' icon='fas fa-store'/>
                            <FixedCard title='Informes de gestion' description='Accesos a los informes de gestion' icon='fas fa-user-shield'/>
                            <FixedCard title='Mensajeria' description='Plataformas de mensajeria' icon='fab fa-telegram-plane'/>
                            <FixedCard title='Contabilidad' description='Herramientas y plataformas de contabilidad' icon='fas fa-chart-pie'/>
                            <FixedCard title='Estrategia marketing' description='Acceso a las estrategias de marketing' icon='fas fa-mail-bulk'/>
                            <FixedCard title='Capacitacion' description='Material general de capacitación' icon='fas fa-user-ninja'/>
                        </div>                    
                    </div>
                </div>
            </section>
        </React.Fragment>              
    )
}
