/* eslint-disable @typescript-eslint/no-unused-vars */

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";

export function initializeMap(ref: HTMLDivElement) {
  
  const map = new Map({
    basemap: "topo-vector" // Basemap layer service
  });
  
  const view = new MapView({
    container: ref,
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13 // Zoom level
  });

  return view;
}
