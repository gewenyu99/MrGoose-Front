import React, { Component } from 'react';
import './App.css';
import Image from './Image';
import mleaf from './Maple_Leaf.svg'

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
    const style21 = {

      textAlign: 'center',
      display: 'inline-block',
      padding: '0',
      marginTop: '0',
      marginRight: ''+ 0.03*this.state.width,
      fontSize: ''+0.06*this.state.width
    }
    const style22 = {

      textAlign: 'center',
      display: 'inline-block',
      padding: '0',
      marginTop: '0',
      marginLeft: ''+0.03*this.state.width,
      fontSize: ''+0.06*this.state.width
    }
    const style3 = {
      position: 'absolute',
      left: ''+0.65*this.state.width,
      top: ''+0.01*this.state.width
    }

    const style4 = {
      display: 'inline-block',
      position: 'absolute',
      left: ''+0.455*this.state.width,
      top: ''+0.025*this.state.width
    }

    return (
      <div className="App">
        <div className='TitleBar'>
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
    );
  }
}

export default App;
