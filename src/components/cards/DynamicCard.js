import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './cards.scss';

export const DynamicCard = (props) => {

    const { id, title, type, description, link, icon, color, onDelete } = props;

    const deleteLink = () => {
        Swal.fire({
            title: `¿Desea eliminar '${title}'?`,
            text: "¡Se eliminará el enlace de forma permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: '¡Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                onDelete(id)
            }
        })
    }

    return (
        <div className="column is-one-quarter-desktop is-two-thirds-tablet is-three-quarters-mobile">
        <FadeIn transitionDuration={700}>   
            <div className="columns cardContainer">                                            
                <a href={link} target="_blank" rel="noopener noreferrer" className="box cardBox fixedCard has-text-centered">
                    <span className={`icon iconCard is-large has-text-${color}`}>
                        <i className={`${icon}`}></i>
                    </span>
                    <h1 className="title is-4 center">{title}</h1>                
                    <h2 className={`subtitle has-text-${color}`}>{description}</h2>
                </a>
                <div className="cardFunctions">
                    <Link to={`/links/${type}/action/edit/${id}`} className="icon cardFunction has-text-info"><i className="fas fa-edit"></i></Link>
                    <div onClick={deleteLink} className="icon cardFunction has-text-danger"><i className="fas fa-trash"></i></div>  
                </div>  
            </div>
        </FadeIn>    
    </div>
    )
}
