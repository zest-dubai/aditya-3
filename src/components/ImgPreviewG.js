import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link, Switch,Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import '../styles/imagePreview.css';
import AppG from './gidcam';


 function ImagePreviewG  ({ dataUri, sides, isFullscreen })  {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';

  //const { sides } = this.props;
  const [val, setVal] = useState(0);
  const [cli, setCli] = useState(0);
  let i = sides;
  let view='';
  if(sides === 1 || sides ===2)
   view= 'Front Side';
   if(sides === 3)
   view= 'Back Side';
  
  function click() {
      
    setCli(true);
    localStorage.setItem("img"+i, JSON.stringify(dataUri));
    localStorage.setItem("tokenG", "abc");
    console.log('Stored' + {sides});
  };

  function retake() {
      console.log('retake..');
      localStorage.setItem("img"+i, '' );
      setVal(true);
       
      /*return(
        // doubt-  to take it back to camera page    
        <Redirect to="/login"/>
      ); */
  };
  
  if(val)
    {
      return (
        <AppG sides={sides}/>
      );
    }
  else if(cli === true){
        if(sides === 1 || sides === 3)
      return(
        <Redirect to="/success"/>
      );
      if(sides === 2)
      return(
        <AppG sides={sides+1}/>
      );
    }
  else{
  return (      

    // if(this.retake === true)
    //true ? <Redirect /> : <div></div>

    <div className={'demo-image-preview ' + classNameFullscreen}>
       <div className= 'heading'>The {view} Preview <br/>
       (Your name and photo should be clearly visible)
       </div> 
      <img src={dataUri} />
      <button className="btn1" type="button" onClick={click}>LOOKS GOOD</button>
      <button className="btn" type="button" onClick={retake}>RETAKE</button>
    </div>
  );
    }
};

ImagePreviewG.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreviewG;