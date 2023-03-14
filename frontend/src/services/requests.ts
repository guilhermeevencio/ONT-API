import axios from 'axios';

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

