import React from "react";
import {useState} from "react";
// include your styles into the webpack bundle

export default function TrafficLight(){
    const trafficTopStyles = {
        width: "15px",
        background: "black",
        height: "100px",
        margin: "auto",
        borderRadius:"20px 20px 0px 0px"

    }

    const trafficLightContainerStyle = {
        width: "200px",
        background: "black",
        height: "400px",
        borderRadius:"20px",
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        padding: "10px"

    }
    
     const [red, setRed] = useState(false)
     const [yellow, setYellow] = useState(false)
     const [green, setGreen] = useState(false)
    
     function redHandler(){
         setRed(prevRed => !prevRed)
         setYellow(false)
         setGreen(false)
     }

     function yellowHandler(){
         setYellow(prevYellow => !prevYellow)
         setRed(false)
         setGreen(false)
     }

     function greenHandler(){
         setGreen(prevGreen => !prevGreen)
         setRed(false)
         setYellow(false)
     }

    return(
        <div>
            <div style={trafficTopStyles}></div>
            <div style={trafficLightContainerStyle}>
                <div className={`light light-stop ${red ? "light-stop-on" : ""}`} onClick={redHandler}></div>
                <div className={`light light-caution ${yellow ? "light-caution-on" : ""}`} onClick={yellowHandler}></div>
                <div className={`light light-go ${green ? "light-go-on" : ""}`} onClick={greenHandler}></div>
            </div>
        </div>
    )
}