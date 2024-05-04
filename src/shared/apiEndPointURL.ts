import { IApi } from "../interfaces/api.interface";

/* Api end point urls */
console.log("API endpoint ", import.meta.env.VITE_API_URL)
export const API_URL: IApi = {
  jobDataEndPoint: import.meta.env.VITE_API_URL,
};
