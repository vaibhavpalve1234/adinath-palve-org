import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'

const PostForm = () => {
  const [position, setPosition] = useState(null);
  const [location, setLocation] = useState(null);


  const customIcon = L.icon({
    iconUrl: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    className: 'custom-icon',
  });
  const MapEventHandlers = () => {
    useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
      },
    });

    return null;
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.error('Error retrieving location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(position, location)
  };

  return (
    <div>{location ? <form onSubmit={handleSubmit}>
      <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
        />
        <MapEventHandlers />
        {position && <Marker position={position} icon={customIcon} />}
      </MapContainer>
      <button type="submit" disabled={!position} className="submit-button">Submit</button>
    </form> : <p>Loading location...</p>}

    </div>
  );
};

export default PostForm;
