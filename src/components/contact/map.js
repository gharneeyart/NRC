'use client';
import { useState, useEffect } from 'react';
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
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function LiveLocationMap() {
  const [position, setPosition] = useState([9.082, 8.6753]); // Default to Nigeria coordinates
  const [isLoading, setIsLoading] = useState(true);

  // Watch the user's geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setIsLoading(false);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setIsLoading(false); // Continue with default position even if geolocation fails
        },
        { enableHighAccuracy: true }
      );
    } else {
      setIsLoading(false); // Browser doesn't support geolocation
    }
  }, []);

  if (isLoading) {
    return <div className="h-[400px] flex items-center justify-center">Loading map...</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13} // More appropriate zoom level for live location
      style={{ height: '400px', width: '100%' }}
      className="rounded-lg z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your current location</Popup>
      </Marker>
    </MapContainer>
  );
}