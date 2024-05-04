import axios, { AxiosRequestConfig, Method } from "axios";
import { RequestParams } from "../types";

interface MyData {
  jdList: [] ; // Replace 'string' with the actual type of the 'ans' property
  totalCount: number
}
/* Call Request Method to fetch / Post Data  */
const request = async (requestParams: RequestParams) => {
  const result = {
    data: null,
    error: null,
  } as {
    data: MyData | null;
    error: string | null;
  };

  /* Axios Request Config */
  const axiosReqConfig: AxiosRequestConfig = {
    method: requestParams.method as Method,
    url: requestParams.url,
    data: requestParams.requestBody,
    responseType: requestParams.responseType
      ? requestParams.responseType
      : undefined,
  };

  const response = await axios(axiosReqConfig);
  result.data = response.data;
  return result;
};
/* Default Export Request Obj */
export default request;
