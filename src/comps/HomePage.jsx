import React from 'react';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';
import liappis1 from '../photos/liappis1.jpg'
import liappis2 from '../photos/liappis2.jpg'
import liappis3 from '../photos/liappis3.jpg'
import liappis4 from '../photos/liappis4.jpg'
import liappis5 from '../photos/liappis5.jpg'


function HomePage({homeRef}) {
    return ( 
        <div style={{minHeight:'100vh'}} ref={homeRef}>
            <FlexboxGrid>
                <Container style={{marginTop:'56px',position:'static',width:'100%',height:'50em'}}>
                    <Carousel autoplay shape="bar" className="custom-slider" style={{position:'absolute',width:"100%", height:"100%"}}>
                        <img src={liappis1} alt="Classrooms" />
                        <img src={liappis2} alt="Classrooms" />
                        <img src={liappis3} alt="Classrooms" />
                        <img src={liappis4} alt="Classrooms" />
                        <img src={liappis5} alt="Classrooms" />
                    </Carousel>
                </Container>
            </FlexboxGrid>
        </div>
     );
}

export default HomePage;