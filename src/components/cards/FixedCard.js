import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

import './cards.scss';

export const FixedCard = (props) => {

    const { title, icon, description } = props;

    return (
        <div className="column is-one-quarter-desktop is-two-quarter-tablet is-four-quarters-mobile">
            <FadeIn transitionDuration={700}>               
                <Link to={`/links/${title}/`} className="box cardBox fixedCard has-text-centered">
                    <span className="icon iconCard is-large has-text-info">
                        <i className={`${icon}`}></i>
                    </span>
                    <h1 className="title is-4 center">{title}</h1>                
                    <h2 className="subtitle has-text-info">{description}</h2>
                </Link>
            </FadeIn>    
        </div>
    )
}
