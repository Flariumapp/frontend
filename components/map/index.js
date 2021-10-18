import GoogleMapReact from 'google-map-react';
import { Container } from './styles';

const Map = ({ center = { lat: 59.95, lng: 30.33 }, zoom = 11, height}) => {
    return (
        <Container height={height}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            ></GoogleMapReact>
        </Container>
    );
}

export default Map;