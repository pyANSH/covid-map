import axios from "axios";

async function fetchCases() {
  const {
    data,
  }: {
    data: any;
  } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
}

export default fetchCases;
