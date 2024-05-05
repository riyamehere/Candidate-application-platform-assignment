import { RequestMethod } from '../enums';
import { API_URL } from '../shared/apiEndPointURL';
import { RequestParams, TjobDataPayload } from '../types';
import request from './service';

/**
 * @author      : Riya Mehere
 * @date        : 2024-05-05
 * @description : This is the service file for api call
 * @params      : Request Body
 * @return      : Returns the response of the request function
 */
export const fetchJobsData = (requestBody: TjobDataPayload) => {
  const requestParams: RequestParams = {
    url: API_URL.jobDataEndPoint,
    method: RequestMethod.POST,
    requestBody,
  };
  return request(requestParams);
};
