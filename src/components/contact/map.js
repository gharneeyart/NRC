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

export default function Map() {
  const [position, setPosition] = useState([9.082, 8.6753]);
  const [L, setL] = useState(null); // State to hold the Leaflet library
  const [customIcon, setCustomIcon] = useState(null); // State to hold the custom icon

  // Dynamically import Leaflet and initialize the custom icon
  useEffect(() => {
    import('leaflet').then((leaflet) => {
      setL(leaflet.default); // Set the Leaflet library
      const icon = new leaflet.default.Icon({
        iconUrl: '/icons/location-icon.png',
        iconSize: [20, 20],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      setCustomIcon(icon); // Set the custom icon
    });
  }, []);

  // Watch the user's geolocation
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

  // Render the map only when Leaflet and the custom icon are loaded
  if (!L || !customIcon) {
    return <div>Loading map...</div>; // Fallback UI while loading
  }

  return (
    <MapContainer
      center={position}
      zoom={5}
      style={{ height: '400px', width: '100%' }}
      className="h-[100px] md:h-[150px] lg:[400px]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Your Live Location</Popup>
      </Marker>
    </MapContainer>
  );
}