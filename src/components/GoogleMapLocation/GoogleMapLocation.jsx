import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import styles from './styles.module.css'

const GoogleMapLocation = () => {
  return (
    <>
      <MapContainer
        className={styles.mapLocation}
        center={[-6.188749993366775, 106.87747132606388]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.188749993366775, 106.87747132606388]}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            Masjid Salman Al-Farisi
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  )
}

export default GoogleMapLocation
