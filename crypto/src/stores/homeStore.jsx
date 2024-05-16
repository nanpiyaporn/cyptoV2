import { create } from 'zustand'
import axios from 'axios'

const homeStore = create((set) => ({
  coins:[],
  
  fetchCoins: async () => {
 

    const res = await axios.get (  'https://api.coingecko.com/api/v3/search/trending');
     console.log(res);
  }
 
}))

export default homeStore