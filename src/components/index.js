import React from 'react';
import TitleBar from './Titlebar';
import Joke from './jokes';
import Categories from './jokescategories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Pages = () => {
    return(
        <Router>
            <Route exact path="http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/" component= {TitleBar} />
            <Route exact path="http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/" component= {Categories} />
            <Route exact path="http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/categories/:category" component= {Joke} />
            <Route path = "http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/joke" component = {Joke} />
        </Router>
    );
};
export default Pages;