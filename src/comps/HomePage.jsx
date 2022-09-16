import React from 'react';
import { Container, Content } from 'rsuite';

function HomePage() {
    return ( 
        <Container>
            <Content 
                style={{backgroundImage: 'url("https://ered.gr/media/AAA%20JPG/school.jpg")',
                        backgroundPosition:'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100vh',
                    }}
            >
                <Content 
                    className='content'
                    style={{backgroundColor:"white",width:'50%',height:"70%",borderRadius: "25px", marginTop:'5em', marginLeft:"25%"}}
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
            </Content>
        </Container>
     );
}

export default HomePage;