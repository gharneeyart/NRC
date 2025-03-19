'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import react-leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});
const L = dynamic(() => import('leaflet'), { ssr: false });

export default function Map() {
  const [position, setPosition] = useState([9.082, 8.6753]);

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
    <MapContainer
      center={position}
      zoom={5}
      style={{ height: '400px', width: '100%' }}
      className="h-[100px] md:h-[150px] lg:[400px] "
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Your Live Location</Popup>
      </Marker>
    </MapContainer>
  );
}
