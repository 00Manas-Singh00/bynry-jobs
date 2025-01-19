import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView: React.FC<{ selectedProfile: any }> = ({ selectedProfile }) => {
  return (
    <div className="map-view">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedProfile && (
          <Marker position={[selectedProfile.latitude, selectedProfile.longitude]}>
            <Popup>
              {selectedProfile.name}<br />
              {selectedProfile.address}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;