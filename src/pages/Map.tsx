import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix default icon issue with Leaflet in React
import 'leaflet/dist/leaflet.css';
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

type Pin = {
  name: string;
  lat: number;
  lng: number;
  description: string;
};

const Map: React.FC = () => {
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    fetch('/pins_no_duplicates.json')
      .then(res => res.json())
      .then(data => setPins(data));
  }, []);

  // Center the map on the first pin or a default location
  const center: [number, number] = pins.length
    ? [pins[0].lat, pins[0].lng]
    : [51.1, 17.0];

  return (
    <div className="map-page" style={{ height: '80vh', width: '100%' }}>
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map((pin, idx) => (
          <Marker key={idx} position={[pin.lat, pin.lng]}>
            <Popup>
              <strong>{pin.name}</strong>
              <br />
              {pin.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;