import React from 'react'
import styled from 'styled-components';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';

const darkStyle = 'mapbox://styles/mapbox/dark-v9';

const Map = ReactMapboxGl({
  interactive: false,
  accessToken: 'pk.eyJ1IjoicGhpbHBsMSIsImEiOiJjand0YnJjMmEwdnhhNGJwNXNvc2dncHZiIn0.Ohvnc_4-RxsiqYrXv_2dHA'
});

const mapStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const symbolLayout = {
  'text-field': '{place}',
  'text-font': ['Phantom Sans0.5', 'Helvetica'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top'
};

const symbolPaint = { 'text-color': 'white' };
const circleLayout = { 'visibility': 'visible' };
const circlePaint = { 'circle-color': 'white' };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  & .mapboxgl-canvas {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const Overlay = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: #fff;
`;

const zoom = [2.5];
const center = [-61.164261971800556, 39.857816012918505]

const MapLayout = ({ geojson, children }) => (
  <Container>
    <Map style={darkStyle} center={center} zoom={zoom} containerStyle={mapStyle}>
      <GeoJSONLayer
        data={geojson}
        circleLayout={circleLayout}
        circlePaint={circlePaint}
        symbolLayout={symbolLayout}
        symbolPaint={symbolPaint}
      />
    </Map>
    <Overlay>
      {children}
    </Overlay>
  </Container>
);

export default MapLayout