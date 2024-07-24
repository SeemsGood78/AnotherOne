import { BeerType } from "./Beer";

export interface CardProps {
    beers: BeerType[]; 
    loading: boolean;
}