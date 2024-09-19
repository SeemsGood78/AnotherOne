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
  originalBeers: Beer[];
  loading: boolean;
  searchState: string;
  cart: Beer[];
  getBeers: () => void;
  filterOpen: boolean;
  tooglefilter: () => void;
  setSearchUpdate: (value: string) => void;
  filterSearch: () => void;
  resetBeers: () => void;
  filteredBeers: Beer[];
  sortBy: (key: keyof Beer, ask: boolean) => void;
  applyFilters: (filtersObject: Record<keyof Beer, any[]>) => void;
  addToCart: (Id: number) => void
};

const store = create<BeerStore>((set) => ({
  filterOpen: false,
  cart: [],
  searchState: '',
  filteredBeers: [],
  beers: [],
  originalBeers: [],
  loading: false,
  getBeers: async () => {
    set({ loading: true });
    const res = await axios.get('https://raw.githubusercontent.com/SeemsGood78/AnotherOne/master/src/assets/mock/Beers.json');
    const ordered = res.data.map((obj: any, index: number) => ({ ...obj, Order: index }))
    set({ beers: ordered, loading: false, originalBeers: ordered });
  },
  setSearchUpdate: (value) => set(state => ({ ...state, searchState: value })),
  filterSearch: () => set((state) => {
    const { searchState, beers } = state;
    const filteredBeers = searchState ? beers.filter((beer) => beer.Name.toLowerCase().includes(searchState.toLowerCase())) : beers;
    return { ...state, filteredBeers };
  }),
  tooglefilter: () => set((state) => ({ filterOpen: !state.filterOpen })),
  sortBy: (key, ask) => set((state) => ({
    beers: state.beers.sort((a, b) => {
      if (typeof a[key] === 'string' && typeof b[key] === 'string') return ask ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
      else if (typeof a[key] === 'number' && typeof b[key] === 'number') return !ask ? a[key] - b[key] : b[key] - a[key]
      return 0
    })
  })),
  applyFilters: (filtersObject) => set(state => ({
    beers: state.beers.filter((beer: any) => {
      const res = Object.entries(filtersObject).every(([key, value]: [string, string[]]) => {
        if (key === 'Price') {
          const [min, max] = value.map(Number);
          return (beer[key]) >= min && (beer[key]) <= max;
        }
        return value.includes(String(beer[key]));
      });
      return res
    }),
  })),
  resetBeers: () => set((state) => ({ beers: state.originalBeers })),
  addToCart: (id: number) => set((state) => {
    const foundBeer = state.beers.find((beer) => beer.Id === id);
    if (foundBeer && !state.cart.some((item) => item.Id === foundBeer.Id)) {
      return {
        ...state,
        cart: [
          ...state.cart,
          foundBeer,
        ],
      };
    } else {
      return state;
    }
  }),
}));

export const useStore = (store)
