import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e109aa736237ca0056e955beea99976a',
    language: 'es-ES',
  },
});


export default movieDB;