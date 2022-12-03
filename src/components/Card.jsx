import React from "react";
import data from "../data";
export default function Card(props){
    console.log(props) 
    return(
        <div className="card">
           <img src={props.item.imageUrl} alt="" className="card-img"/>
        <div className="card-text">
           <div className="location"><img src="../src/images/location.png" alt="" className="location-img" /> <span className="location-country">{props.item.location}</span><a href="{props.item.googleMapsUrl}" className="location-maps">view on google maps</a></div>
           <div className="card-text-heading">{props.item.title}</div>
           <div className="card-text-date">{props.item.startDate} - {props.item.endDate}</div>
        <div className="card-description">{props.item.description}</div>
        </div>
        </div>
    )
}