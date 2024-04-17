import { BeerType } from "./Beer";

export interface CardProps {
    beers: BeerType[]; // Assuming Beer is a defined type/interface
    loading: boolean;
}