import React from 'react';

import './panel.scss';
import FadeIn from 'react-fade-in';

export const Panel = ({ items, handleCreate, handleEdit, handleDelete }) => {
    return (
        <div className="panel-container">
            <nav className="panel is-link">
                <div className="panel-heading">
                    Usuarios
                    <button onClick={handleCreate} className="button is-info is-inverted is-rounded">
                        <span className="icon is-small">
                            <i className="fas fa-plus"></i>
                        </span>
                        <span>Nuevo</span>
                    </button>
                </div>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Buscar"/>
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <p className="panel-tabs">
                    <div className="is-active">Todos</div>
                    <div className="">Activos</div>
                    <div className="">Inactivos</div>
                </p>
                {
                    items.map((item, index) => 
                        <FadeIn key={`item-${index}`}>
                            <div className="panel-block panel-item">
                                <div className="panel-item">
                                    <span className="panel-icon">
                                        <i className="fas fa-book" aria-hidden="true"></i>
                                    </span>
                                    {item.name}
                                </div>
                                
                                <div className="item-actions-container">         
                                    <span onClick={handleEdit} className="icon is-small item-action">
                                        <i className="far fa-edit"></i>
                                    </span>
                                    <span onClick={handleDelete} className="icon is-small item-action item-action-red">
                                        <i className="far fa-trash-alt"></i>
                                    </span>
                                </div>
                            </div>
                        </FadeIn>                        
                    )
                }
            </nav>
        </div>
    )
}
