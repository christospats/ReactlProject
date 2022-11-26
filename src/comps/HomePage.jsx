import React,{useEffect, useState} from 'react';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';
import liappis1 from '../photos/liappis1.jpg'
import liappis2 from '../photos/liappis2.jpg'
import liappis3 from '../photos/liappis3.jpg'
import liappis4 from '../photos/liappis4.jpg'
import liappis5 from '../photos/liappis5.jpg'


function HomePage({homeRef}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:682px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 682px)").addEventListener('change', e => setMatches(e.matches));
    })

    return ( 
        <div ref={homeRef}>
            {matches&&(
                <FlexboxGrid>
                    <Container style={{marginTop:'56px',width:'100%',height:'95vh'}}>
                        <Carousel autoplay shape="bar" className="custom-slider" style={{width:"100%", height:"100%"}}>
                            <img src={liappis1} alt="Classrooms" />
                            <img src={liappis2} alt="Classrooms" />
                            <img src={liappis3} alt="Classrooms" />
                            <img src={liappis4} alt="Classrooms" />
                            <img src={liappis5} alt="Classrooms" />
                        </Carousel>
                    </Container>
                </FlexboxGrid>
            )}
            {!matches&&(
                <FlexboxGrid>
                    <Container style={{marginTop:'56px',width:'100%',height:'47vh'}}>
                        <Carousel autoplay shape="bar" className="custom-slider" style={{width:"100%", height:"100%"}}>
                            <img src={liappis1} alt="Classrooms" />
                            <img src={liappis2} alt="Classrooms" />
                            <img src={liappis3} alt="Classrooms" />
                            <img src={liappis4} alt="Classrooms" />
                            <img src={liappis5} alt="Classrooms" />
                        </Carousel>
                    </Container>
                </FlexboxGrid>
            )}
        </div>
     );
}

export default HomePage;