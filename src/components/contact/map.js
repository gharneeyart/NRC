'use client'
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


export default function Map(){
  const [position, setPosition] = useState([9.0820, 8.6753]);
 
  const customIcon = new L.Icon({
    iconUrl: '/icons/location-icon.png',
    iconSize: [20, 20], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => console.error(err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <MapContainer center={position} zoom={5} style={{ height: "400px", width: "100%" }} className='h-[100px] md:h-[150px] lg:[400px] '>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Your Live Location</Popup>
      </Marker>
    </MapContainer>
  );
};

