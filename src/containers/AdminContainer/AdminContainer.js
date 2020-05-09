import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from '../../components/panel/Panel';

import './adminContainer.scss';
import { getUsersInfo } from '../../modules/firebaseUsage';
import FadeIn from 'react-fade-in';

export const AdminContainer = () => {

    const { type } = useParams();

    // Panel details state
    const [panel, setPanel] = useState(false);

    // Items states
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (type === 'users') {
            getUsersInfo()
                .then((result) => {
                    if (result !== null) {
                        setItems(result);
                    }
                });
        }
    }, [type])

    const handleCreate = () => {
        setPanel(!panel);
    }

    const handleEdit = (index) => {

    }

    const handleDelete = (index) => {

    }

    return (
        <React.Fragment>
            <section className="hero is-fullheight-with-navbar benefics-section" id='benefics'>
                <div className="hero-body admin-container">
                    {<Panel 
                        items={items}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleCreate={handleCreate}
                    />}
                    {
                        panel ?
                        <FadeIn>
                            <div className="box panel-details">

                            </div> 
                        </FadeIn>                             
                        :
                        <div className="panel-details">
                            Hola
                        </div>
                    }                  
                </div>
            </section>            
        </React.Fragment>
    )
}
