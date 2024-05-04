import { RequestMethod } from '../enums';
import { API_URL } from '../shared/apiEndPointURL';
import { RequestParams, TjobDataPayload } from '../types';
import request from './service';

export const fetchJobsData = (requestBody: TjobDataPayload) => {
  const requestParams: RequestParams = {
    url: API_URL.jobDataEndPoint,
    method: RequestMethod.POST,
    requestBody,
  };
  return request(requestParams);
};
