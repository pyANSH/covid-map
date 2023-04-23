import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import "./react-leaflet.d.ts";
import "../../App.css";
import { icon } from "leaflet";
import fetchCountries from "../../Store/API/fetchCountries";
import marker from "../../assets/marker_img.png";
// World wide data of cases: https://disease.sh/v3/covid-19/all
// Country Specific data of cases: https://disease.sh/v3/covid-19/countries
// Graph data for cases with date:
// https://disease.sh/v3/covid-19/historical/all?lastdays=all
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
          </Marker>
        ))}
    </MapContainer>
  );
}

export default Map;
