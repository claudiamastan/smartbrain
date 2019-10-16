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
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImg');
    const width = image.width;
    const height = image.height;

    return({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width * (1 - clarifaiFace.right_col),
      bottomRow: height * (1 - clarifaiFace.bottom_row)
    });
  };

  displayFaceBox = (box) => {
    this.setState({box});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));

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
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
