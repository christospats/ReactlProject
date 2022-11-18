import React from 'react';
import { FlexboxGrid } from 'rsuite';
import profData from '../assets/profData';
import BioData from '../assets/BioData';
import woodText from'../photos/woodText.jpg';
import paperText from'../photos/boardText.jpg';

function Biography({ biographyRef}) {
    return (
        <div ref={biographyRef} style= {{backgroundImage: `url(${woodText})`, backgroundRepeat: 'round', paddingBlock: "5%"}}>
            <FlexboxGrid justify='space-around' style={{borderStyle:"solid", boxShadow: "10px 5px 30px black", paddingBlock: "10%", borderRadius:"10px", backgroundImage: `url(${paperText})`, backgroundRepeat: 'round', backgroundSize: "100%", marginLeft: "56px", marginRight: "56px"}}>
                {profData.map((profData) => (
                    <BioData profData={profData} key={profData.name} />
                ))}
            </FlexboxGrid>
        </div>
     );
}

export default Biography;