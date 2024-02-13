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
    const [glow, setGlow] = useState("")

    function glowHandler(color){
        if(glow == color){
            setGlow("")
        }
        else{
            setGlow(color)
        }
    }

    return(
        <div>
            <div style={trafficTopStyles}></div>
            <div style={trafficLightContainerStyle}>
                <div className={`light light-stop ${glow === "red" ? "light-stop-on" : ""}`} onClick={() => glowHandler("red")}></div>
                <div className={`light light-caution ${glow === "orange" ? "light-caution-on" : ""}`} onClick={() => glowHandler("orange")}></div>
                <div className={`light light-go ${glow === "green" ? "light-go-on" : ""}`} onClick={() => glowHandler("green")}></div>
            </div>
        </div>
    )
}