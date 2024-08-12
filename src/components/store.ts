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
  sortBy: (key: keyof Beer, ask:boolean) => void;
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
    const ordered = res.data.map((obj:any,index:number) => ({...obj, Order:index}))
    set({ beers: ordered, loading: false });
  },
  setSearchUpdate: (value) => set(state => ({ ...state, searchState: value })),
  filterBeers: () => set((state) => {
    const { searchState, beers } = state;
    const filteredBeers = searchState ? beers.filter((beer) => beer.Name.toLowerCase().includes(searchState.toLowerCase())) : beers;
    return { ...state, filteredBeers };
  }),
  Tooglefilter: () => set((state) => ({ filterOpen: !state.filterOpen })),
  sortBy: (key, ask) => set((state) => ({
    beers: state.beers.sort((a, b) => {
      if (typeof a[key] === 'string' && typeof b[key] === 'string') return ask? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
      else if (typeof a[key] === 'number' && typeof b[key] === 'number') return !ask? a[key] - b[key] : b[key] - a[key]
      return 0
    })
  })),
}));

export const useStore = (store)