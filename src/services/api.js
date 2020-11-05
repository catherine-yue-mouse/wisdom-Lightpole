import { stringify } from 'qs';
import request from '@/utils/request';


export async function checkProgress(params) {
  return request(`/users/register?${stringify(params)}`); 
}


export async function addShifts(params,hospitalId) {
  return request(`/api/hospitals/${hospitalId}/doctor-schedule-intervals`, {
    method: 'POST',
    data: params,
  });
}