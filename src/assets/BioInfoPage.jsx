import React,{useEffect,useState} from 'react';
import { Header,Container,Sidebar, Content } from 'rsuite';

function BioInfoPage({correctProf}) {
    const [matches, setMatches] = useState(window.matchMedia("(min-width:602px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 602px)").addEventListener('change', e => setMatches(e.matches));
    })

    return ( 
        <div>
            {matches && (<div>
                            <Container style={{height:'100vh'}}>
                                <Sidebar style={{ textAlign:"center", backgroundColor:"#0008",marginTop:'56px',color:'white'}}>
                                    <img src={correctProf.picUrl} alt={correctProf.name} style={{borderRadius:'100px', height:'10em', width:'10em', marginTop:'15px'}}/>
                                    <table style={{fontFamily:'Halvetica'}}>
                                        <tbody>
                                            <tr>
                                                <td>Τηλέφωνο:</td>
                                                <td>6944719951</td>
                                            </tr>
                                            <tr>
                                                <td> Κοινωνικά δίκτυα:</td>
                                                <td><a href="https://www.facebook.com/profile.php?id=100008279084746">facebook</a></td>
                                            </tr>
                                        </tbody>
                                    </table>                                     
                                </Sidebar>
                                    <Container style={{fontFamily:'Halvetica' ,marginTop:'56px'}}>
                                        <h3 style={{ textAlign:'center'}}>{correctProf.name}</h3>
                                        <Content style={{fontSize:'medium'}}>{correctProf.profinfo}</Content>
                                    </Container>
                            </Container>
                </div>
            )}
            {!matches && (<div>
                            <Container>
                                <Content style={{ textAlign:"center", backgroundColor:"#0008",color:'white',display:'flex',flexDirection:'row',marginTop:'56px',justifyContent: 'left', alignItems: 'center'}}>
                                    <img src={correctProf.picUrl} alt={correctProf.name} style={{borderRadius:'100px', height:'10em', width:'10em'}}/>
                                    <table style={{fontFamily:'Halvetica'}}>
                                        <tbody>
                                            <tr>
                                                <td>Τηλέφωνο:</td>
                                                <td>6944719951</td>
                                            </tr>
                                            <tr>
                                                <td> Κοινωνικά δίκτυα:</td>
                                                <td><a href="https://www.facebook.com/profile.php?id=100008279084746">facebook</a></td>
                                            </tr>
                                        </tbody>
                                    </table>     
                                </Content>
                                <Container style={{fontFamily:'Halvetica'}}>
                                    <h3 style={{ textAlign:'center'}}>{correctProf.name}</h3>
                                    <Content style={{fontSize:'medium'}}>{correctProf.profinfo}</Content>
                                </Container>                        
                            </Container>
                </div>
            )}
        </div>
    );
}

export default BioInfoPage;