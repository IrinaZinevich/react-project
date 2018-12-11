import React, {Component} from 'react';
import CardsList from './CardsList';
import ArticleList from './ArticleList';
import {BrowserRouter, Route} from 'react-router-dom';

class RoutingPages extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
              <CardsList />
          )}/>

          <Route exact={true} path='/articlelist' render={() => (
              <ArticleList />
          )}/>

          <Route exact={true} path='/todolist' render={() => (
              <todoList />
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default RoutingPages;
