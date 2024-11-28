import api from "..";
import { AxiosError } from "axios";

export const scanProduct = async (productId: string, rfid: string) => {
  try {
    const { data } = await api.post("/api/stocker/addScannedProduct", {
      productId,
      rfid,
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404 || error.response?.status === 409) {
        return { error: true, data: error.response?.data };
      }

      return { error: true, data: "An error occurred while scanning the RFID tag." };
    } else {
      // Handle other errors (e.g., network issues, server errors)
      throw error; // Re-throw the error if it's not a 404
    }
  }
};

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined;
};
