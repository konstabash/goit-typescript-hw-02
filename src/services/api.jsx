import axios from "axios";

const accessKey = "l2N5Vq4A2rSR5TTW2vDAw5LK1xIr0LYPSK6oFXNVGjU";
const baseURL = "https://api.unsplash.com/search/photos/";

export const fetchHits = async (query, page) => {
  const responce = await axios.get(
    `${baseURL}?client_id=${accessKey}&query=${query}&page=${page}&per_page=24`
  );
  return responce.data;
};
