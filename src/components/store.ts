import { create } from 'zustand';
import axios from 'axios';

type BeerStore = {
  beers: any[];
  loading: boolean;
  getBeers: () => void;
  filterOpen: boolean;
  Tooglefilter: () => void;
};

const store = create<BeerStore>((set) => ({
  filterOpen: false,
  beers: [],
  loading: false,
  getBeers: async () => {
    set({ loading: true });
    const res = await axios.get('https://raw.githubusercontent.com/SeemsGood78/AnotherOne/master/src/assets/mock/Beers.json');
    set({ beers: res.data });
    set({ loading: false });
  },
  Tooglefilter: () => set((state) => ({ filterOpen: !state.filterOpen }))
}));

export const useStore = (store)