import React from 'react';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';
import liappis1 from '../photos/liappis1.jpg'
import liappis2 from '../photos/liappis2.jpg'
import liappis3 from '../photos/liappis3.jpg'
import liappis4 from '../photos/liappis4.jpg'
import liappis5 from '../photos/liappis5.jpg'

function HomePage() {
    return ( 
        <FlexboxGrid>
            <Container style={{marginTop:'56px',position:'static',width:'100%',height:'100vh'}}>
                <Carousel autoplay shape="bar" className="custom-slider" style={{position:'absolute',width:"100%", height:"100%"}}>
                    <img src={liappis1} alt="Classrooms" />
                    <img src={liappis2} alt="Classrooms" />
                    <img src={liappis3} alt="Classrooms" />
                    <img src={liappis4} alt="Classrooms" />
                    <img src={liappis5} alt="Classrooms" />
                </Carousel>
                <Content 
                    className='content'
                    style={{backgroundColor:"white", borderRadius:'25px',zIndex:1,display:"flex",opacity:'90%', flexFlow:'column',alignSelf:'center',marginTop:'145px',position:'absolute'}}
                >
                    <h3 style={{textAlign:'center'}}>Πληροφορίες φροντιστήριου</h3>
                    <p style={{textAlign:'center'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
                        Ut enim ad minim veniam,<br/>
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> 
                        Excepteur sint occaecat cupidatat non proident,<br/> 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
                        Ut enim ad minim veniam,<br/>
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> 
                        Excepteur sint occaecat cupidatat non proident,<br/> 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                    </p>
                </Content>
            </Container>

        </FlexboxGrid>
     );
}

export default HomePage;