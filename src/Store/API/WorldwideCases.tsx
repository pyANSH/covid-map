import axios from "axios";

async function WorldwideCases() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
  return data;
}

export default WorldwideCases;
