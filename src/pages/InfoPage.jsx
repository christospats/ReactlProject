import {Content} from 'rsuite'
import React,{useEffect, useState, onChange} from 'react';

function InfoPage({schData}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:768px)").matches)
    
    
    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }) 

    return ( 
        <div>
            {matches && 
            (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'#fefbe9'}}>
                <div style={{
                            marginLeft:'15%',
                            marginRight:'15%',
                            border:'solid',
                            borderRadius:"10px",
                            padding:'2em',
                            boxShadow: "10px 5px 30px black",
                            backgroundColor:"#e1eedd",
                            textAlign:'center'}}>
                    <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                    <Content>{schData.content}</Content>
                </div>    
             </div>)}
            {!matches &&
             (<div style={{
                    padding:'2em',
                    boxShadow: "10px 5px 30px black",
                    backgroundColor:"#e1eedd"}}>
                <h3 style={{textAlign:'center'}}>{schData.title}</h3>
                <Content style={{overflow:'scroll',height:"450px", textAlign:'justify'}}>
                    {schData.content}
                </Content>
                    
            </div>
            )}
        </div>
    );
}

export default InfoPage;