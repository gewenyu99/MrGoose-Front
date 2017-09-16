import React, { Component } from 'react';
import './App.css';
import Image from './Image';


class App extends Component {

  constructor() {
    super();
    this.state = { width: 0, height: 0, file: '',imagePreviewUrl: '' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    const style1 = {
      position: 'absolute',
      left: ''+0.3*this.state.width,
      top: ''+0.01*this.state.width
    }
    const style2 = {
      textAlign: 'center',
      display: 'inline-block',
      padding: '0',
      margin: '0',
      fontSize: ''+0.06*this.state.width
      
    }
    const style3 = {
      position: 'absolute',
      left: ''+0.65*this.state.width,
      top: ''+0.01*this.state.width
    }

    return (
      <div className="App">
        <div className='TitleBar'>
          <svg style = {style1}>
            <rect width={this.state.width*0.05} height={this.state.width*0.07} x="0" y="0" fill='#D91E18'/>
          </svg>
          <h1 style = {style2}>
            Mr
          </h1>
          <h1 style = {style2}>
            Goose
          </h1>
          <svg style = {style3}>
            <rect width={this.state.width*0.05} height={this.state.width*0.07} x="0" y="0" fill='#D91E18'/>
          </svg>
        </div>
        
        <Image/>
      </div>
    );
  }
}

export default App;
