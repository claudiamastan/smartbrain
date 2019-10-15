import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '32ee724d71b24bdfb6f9de591a055efa'
});

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
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Click!');

    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg")
    .then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );

  }

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
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
