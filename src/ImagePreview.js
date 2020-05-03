import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link, Switch,Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './styles/imagePreview.css';
import App3 from './cameraSelfie';


 function ImagePreview  ({ dataUri, isFullscreen })  {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';

  const [val, setVal] = useState(0);
  const [cli, setCli] = useState(0);
   function click() {
    setCli(true);
    localStorage.setItem("img", JSON.stringify(dataUri));
    localStorage.setItem("tokenS", "abc")
    console.log('Stored');
  };

  function retake(){
      console.log('retake..');
      localStorage.setItem("img", '' );
      setVal(true);
      
      /*return(
        // doubt-  to take it back to camera page    
        <Redirect to="/login"/>
      ); */
  };
  
  if(val)
    {
      return (
        <App3/>
      );
    }
    else if(cli === true){
      return(
        <Redirect to="/gid"/>
      );
    }
    else{
  return (

    // if(this.retake === true)
    //true ? <Redirect /> : <div></div>

    <div className={'demo-image-preview ' + classNameFullscreen}>
       <div className= 'heading' > <b>PREVIEW</b></div>
        
       {//<h2 style={{color:"#047504", paddingTop:'20px'}}>PREVIEW</h2> 
    }
      <img src={dataUri} /> <br/>
      <button className="btn1" type="button" onClick={click}>LOOKS GOOD</button>
      <button className="btn" type="button" onClick={retake}>RETAKE</button>
    </div>
  );
    }
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;