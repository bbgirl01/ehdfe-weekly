import React from 'react';
import NavHeader from './header/NavHeader';
import ArticleList from './articles/ArticleList';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'


const basename = BASEPATH;
class Navs extends React.Component {
    render() {
        return (
            <Router basename={basename}>
                <div>
                    <NavHeader/>
                    <Switch>
                        <Route path="/article" component={ArticleList}/>
                         <Route path="/" component={ArticleList}/>  
                    </Switch>  
                </div>
            </Router>
        );
    }
}

export default Navs;