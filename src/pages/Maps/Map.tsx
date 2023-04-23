import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import "./react-leaflet.d.ts";
import "../../App.css";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import fetchCountries from "../../Store/API/fetchCountries";
import marker from "../../assets/marker_img.png";

// Country Specific data of cases: https://disease.sh/v3/covid-19/countries

interface MapContainer {
  children: any[];
  center?: number[];
  zoom: number;
  scrollWheelZoom: boolean;
}
function Map() {
  const { data } = useQuery("countries", fetchCountries);
  const ICON = icon({
    iconUrl: marker,
    iconSize: [32, 32],
  });
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        url=" https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
      />
      {/* 
        use this url to render the map: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
      */}

      {data &&
        data?.map((posi: any, index: number) => (
          <Marker
            icon={ICON}
            position={[posi.countryInfo.lat, posi.countryInfo.long]}
            key={index}
          >
            <Popup>
              <h1>{posi.country}</h1>
              <p>Active: {posi.active}</p>
              <p>Recovered: {posi.recovered}</p>
              <p>Deaths: {posi.deaths}</p>
            </Popup>
            {/* // this is used to render the popup on the marker */}
          </Marker> // this is used to render the markers on the map
        ))}
    </MapContainer>
  );
}

export default Map;
