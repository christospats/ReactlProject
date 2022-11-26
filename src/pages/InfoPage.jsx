import {Content} from 'rsuite'
import React,{useEffect, useState} from 'react';

function InfoPage({schData}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:768px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }) 

    return ( 
        <div>
            {matches && 
            (<div class='heading' style={{
                        marginLeft:'15%',
                        marginRight:'15%',
                        border:'solid',
                        borderRadius:"10px",
                        padding:'2em',
                        boxShadow: "10px 5px 30px black",
                        backgroundColor:"#e1eedd"}}>
                <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                <Content>{schData.content}</Content>
            </div>)}
            {!matches &&
             (<div class='heading' style={{
                        border:'solid',
                        padding:'2em',
                        boxShadow: "10px 5px 30px black",
                        backgroundColor:"#e1eedd"}}>
                <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                <Content>{schData.content}</Content>
            </div>)}
        </div>
    );
}

export default InfoPage;