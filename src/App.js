import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesOption = {
  "particles": {
    "number": {
        "value": 100
    },
    "size": {
        "value": 3
    }
  },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
  }
};

class App extends Component{
  render(){
    return(
      <div className="App">
        <Particles
          className="particles" 
          params={particlesOption}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
