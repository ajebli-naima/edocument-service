import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import DocumentListContainer from './eDocument/DocumentListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditDocumentContainer from './eDocument/AddOrEditDocumentContainer'; // eslint-disable-line import/no-named-as-default
import NavBar from './common/NavBar';


const App = () => {
    return (
        <div >
            <Router>
                <div>
                <NavBar/>
                    <Switch>
                        <Route exact path="/" component={DocumentListContainer} />
                        <Route exact path="/edocuments" component={AddOrEditDocumentContainer} />
                        <Route path="/edocuments/:id" component={AddOrEditDocumentContainer} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;