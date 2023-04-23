import axios from "axios";

async function fetchCountries() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
}

export default fetchCountries;
