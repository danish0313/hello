import React, {Component} from 'react';

import {Route,Switch , Redirect} from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Project from './project';
import Contact from './contact';


class Main extends Component{


render() {



return (

<Switch>

<Route path="/" exact component={Home}/>
<Route path="/resume"   render={ () =>  (<Resume/>) }/>
<Route path="/project" exact component={Project}/>
<Route path="/contact" exact component={Contact}/>
<Redirect to ="/" />



</Switch>




)


}

}


export default Main;
