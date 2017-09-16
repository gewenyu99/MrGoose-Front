import React, { Component } from 'react';
import './App.css';
import Image from './Image';
import mleaf from './Maple_Leaf.svg'
import god from './god.png'

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
      marginTop: '0',
      position: 'absolute',
      left: ''+0.3*this.state.width,
      top: ''+0.01*this.state.width
    }
    const style21 = {
      marginTop: '0',
      position:'absolute',
      left: ''+0.36*this.state.width,
      top: ''+0.003*this.state.width,
      display: 'inline-block',

      padding: '0',
      marginTop: '0',
      marginRight: ''+ 0.03*this.state.width,
      fontSize: ''+0.06*this.state.width
    }
    const style22 = {
      position:'absolute',
      left: ''+0.47*this.state.width,
      top: ''+0.003*this.state.width,

      display: 'inline-block',
      padding: '0',
      marginTop: '0',
      marginLeft: ''+0.03*this.state.width,
      fontSize: ''+0.06*this.state.width
    }
    const style3 = {
      marginTop: '0',
      position: 'absolute',
      left: ''+0.65*this.state.width,
      top: ''+0.01*this.state.width
    }

    const style4 = {
      marginTop: '0',
      display: 'inline-block',
      position: 'absolute',
      left: ''+0.455*this.state.width,
      top: ''+0.025*this.state.width
    }

    const style5 = {
      marginTop: '0',  
      display: 'float',
      position: 'absolute',
      left: '0px',
      top: '0px'
    }

    const god1CSS = {
      marginTop: '0',
      display: 'inline-block',
      position: 'absolute',
      left: ''+0.12*this.state.width,
      top: '0'
    }

    const god2CSS = {
      marginTop: '0',
      display: 'inline-block',
      position: 'absolute',
      left: ''+0.7  *this.state.width,
      top: '0'
    }

    return (
      <div>
        <div className="App">
          <div className='TitleBar'>
            <img src = {god} width={this.state.width*0.2} style={god1CSS}/>
            <img src = {god} width={this.state.width*0.2} style={god2CSS} className = 'godReverse'/>
            <svg style = {style1} id= 'topleft'>
              <rect width={this.state.width*0.05} height={this.state.width*0.07} x="0" y="0" fill='#D91E18'/>
            </svg>
            <h1 style = {style21}>
              Mr
            </h1>
            <div style={style4}>
              <img src={mleaf} width={0.05*this.state.width} />
            </div>
            <h1 style = {style22}>
              Goose
            </h1>
            <svg style = {style3}>
              <rect width={this.state.width*0.05} height={this.state.width*0.07} x="0" y="0" fill='#D91E18'/>
            </svg>
          </div>
          
          <Image/>
        </div>
      </div>
    );
  }
}

export default App;
