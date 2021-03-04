import React from "react"
import { Link } from "react-router-dom"

import "./Cards.css"
const CardItems=(props)=>{
    


    return (<><div class="card " style={{width: "25rem"}}>
    <img src={props.imga} class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title"><b>{props.title}</b></h4>
      <p class="card-text">{props.para}</p>
      <Link href="#" class="btn btn-primary">EXPLORE</Link>
    </div>
  </div>
  </>)
} 

export default CardItems