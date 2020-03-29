//React imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Local imports
import { Nav } from './components/nav/Nav';
import { BoardContainer } from './containers/BoardContainer/BoardContainer';
import { AuthContainer } from './containers/AuthContainer/AuthContainer';
import {LinkFormContainer} from './containers/LinkFormContainer/LinkFormContainer';
import { LinksCardContainer } from './containers/LinksCardContainer/LinksCardContainer';

//Providers
import { AuthProvider } from './Auth';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    return (
        <div>
        <AuthProvider>
            <Router>               
                <Nav/>
                <Route exact path="/" component={AuthContainer}/>
                <Route exact path="/auth/login" component={AuthContainer}/>                
                <PrivateRoute exact path="/dashboard" component={BoardContainer}/>
                <PrivateRoute exact path="/links/:type" component={LinksCardContainer}/>
                <PrivateRoute exact path="/links/:type/action/:action/:id" component={LinkFormContainer}/>
            </Router> 
        </AuthProvider>            
        </div>
    );
}

export default App;
