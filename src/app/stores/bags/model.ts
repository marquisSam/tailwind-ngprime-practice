import { GlobalEntityAttributes } from "../global-interfaces";

export interface Bag extends GlobalEntityAttributes {
  name: string;
  content: string[];
  capacity: number;
  description: string;
}

export interface BagsCreateDTO {
  name: string;
  description?: string;
  capacity?: number;
}

export interface BagsUpdateDTO {
  name?: string;
  description?: string;
  capacity?: number;
}

