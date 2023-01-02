import { Header } from "rsuite";
import { useState, useEffect } from "react";

function ComHeader() {

    const [smallScreen, setSmallScreen] = useState(window.matchMedia("(min-width:767px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width:767px)").addEventListener('change', e => setSmallScreen(e.matches));
    })

    return (  
        <div>
            {smallScreen && (
                <Header style={{background: "linear-gradient(to top right, #166534 17%, #16a34a)",  paddingBottom: "15px",display: "flex", justifyContent: "center", color:'#171717',fontWeight:'bold', fontSize:'large', fontFamily:'Times New Roman'}}>
                    <div style={{textAlign: "center"}}>
                    <p>Email: liappistsikrika@gmail.com / Τηλέφωνο επικοινωνίας: <a href="tel:PHONE_NUM" style={{color:"#FFFFFF"}}> 2421 400810 </a> / <a href="https://www.facebook.com/profile.php?id=100008279084746" target="_blank" rel="noreferrer" style={{color:"#FFFFFF"}}> Το Facebook μας!</a></p>
                    </div>
                </Header>
            )}
            {!smallScreen && (
                <Header style={{backgroundColor:'#16a34a',  paddingBottom: "15px",display: "flex", justifyContent: "center", color:'#171717',fontWeight:'bold', fontSize:'large', fontFamily:'Times New Roman'}}>
                    <div style={{textAlign: "center"}}>
                    <p>Email: liappistsikrika@gmail.com / Τηλέφωνο επικοινωνίας: <a href="tel:PHONE_NUM" style={{color:"#FFFFFF"}}> 2421 400810 </a> / <a href="https://www.facebook.com/profile.php?id=100008279084746" target="_blank" rel="noreferrer" style={{color:"#FFFFFF"}}> Το Facebook μας!</a></p>
                </div>
            </Header>
            )}
        </div>
    );
}

export default ComHeader;