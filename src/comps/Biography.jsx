import React, {useState,useEffect} from 'react';
import { FlexboxGrid, Content } from 'rsuite';
import profData from '../assets/profData';
import BioData from '../assets/BioData';

function Biography({ biographyRef}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:768px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }) 

    return (
        <div>
            {matches && (
                <div ref={biographyRef} style= {{ backgroundColor:'#166534',paddingBlock: "6%", paddingLeft:'10%', paddingRight:'10%'}}>
                    <div style={{fontSize:'xx-large', fontFamily:'fantasy',marginTop:'-56px', textShadow:'#27272a 1px 8px 10px'}}>
                        <Content style={{color:'black', display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column'}}>Φροντιστήριο Θεωρητικών Επιστημών/ Βιογραφικά</Content>
                    </div>
                    <br/>
                    <br/>
                    <FlexboxGrid justify='space-around' style={{background: "linear-gradient(to bottom right, #22c55e,#14532d 85%)",borderStyle:"solid", boxShadow: "10px 5px 30px black", paddingBlock: "10%", borderRadius:"10px", backgroundSize: "100%", marginLeft: "36px", marginRight: "36px",borderColor:'black'}}>
                        {profData.map((profData) => (
                            <BioData profData={profData} key={profData.name} />
                        ))}
                    </FlexboxGrid>
                </div>
            )}
            {!matches && (
                <div ref={biographyRef}>
                    <FlexboxGrid justify='space-around' style={{backgroundColor:'#14532d',
                    padding:'2em'}}>
                        {profData.map((profData) => (
                            <BioData profData={profData} key={profData.name} />
                        ))}
                    </FlexboxGrid>
                </div>
            )}
        </div>
     );
}

export default Biography;