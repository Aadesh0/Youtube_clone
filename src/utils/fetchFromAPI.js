import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com' ;

const options = {
   
  
  params: {
    maxResults: 52,
  },
  headers: {
    'X-RapidAPI-Key': '5378de123emshfd309f03e550cbap1e0cf0jsn77fa30f3cfa9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
}; 

export const fetchFromAPI = async(url) => {
  const {data}=  await axios.get(`${BASE_URL}/${url}`,options);
  return data;
};