import axios from 'axios';
import store from '../store/store';

const public_key = '9984d45609d3d9177ef8fb56d33cc4d4';
const hash = '02323fe880e6139bcb224b4c136d33ca';

export function conexionApi() {
  axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=${hash}`).then(response => {
    console.log(response.data.data.results);
    console.log(response.data.data.results[0].name);
    console.log(response.data.data.results[0].id);
    console.log(response.data.data.results[0].thumbnail.path + ".jpg");
    console.log(response.data.data.results[0].modified);
    store.dispatch('recibidoInfoAPI', response.data.data.results);
  }).catch(error => {
    console.error(error);
  })
}