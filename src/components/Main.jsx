import React from 'react'
import Button from './Button'
import "../App.css"
import "./Main.css"
import video from "./video-1.mp4"
const Main=()=>{
    
    return (<>

    <div className="main-container">
      <video src={video} autoPlay loop muted> </video>
      <h1>Adventure Awaits</h1>
      <p>What you waiting for</p>
    
      <div className="main-btns">
          <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large" children="Get Started"></Button>
          <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large" >Watch Trailer<i className="far fa-play-circle"></i> </Button>

      </div>
    </div>
    
    </>)
}

export default Main