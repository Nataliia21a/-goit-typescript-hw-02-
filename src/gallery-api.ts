import axios from "axios";

const KEY = "tqUEVBMX2V3-BUXgOIvwMN9UBNaP6DM1YZ5ifKpXCFQ";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (topic: string, currentPage: number) => {
  const response = await axios.get(`/search/photos?`, {
    params: {
      client_id: KEY,
      page: currentPage,
      query: topic,
      per_page: 9,
    },
  });
  return response.data;
};
