import {MutableRefObject, useEffect, useRef, useState,} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityTypeMocks} from '../types/offersType';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offerCity: CityTypeMocks,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {

      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: offerCity.location.latitude,
          lng: offerCity.location.longitude
        },
        zoom: offerCity.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      mapInstance.addLayer(layer);
      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offerCity]);

  return map;
}

export default useMap;
