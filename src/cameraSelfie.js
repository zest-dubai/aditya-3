import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Link, Redirect } from 'react-router-dom';
 
import ImagePreview from './ImagePreview'; 
import '../src/styles/imagePreview.css';
 
class App3 extends Component {
  constructor (props, context) {
    let token = localStorage.getItem("token2");
    super(props, context);
    this.state = { dataUri: null,
    token,
    camerr: false };
    this.onTakePhotoAnimationDone = this.onTakePhotoAnimationDone.bind(this);
  }
 
  onTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    this.setState({ dataUri });
  }
  onCameraError (error) {
    this.setState({
      camerr:true
  })
  localStorage.setItem("t1","e1");
    console.error('onCameraError', error);
  }
 
  render () {
    if(this.state.camerr){
      return(  <Redirect to= "/camerr"/>
      );
    }
    if(this.state.token != "abc")
    {
        return(
            <Redirect to="/customer"/>
        );
    } 
    return (
      <div className="cam">
        {
          (this.state.dataUri)
            ? <ImagePreview dataUri={this.state.dataUri} />
            : <div className="cam" style={{textAlign: 'center'}}> Make sure your face is clearly visible  <br/>
                  <Camera onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone} 
                   onCameraError = { (error) => { this.onCameraError(error); } }
                    idealFacingMode = {FACING_MODES.USER}
                    />  
                    <Link className='' to="/customer"><h3 style={{textAlign: 'left'}}>Back</h3></Link>            
              </div>
        }
      </div>
    );
  }
}
 
export default App3;
