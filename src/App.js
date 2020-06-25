import React from 'react'
import {
  Map,
  GeoJSON,
  TileLayer,
  ScaleControl
} from 'react-leaflet'
import './App.css'
import { features } from './Map.json'

export default () => {

  return (
    <div id="container">
      <div id="map_area">
        <Map
          id="full_map"
          center={[50.724, -3.075]}
          zoom={14}
          dragging={true}
          keyboard={true}
          scrollWheelZoom={true}
          zoomControl={true}
          doubleClickZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &bull; <a target="_blank" href="https://icons8.com/icons/set/walking">Walking icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'
          />
          <ScaleControl />
          <GeoJSON data={getGeoJSON()} style={styleRoute} />
          
        </Map>
        
      </div>
    </div>
  )
}

function styleRoute() {
  return {
    color: 'orange'
  }
}

function getGeoJSON() {
  return {
    type: 'FeatureCollection',
    features: features,
    name: 'Map'
  }
}
