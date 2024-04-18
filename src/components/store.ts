import { create } from 'zustand';
import axios from 'axios';

type BeerStore = {
  beers: any[];
  loading: boolean;
  getBeers: () => Promise<void>;
};

export const useStore = create<BeerStore>((set) => ({
  beers: [],
  loading: false,
  getBeers: async () => {
    set({ loading: true });
    const res = await axios.get('https://raw.githubusercontent.com/SeemsGood78/AnotherOne/master/src/assets/mock/Beers.json');
    set({ beers: res.data });
    set({ loading: false });
  },
}));