import React, {useState, useEffect} from "react";
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
        padding: "10px",
        marginBottom: "20px"

    }
    //State that will control all 3 colors 
    const [glow, setGlow] = useState("")
    const [auto, setAuto] = useState(false)
    
    useEffect(() => {
        if(auto){
            if(glow === "red"){
                setTimeout(()=>{
                    setGlow("green")
                },1000)
            }
            else if(glow === "green"){
                setTimeout(()=>{
                    setGlow("orange")
                },1000)
            }
            else if(glow === "orange"){
                setTimeout(()=>{
                    setGlow("red")
                },1000)
            }
            else {
                setTimeout(()=>{
                    setGlow("green")
                },1000)
            }
        } 
    },[glow,auto])

    //Handler function receives the color and sets the glow to that color
    function glowHandler(color){
        //Checks condition if the color given is the same as the last value of state, in that case, turn off the light.
        if(glow == color){
            setGlow("")
        }
        //If last value of state not equal to color given, turn on the light.
        else{
            setGlow(color)
        }
    }

    return(
        <div>
            <div style={trafficTopStyles}></div>
            <div style={trafficLightContainerStyle}>
                <div className={`light light-stop ${glow === "red" ? "light-stop-on" : ""}`} onClick={() => auto ? ()=>{} :glowHandler("red")}></div>
                <div className={`light light-caution ${glow === "orange" ? "light-caution-on" : ""}`} onClick={() => auto ? ()=>{} :glowHandler("orange")}></div>
                <div className={`light light-go ${glow === "green" ? "light-go-on" : ""}`} onClick={() => auto ? ()=>{} :glowHandler("green")}></div>
            </div>
            
             { auto === false && <button onClick={() => setAuto(true)} className="btn btn-success">GO Auto Mode</button>}
             { auto === true && <button onClick={() => setAuto(false)} className="btn btn-success">GO Manual Mode</button>}
        </div>
        
    )
}