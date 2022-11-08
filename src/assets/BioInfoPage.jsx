import React from 'react';
import { Header,Container,Sidebar, Content } from 'rsuite';

function BioInfoPage({correctProf}) {
    return ( 
        <Container style={{height:'100vh'}}>
            <Sidebar style={{ textAlign:"center", backgroundColor:"#0008",marginTop:'56px',color:'white'}}>
                <img src={correctProf.picUrl} alt={correctProf.name} style={{borderRadius:'100px', height:'10em', width:'10em', marginTop:'15px'}}/>
                <p style={{fontFamily:'Halvetica'}}>
                    Τηλέφωνο:<br/>
                    Κοινωνικά δίκτυα: 
                </p>
            </Sidebar>
                <Container style={{fontFamily:'Halvetica' ,marginTop:'56px'}}>
                    <h3 style={{ textAlign:'center'}}>{correctProf.name}</h3>
                    <Content style={{fontSize:'medium'}}>{correctProf.profinfo}</Content>
                </Container>
        </Container>
    );
}

export default BioInfoPage;