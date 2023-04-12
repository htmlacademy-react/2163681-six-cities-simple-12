import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {OffersType} from '../../types/offersType';
import useMap from '../../hooks/useMap';


type MapComponentProps = {
  offers: OffersType[];
  activeOffer: number| null;
}

const defaultCustomIcon = new Icon({
  iconUrl:'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl:'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapComponent({offers, activeOffer}: MapComponentProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      offers
        .forEach((offer) => {
          new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          })
            .setIcon(activeOffer !== null && offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon)
            .addTo(map);
        });
    }
  }, [map, offers, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default MapComponent;
