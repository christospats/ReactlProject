import React,{useEffect, useState} from 'react';
import { Navbar, Nav, FlexboxGrid,Drawer, ButtonToolbar, Button} from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu'
import { Icon } from '@rsuite/icons';


const CustomNavbar = ({ onSelect, activeKey, homeRef, exerciseRef, biographyRef,commRef,infoRef, ...props }) => {
  
  const [matches, setMatches] = useState(window.matchMedia("(min-width:468px)").matches)

  useEffect(() => {
      window.matchMedia("(min-width: 468px)").addEventListener('change', e => setMatches(e.matches));
  }) 

  const [open, setOpen] = React.useState(false);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };
  
  return (
    <div>
      {matches && (<Navbar {...props} style={{backgroundColor:'#14532d',alignItems:'right',position:'fixed', width:'100%', zIndex:'2',boxShadow: "-20px 5px 50px black"}}>
        <FlexboxGrid justify='space-between'>
          <FlexboxGrid.Item>
            <Navbar.Brand href="/#homepage" style={{color:'black', marginLeft:'-10px'}} onClick={() => {handleScroll(homeRef.current);}}> 
                <svg width="120%" height="120%" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g>
                    <path d="m368.13 34.664c-10.453-8.8867-25.809-8.8867-36.266 0l-224 190.4c-11.785 10.016-13.215 27.684-3.1992 39.469 9.6406 11.344 26.383 13.094 38.133 4.2656v235.2c0 15.465 12.535 28 28 28h89.598c15.465 0 28-12.535 28-28v-123.2c0-15.465 12.539-28 28-28h67.203c15.461 0 28 12.535 28 28v123.2c0 15.465 12.535 28 28 28h89.598c15.465 0 28-12.535 28-28v-235.2c11.75 8.8281 28.492 7.0781 38.137-4.2656 10.016-11.785 8.582-29.453-3.2031-39.469z" fillRule="evenodd"/>
                  </g>
                </svg>
            </Navbar.Brand>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item>
            <Nav onSelect={onSelect} activeKey={activeKey} style={{fontFamily:'Brush Script MT'}} justified>
              <Nav.Item href="/#info" onClick={() => {handleScroll(homeRef.current);}} eventKey="4" style={{color:'black'}}>Πληροφορίες</Nav.Item>
              <Nav.Item href="/#biography" onClick={() => {handleScroll(biographyRef.current);}} eventKey="2" style={{color:'black'}}>Βιογραφικά</Nav.Item>
              <Nav.Item href="/#exercise" onClick={() => {handleScroll(exerciseRef.current);}} eventKey="1" style={{color:'black'}}>Ασκήσεις</Nav.Item>
              <Nav.Item href="/#communication" onClick={() => {handleScroll(commRef.current);}} eventKey="3" style={{color:'black'}}>Επικοινωνία</Nav.Item>
            </Nav>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Navbar>)}
      {!matches && 
      (<Navbar {...props} style={{backgroundColor:'#14532d',alignItems:'right',position:'fixed', width:'100%', zIndex:'2',boxShadow: "-20px 5px 50px black"}}>
        <FlexboxGrid justify='space-between'>
            <FlexboxGrid.Item>
              <Navbar.Brand href="/#homepage" style={{fontFamily:'sans-serif',color:'black', marginLeft:'-10px'}} onClick={() => {handleScroll(homeRef.current);}}> 
                  <svg width="120%" height="120%" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g>
                      <path d="m368.13 34.664c-10.453-8.8867-25.809-8.8867-36.266 0l-224 190.4c-11.785 10.016-13.215 27.684-3.1992 39.469 9.6406 11.344 26.383 13.094 38.133 4.2656v235.2c0 15.465 12.535 28 28 28h89.598c15.465 0 28-12.535 28-28v-123.2c0-15.465 12.539-28 28-28h67.203c15.461 0 28 12.535 28 28v123.2c0 15.465 12.535 28 28 28h89.598c15.465 0 28-12.535 28-28v-235.2c11.75 8.8281 28.492 7.0781 38.137-4.2656 10.016-11.785 8.582-29.453-3.2031-39.469z" fillRule="evenodd"/>
                    </g>
                  </svg>
              </Navbar.Brand>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item style={{paddingTop:'2%'}}>
              <ButtonToolbar>
                <Button onClick={() => setOpen(true)} style={{backgroundColor:'#14532d', color:'black'}}>
                <Icon as={MenuIcon} size='md'/>
                </Button>
              </ButtonToolbar>
              <Drawer open={open} onClose={() => setOpen(false)} style={{width:'60%', fontFamily:'Brush Script MT'}}>
                <Drawer.Header>
                  <Drawer.Title>Επιλογές</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body style={{width:'100%'}}>
                  <Nav onSelect={onSelect} activeKey={activeKey} style={{ display:'flex', flexDirection:'column',width:'100%'}}>
                    <Nav.Item href="/#info" onClick={() => {handleScroll(homeRef.current);}} eventKey="4" style={{color:'black'}}>Πληροφορίες</Nav.Item>
                    <Nav.Item href="/#biography" onClick={() => {handleScroll(biographyRef.current);}} eventKey="2" style={{color:'black'}}>Βιογραφικά</Nav.Item>
                    <Nav.Item href="/#exercise" onClick={() => {handleScroll(exerciseRef.current);}} eventKey="1" style={{color:'black'}}>Ασκήσεις</Nav.Item>
                    <Nav.Item href="/#communication" onClick={() => {handleScroll(commRef.current);}} eventKey="3" style={{color:'black'}}>Επικοινωνία</Nav.Item>
                  </Nav>
                </Drawer.Body>
              </Drawer>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          
      </Navbar>
      )}
    </div>  
  );
};

function Navigation({homeRef, exerciseRef, biographyRef, commRef, infoRef}) {
  const [activeKey, setActiveKey] = React.useState(null);

  return (
    <CustomNavbar appearance="subtle" activeKey={activeKey} onSelect={setActiveKey} homeRef={homeRef} exerciseRef={exerciseRef} biographyRef={biographyRef} commRef={commRef} infoRef={infoRef}/>
  );
}

export default Navigation;
