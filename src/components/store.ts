import { create } from 'zustand';
import axios from 'axios';

interface Beer {
  Id: number;
  Name: string;
  Volume: number;
  Availability: string;
  Price: number;
  Type: string;
  Image: string;
}

interface BeerStore {
  beers: Beer[];
  loading: boolean;
  searchState: string;
  getBeers: () => void;
  filterOpen: boolean;
  Tooglefilter: () => void;
  setSearchUpdate: (value: string) => void;
  filterBeers: () => void;
  filteredBeers: Beer[];
};

const store = create<BeerStore>((set) => ({
  filterOpen: false,
  searchState: '',
  filteredBeers: [],
  beers: [],
  loading: false,
  getBeers: async () => {
    set({ loading: true });
    const res = await axios.get('https://raw.githubusercontent.com/SeemsGood78/AnotherOne/master/src/assets/mock/Beers.json');
    set({ beers: res.data });
    set({ loading: false });
  },
  setSearchUpdate: (value) => set(state => ({ ...state, searchState: value })),
  filterBeers: () => set((state) => {
    const { searchState, beers } = state;
    const filteredBeers = searchState ? beers.filter((beer) => beer.Name.toLowerCase().includes(searchState.toLowerCase())) : beers;
    return { ...state, filteredBeers };
  }),
  Tooglefilter: () => set((state) => ({ filterOpen: !state.filterOpen }))
}));

export const useStore = (store)