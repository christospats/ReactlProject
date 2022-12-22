import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import {Container, Content,Header} from 'rsuite'

const containerStyle = {
  height:'50%',
}

class Communication extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render(){
    return (
          <Container ref={this.props.commRef}>
            <Header style={{background: "linear-gradient(to top right, #166534 17%, #22c55e)",  paddingBottom: "15px",display: "flex", justifyContent: "center", color:'#171717',fontWeight:'bold', fontSize:'large', fontFamily:'Times New Roman'}}>
              <div style={{textAlign: "center"}}>
                <p>Email: liappistsikrika@gmail.com / Τηλέφωνο επικοινωνίας: 2421 400810 / <a href="https://www.facebook.com/profile.php?id=100008279084746"> Το Facebook μας!</a></p>
              </div>
            </Header>
            <Content>
              <Map
                containerStyle={containerStyle}
                google = {this.props.google}
                zoom = {20}
                style = {{width: "100%", boxShadow: "10px 5px 30px black",}}
                initialCenter = {
                  {
                    lat: 39.362320,
                    lng: 22.947170
                  }
                  
                }
                onClick={this.onMapClicked}
                
                >
                <Marker position = {{lat: 39.362320, lng: 22.947170}} onClick={this.onMarkerClick} />   
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div style={{fontWeight:'bold'}}>
                      28η Οκτωβρίου 86, ΒΟΛΟΣ, Βόλος [Δήμος], Μαγνησία, 38221
                    </div>
                </InfoWindow>
              </Map>

            </Content>

            
        </Container> 
    );
  }  
     
}

export default GoogleApiWrapper ({apiKey: "AIzaSyCwEpMdAJ4xMjwX4Jv4sqvoVan3sVMxtqc"})(Communication);