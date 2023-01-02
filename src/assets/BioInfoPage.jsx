import React,{useEffect,useState} from 'react';
import { Container,Sidebar, Content } from 'rsuite';

function BioInfoPage({correctProf}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:602px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 602px)").addEventListener('change', e => setMatches(e.matches));
    })

    return ( 
        <div>
            {matches && (<div>
                            <Container style={{height:'100vh',fontFamily:'Times New Roman'}}>
                                <Sidebar style={{ display:'flex',alignItems:'center',flexDirection:'column', backgroundColor:"#166534",marginTop:'56px',color:'black'}}>
                                    <img src={correctProf.picUrl} alt={correctProf.name} style={{borderRadius:'100px', height:'10em', width:'10em', marginTop:'15px'}}/>
                                    <Content>
                                        Τηλέφωνο: <a href="tel:PHONE_NUM" style={{color:"#FFFFFF"}}> 6944719951 </a><br/>Κοινωνικά δίκτυα: <a href="https://www.facebook.com/profile.php?id=100008279084746" rel="noreferrer" target="_blank" style={{color:'#FFFFFF'}}>facebook</a>
                                    </Content>                                  
                                </Sidebar>
                                    <Container style={{marginTop:'56px',background: "linear-gradient(to right, #166534 20%,#22c55e)", textAlign:'justify'}}>
                                        <div style={{ color:'black',backgroundColor:'#ecfccb', boxShadow: "10px 5px 30px black", padding: "3%", borderBottomLeftRadius:"10px"}}>
                                            <h3 style={{ textAlign:'center'}}>{correctProf.name}</h3>
                                            <Content style={{fontSize:'medium'}}>{correctProf.profinfo}</Content>
                                        </div>
                                    </Container>
                            </Container>
                </div>
            )}
            {!matches && (<div>
                            <Container style={{height:'100vh',fontFamily:'Times New Roman'}}>
                                <Content style={{ display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row', gap:'10px',backgroundColor:"#166534",marginTop:'56px',color:'black'}}>
                                    <img src={correctProf.picUrl} alt={correctProf.name} style={{borderRadius:'100px', height:'8em', width:'8em', marginTop:'15px'}}/>
                                    <Content>
                                       Τηλέφωνο: <a href="tel:PHONE_NUM" style={{color:"#FFFFFF"}}> 6944719951 </a> <br/>Κοινωνικά δίκτυα: <a href="https://www.facebook.com/profile.php?id=100008279084746" target="_blank" rel="noreferrer" style={{color:'#FFFFFF'}}>facebook</a>
                                    </Content>
                                </Content>
                                <Container style={{background: "linear-gradient(to bottom, #166534 20%,#22c55e)", textAlign:'justify'}}>
                                    <div style={{ color:'black',backgroundColor:'#ecfccb', boxShadow: "10px 5px 30px black", padding: "3%", borderRadius:"10px"}}>
                                        <h3 style={{ textAlign:'center'}}>{correctProf.name}</h3>
                                        <Content style={{fontSize:'medium'}}>{correctProf.profinfo}</Content>
                                    </div>
                                </Container>                        
                            </Container>
                </div>
            )}
        </div>
    );
}

export default BioInfoPage;