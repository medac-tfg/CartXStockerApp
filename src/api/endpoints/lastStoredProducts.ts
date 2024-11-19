import api from "..";

export const fetchLastStoredProducts = async () => {
  const { data } = await api.get("/api/stocker/getLastStoredProducts");
  return data;
};
