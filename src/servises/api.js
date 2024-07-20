import axios from "axios";

export const fetchImages = async (query, perPage, client_id) => {
  const response = await axios.get("https://api.unsplash.com/", {
    params: {
      client_id: "JIqK6wYJX5CHgVH50qbzcu2omMWYFwXT6O1MH_R_-UI",
      query: query,
      page: page,
      per_page: perPage,
      id: id,
    },
  });
  return response.data;
};
