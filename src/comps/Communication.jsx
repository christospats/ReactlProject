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
            <Header style={{backgroundColor:'white'}}>
              Τηλέφωνο επικοινωνίας:<br />
              Email: liappistsikrika@gmail.com<br />
              Facebook:<br />
              klpklp<br />
            </Header>
            <Content>
              <Map
                containerStyle={containerStyle}
                google = {this.props.google}
                zoom = {20}
                style = {{width: "100%",borderStyle: 'solid'}}
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