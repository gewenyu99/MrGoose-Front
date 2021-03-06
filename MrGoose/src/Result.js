import React, {Component} from 'react'; 

import god from './god2.jpg'

class Result extends React.Component {
    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0};
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
        const style = {
            position: 'absolute',
            top:'10vw',
            fontSize: '1vw',
            marginLeft: this.state.width * 0.045 + 'px',
            width: this.state.width * 0.5,
            display: this.props.ifShow
        }
    
        return (
           <div style = {style} className = 'result'>
               <h1>
                   {this.props.result}
               </h1>
               <img src={god} />
           </div>
        )
    }
  }
    
export default Result;
