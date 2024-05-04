import {RequestMethod} from '../enums';
import {ResponseType} from 'axios';

/* Request Params */
export type RequestParams = {
  url: string;
  method: RequestMethod;
  requestBody?: unknown;
  responseType?: ResponseType;
};

export type TjobDataPayload = { 
  limit: number;
  offset: number
}