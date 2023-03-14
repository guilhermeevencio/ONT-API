import axios from 'axios';
import { IOntInfo } from '../interfaces/Ont';

const baseURL = 'http://localhost:3001'

const instance = axios.create({
  baseURL,
});

export async function ontInfoRequest() {
  try {
    const response = await instance.get('/ont-info')
    return response
  } catch (error) {
    console.log(error);
    
  }
}

export async function findOneOntInfo(sn: string) {
  try {
    console.log(sn);
    
    const response = await instance.post('/find', {sn})
    return response.data
  } catch (error) {
    return error
  }
}

