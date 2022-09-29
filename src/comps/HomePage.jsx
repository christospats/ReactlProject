import React from 'react';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';

function HomePage() {
    return ( 
        <FlexboxGrid>
            <Container style={{marginTop:'56px',marginBottom:'56px',width:"100%", height:"100%",position:'static'}}>
                <Carousel autoplay className="custom-slider" style={{position:'absolute'}}>
                    <img src='https://scontent.fskg1-1.fna.fbcdn.net/v/t31.18172-8/10258762_1391223734496916_2223556813288643439_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_ohc=eUL7ZpDLINYAX-PWFq9&tn=lGs49qPfaD2b0l28&_nc_ht=scontent.fskg1-1.fna&oh=00_AT_3vhCNrMU4OEdgCaQf2YEpHbmqHPi4CgwKz2o15SMMKA&oe=63582A98'alt="Classrooms" />
                    <img src='https://scontent.fskg1-2.fna.fbcdn.net/v/t31.18172-8/1973621_1391159501170006_7742655064997543171_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=B85YqIFLKiMAX8QcdsL&_nc_ht=scontent.fskg1-2.fna&oh=00_AT-iV539uvEcHG3yvDpawLxDmrw-dP5nw5RvJuEY9a9-wA&oe=6357B080' alt="Classrooms" />
                    <img src='https://scontent.fskg1-2.fna.fbcdn.net/v/t31.18172-8/10275455_1391154691170487_6968689000093356810_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=96SvL5MNHXUAX_Y5eMO&_nc_ht=scontent.fskg1-2.fna&oh=00_AT-z8b8n7JJJTzZxD02ioIUiEEu9-pxI01-Jq8MAT1TgJg&oe=6358E155' alt="Classrooms" />
                    <img src='https://scontent.fskg1-2.fna.fbcdn.net/v/t31.18172-8/860497_1391153864503903_4262795778155531845_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=UgimJyHiHmIAX_YioSg&_nc_ht=scontent.fskg1-2.fna&oh=00_AT9t0IldVO7U5wcLFSFgiZOHqO4YedWh1g2-hNqHboN5Ng&oe=635854DD' alt="Classrooms" />
                    <img src='https://scontent.fskg1-1.fna.fbcdn.net/v/t31.18172-8/10273179_1391152001170756_6868724052445308393_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=UdsFPzk2JwgAX95KUsn&_nc_ht=scontent.fskg1-1.fna&oh=00_AT_bAJWTBJ4dQ5yHgwOGEQRY8g5wZlDzAMVCZ_b_z5dg4g&oe=6356A788' alt="Classrooms" />
                </Carousel>
                <Content 
                    className='content'
                    style={{backgroundColor:"white",width:'50%',height:"70%",borderRadius: "25px", marginTop:'5em', marginLeft:"25%",zIndex:1}}
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
                    </p>
                </Content>
            </Container>

        </FlexboxGrid>
     );
}

export default HomePage;