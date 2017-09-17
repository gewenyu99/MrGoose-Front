import React, {Component} from 'react';
import Scroll, {scroller} from 'react-scroll';  
import canada from './Canada.jpg'

class Image extends React.Component {
    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, file: '',imagePreviewUrl: '', w:'', h: '600', url: 'https://mr.goose.ml/api', promiseValue: ''};
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    //general scaling
    scrollToTop() {
        Scroll.animateScroll.scrollToTop();
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



    //Handles submission, to be done.
    _handleSubmit(e) {
      var formData = new FormData();
      e.preventDefault();//Prevent going off application.
      console.log('uploading ', this.state.file);
	
      const file = this.state.file;
      formData.append("file", file);
      fetch(this.state.url, { 
        method: 'POST',
        body: formData
      }).then(function(response) {
        console.log(response);
        const temp = response.json().then(function(result){ 
        this.state.promiseValue = result; 
	});
        this.props.returnValue(this.state.promiseValue);
        console.log(temp);

        return response;
      })
    }
  

    //Handles loading of files.
    _handleImageChange(e) {
      e.preventDefault();//Prevent going off application.

      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });

        console.log('uploading ', this.state.file);
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
        const style = {
            marginLeft: this.state.width * 0.05 + 'px',
            width: this.state.width * 0.5,
            display: this.props.ifShow
        }
        
      
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width = {0.48*this.state.width}/>);
        } else {
            $imagePreview = (<img src={canada} width = {0.48*this.state.width}/>);
        }
    
        return (
            <div className="previewComponent" style={style}>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <label className = 'myLabel'>
                        Click to Choose an Image
                        <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)} />
                    </label>

                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                       
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Rate my image, Mr.Goose!
                    </button>
                </form>
                
                <p>
                    
                </p>
            </div>
        )
    }
  }
    
export default Image;
