import React from 'react';
import { Container, Content, FlexboxGrid, Panel } from 'rsuite';
import profData from '../assets/profData';
import BioData from '../assets/BioData';

function Biography() {
    return ( 
        <FlexboxGrid justify='space-around' style={{borderStyle:"solid", paddingTop:'10%', paddingBottom:'10%', borderRadius:"25px", backgroundColor:"#FAEBD7"}}>
            {profData.map((profData) => (
                <BioData profData={profData} key={profData.name} />
            ))}
        </FlexboxGrid>
     );
}

export default Biography;