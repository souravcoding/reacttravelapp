import React from "react"
import CardItems from "./CardItems"
import "./Cards.css"
import img from "./img-9.jpg"
import img2 from "./img-2.jpg"
import img3 from "./img-1.jpg"
import img4 from "./img-6.jpg"
import img5 from "./img-7.jpg"


const Cards=()=>{

    return <>
      <h1>Check out our epic destinations</h1>
    <div className="Cards" >
         
      
    <CardItems imga={img} title="Adventure" para="Explore the hidden waterfall deep inside the amazon jungle."/>
    <CardItems imga={img2} title="Luxury" para="Travel through the island of Bali on private cruise"/>
    

    </div>
    <div className="Cards2" >
      
    <CardItems imga={img3} title="Adventure" para="Explore the hidden waterfall deep inside the amazon jungle."/>
    <CardItems imga={img4} title="Luxury" para="Travel through the island of Bali on private cruise"/>
    <CardItems imga={img5} title="Luxury" para="Travel through the island of Bali on private cruise"/>


    </div>

    
    
    </>
}

export default Cards