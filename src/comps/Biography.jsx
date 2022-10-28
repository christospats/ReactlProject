import React from 'react';
import { FlexboxGrid } from 'rsuite';
import profData from '../assets/profData';
import BioData from '../assets/BioData';

function Biography({ biographyRef}) {
    return (
        <div ref={biographyRef}>
            <FlexboxGrid justify='space-around' style={{borderStyle:"solid", paddingBlock: "10%", borderRadius:"25px", backgroundColor:"#FAEBD7", marginLeft: "56px", marginRight: "56px"}}>
                {profData.map((profData) => (
                    <BioData profData={profData} key={profData.name} />
                ))}
            </FlexboxGrid>
        </div>
     );
}

export default Biography;