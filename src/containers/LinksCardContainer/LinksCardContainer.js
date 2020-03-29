import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import './linksCardContainer.scss';
import { DynamicCard } from '../../components/cards/DynamicCard';
import { AddCard } from '../../components/cards/AddCard';
import { getUserCardsByType, deleteCard } from '../../modules/firebaseUsage';


export const LinksCardContainer = () => {

    // Get params
    const {type} = useParams();

    const [cards, setCards] = useState([]);

    const [isLoading, setIsLoading] = useState(true);    

    // Load cards links
    useEffect(() => {        
        getUserCardsByType(type)
            .then((result) => {
                setCards(result);
                setIsLoading(false);   
            }); 
    }, [type]);

    // Delete link item
    const handleDelete = (cardId) => {
        deleteCard(type, cardId)
            .then((result) => {
                if (result) {
                    const newCards = cards.filter(x => x.id !== cardId);
                    setCards(newCards);
                }                
            });
    }    

    return (
        <section className="authHero hero is-light is-fullheight-with-navbar heroLinks">         
            <div className="hero-body">               
                <div className="container">
                    <div className="columns">                        
                        <div className="column">
                            <Link to="/dashboard" className="button is-link is-outlined is-rounded">
                                <span className="icon is-small">
                                    <i className="fas fa-arrow-left"></i>
                                </span>
                                <span>Ir al tablero</span>                        
                            </Link>
                        </div>
                        <div className="column is-full">
                            <h1 className="title">
                                - {type}
                            </h1>                             
                        </div>
                    </div>                                        
                    <div className="columns is-multiline contCards">
                        {
                            isLoading ?
                            <div className="button is-loading is-rounded is-link"></div>                         
                            :
                            <React.Fragment>
                                {cards.map(data => (                            
                                    <DynamicCard 
                                        key={data.id}
                                        id={data.id}
                                        title={data.title}
                                        type={type}
                                        description={data.description}
                                        link={data.url}
                                        icon={data.icon}
                                        color={data.iconColor}
                                        onDelete={handleDelete}
                                    />
                                ))
                                }

                                {<AddCard 
                                    type={type}                            
                                />
                                }
                            </React.Fragment>                            
                        }                        
                    </div>                    
                </div>
            </div>
        </section> 
    )
}
