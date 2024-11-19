import api from "..";

export const fetchTopSoldItems = async () => {
  const { data } = await api.get("/api/stocker/getTopSoldItems");
  return data;
};
