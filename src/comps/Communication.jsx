import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import {Container, Content,Header} from 'rsuite'

class Communication extends Component {
  render(){
    return (
      <>
        <Container>
          <Header style={{backgroundColor:'white'}}>
            Τηλέφωνο επικοινωνίας:<br />
            Email:<br />
            Facebook:<br />
            klpklp<br />
          </Header>
          <Content>
            <Map
              google = {this.props.google}
              zoom = {20}
              style = {{width: "100%", height: "50%",borderStyle: 'solid'}}
              initialCenter = {
                {
                  lat: 39.362320,
                  lng: 22.947170
                }
                
              }
              
              >
              <Marker position = {{lat: 39.362320, lng: 22.947170}} />   
            </Map>

          </Content>

          
      </Container> 
     
    </>
    );
  }  
     
}

export default GoogleApiWrapper ({apiKey: "AIzaSyCwEpMdAJ4xMjwX4Jv4sqvoVan3sVMxtqc"})(Communication);