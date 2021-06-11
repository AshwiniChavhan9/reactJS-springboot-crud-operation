import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCourseComponent from "./components/ListCourseComponent"
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCourseComponent from './components/CreateCourseComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';
import ViewCourseComponent from './components/ViewCourseComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent></HeaderComponent>
          <div className="container">
          <Switch> 
                          <Route path = "/" exact component = {ListCourseComponent}></Route>
                          <Route path = "/courses" component = {ListCourseComponent}></Route>
                          <Route path = "/add-course" component = {CreateCourseComponent}></Route>
                          <Route path = "/view-course/:id" component = {ViewCourseComponent}></Route>
                          <Route path = "/update-course/:id" component = {UpdateCourseComponent}></Route>
           </Switch>
          </div>
        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
