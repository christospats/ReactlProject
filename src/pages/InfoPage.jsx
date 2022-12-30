import {Content} from 'rsuite'
import React,{useEffect, useState} from 'react';

function InfoPage({schData}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:1475px)").matches)
    
    const [smallScreen,setSmallScreen]= useState(window.matchMedia("(min-width:1084px)").matches)
    
    const [mediumScreen, setmediumScreen] = useState(window.matchMedia("(min-width:1883px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 1475px)").addEventListener('change', e => setMatches(e.matches));
    }) 

    useEffect(() => {
        window.matchMedia("(min-width:1084px)").addEventListener('change', e => setSmallScreen(e.matches));
    })

    useEffect(() => {
        window.matchMedia("(min-width:1883px)").addEventListener('change', e => setmediumScreen(e.matches));
    })

    return ( 
        <div>
            {matches&&mediumScreen&&
            (<div style={{textAlign:'justify',padding:'2%',backgroundColor:"#dcfce7",boxShadow: "10px 5px 25px #27272a",}}>
                <div style={{ fontSize:'large', color:'black',}}>
                    <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                    <br/>
                    <Content>{schData.content}</Content>    
                </div>
             </div>)}
            {!matches&&smallScreen&&
             (<div style={{
                    padding:'2em',
                    backgroundColor:"#dcfce7",fontSize:'large', color:'black',}}>
                <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                <Content style={{overflow:'scroll',height:'100%', textAlign:'justify'}}>
                    {schData.content}
                </Content>     
            </div>
            )}
            {!smallScreen&&!matches&&(
                <div style={{
                    padding:'2em',
                    backgroundColor:"#dcfce7",fontSize:'large', color:'black'}}>
                <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                <Content style={{overflow:'scroll',height:"450px", textAlign:'justify'}}>
                    {schData.content}
                </Content>
                    
            </div>
            )}
            {matches&&!mediumScreen&&(
                <div style={{textAlign:'justify',padding:'2%',backgroundColor:"#dcfce7",boxShadow: "10px 5px 30px black",}}>
                <div style={{ fontSize:'large', color:'black',}}>
                    <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                    <br/>
                    <Content style={{overflow:'scroll',height:'400px', textAlign:'justify'}}>{schData.content}</Content>    
                </div>
             </div>
            )}
        </div>
    );
}

export default InfoPage;