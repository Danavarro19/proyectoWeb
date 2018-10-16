import React, { Component } from 'react';

import './App.css';

import SiteNavbar from './components/site-navbar/SiteNavbar.js';
import SquareText from './components/jumbotron/SquareText.js';
import Slider from './components/img-containers/Slider.js';

import Backdrop from './components/Backdrop/Backdrop.js'
import SideSignUp from './components/Backdrop/SideSignUp.js'

import Footer from './components/Footer/Footer.js'

class App extends Component {

  state = {
    sideSignUpOpen: false
  }

  sideSignUpHandler = () => {
    this.setState( prevState => {
       return {sideSignUpOpen:!prevState.sideSignUpOpen};
    });
  };

  render() {

    let sideSignUp;
    let backdrop;

    if (this.state.sideSignUpOpen){
      sideSignUp = <SideSignUp/>;
      backdrop = <Backdrop/>
    }

    return (
      <div className="App">

        <SiteNavbar/>
        <div className="wrapper flex">

          <SquareText className="SquareText" controlSideSignUpHandler={this.sideSignUpHandler}/>

          <Slider className="Slider"/>

          {sideSignUp}
          {backdrop}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
