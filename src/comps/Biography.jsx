import React, {useState,useEffect} from 'react';
import { FlexboxGrid } from 'rsuite';
import profData from '../assets/profData';
import BioData from '../assets/BioData';
import woodText from'../photos/woodText.jpg';
import paperText from'../photos/boardText.jpg';

function Biography({ biographyRef}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:768px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }) 

    return (
        <div>
            {matches && (
                <div ref={biographyRef} style= {{ backgroundColor:'#fefbe9',paddingBlock: "6%", paddingLeft:'10%', paddingRight:'10%'}}>
                    <FlexboxGrid justify='space-around' style={{backgroundColor:'#e1eedd',borderStyle:"solid", boxShadow: "10px 5px 30px black", paddingBlock: "10%", borderRadius:"10px", backgroundSize: "100%", marginLeft: "36px", marginRight: "36px"}}>
                        {profData.map((profData) => (
                            <BioData profData={profData} key={profData.name} />
                        ))}
                    </FlexboxGrid>
                </div>
            )}
            {!matches && (
                <div ref={biographyRef}>
                    <FlexboxGrid justify='space-around' style={{
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