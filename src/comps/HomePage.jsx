import React,{useEffect, useState} from 'react';
import Info from './Inforamtion';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';
import liappis1 from '../photos/liappis1.jpg'
import liappis2 from '../photos/liappis2.jpg'
import liappis3 from '../photos/liappis3.jpg'
import liappis4 from '../photos/liappis4.jpg'
import liappis5 from '../photos/liappis5.jpg'


function HomePage({homeRef}, {infoRef}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:1475px)").matches)

    const [smallScreen,setSmallScreen]= useState(window.matchMedia("(min-width:1084px)").matches)
    
    useEffect(() => {
        window.matchMedia("(min-width: 1475px)").addEventListener('change', e => setMatches(e.matches));
    })

    useEffect(() => {
        window.matchMedia("(min-width:1084px)").addEventListener('change', e => setSmallScreen(e.matches));
    })

    return ( 
        <div ref={homeRef}>
            {matches&&(
                <FlexboxGrid>
                    <Container style={{marginTop:'56px',width:'100%',height:'95vh',display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#166534'}}>
                        <div style={{width:'40%', display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <div style={{fontSize:'xx-large', fontFamily:'fantasy',marginTop:'-56px', textShadow:'#27272a 1px 8px 10px'}}>
                                <Content style={{color:'black'}}>Φροντιστήριο- Θεωρητικών Επιστημών</Content>
                            </div>
                            <br/>
                            <br/>
                            <Info infoRef={homeRef}/>
                        </div>
                        <Carousel autoplay shape="bar" className="custom-slider" style={{width:"60%", height:"100%",borderBottomLeftRadius:'15px'}}>
                            <img src={liappis1} alt="Classrooms" />
                            <img src={liappis2} alt="Classrooms" />
                            <img src={liappis3} alt="Classrooms" />
                            <img src={liappis4} alt="Classrooms" />
                            <img src={liappis5} alt="Classrooms" />
                        </Carousel>
                    </Container>
                </FlexboxGrid>
            )}
            {!matches&&smallScreen&&(
                <FlexboxGrid>
                <Container style={{marginTop:'56px',width:'100%',height:'95vh',display:'flex', flexDirection:'row'}}>
                    <div style={{width:'40%',height:'500px'}}>
                        <Info infoRef={homeRef}/>
                    </div>
                    <Carousel autoplay shape="bar" className="custom-slider" style={{width:"60%", height:"100%"}}>
                        <img src={liappis1} alt="Classrooms" />
                        <img src={liappis2} alt="Classrooms" />
                        <img src={liappis3} alt="Classrooms" />
                        <img src={liappis4} alt="Classrooms" />
                        <img src={liappis5} alt="Classrooms" />
                    </Carousel>
                </Container>
            </FlexboxGrid>
            )}
            {!smallScreen&&!matches&&(
                <div>
                <Carousel autoplay shape="bar" className="custom-slider" style={{width:"100%", height:"100%"}}>
                        <img src={liappis1} alt="Classrooms" />
                        <img src={liappis2} alt="Classrooms" />
                        <img src={liappis3} alt="Classrooms" />
                        <img src={liappis4} alt="Classrooms" />
                        <img src={liappis5} alt="Classrooms" />
                    </Carousel>
                    <div>
                        <Info infoRef={homeRef}/>
                    </div>
                </div>
            )}
        </div>
     );
}

export default HomePage;