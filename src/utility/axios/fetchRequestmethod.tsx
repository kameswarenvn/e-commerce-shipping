import { AxiosHeaders } from "axios";
import axiosHandler from "./axios";

interface fetchDataType {
  method: any;
  url: string;
  headers?: AxiosHeaders;
  payload?: any;
}
export function fetchRequestmethod({ method, url, headers, payload }: fetchDataType) {
  return axiosHandler({
    method: method,
    url: url,
    data: payload,
    headers: headers,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
