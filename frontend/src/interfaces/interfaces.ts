// src/interfaces.ts

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  details?: string[];
}

export type TargetProps = {
  title: string;
  description: string;
  id: number;
  targetClass?: string;
  price?: number;
  isPlan?: boolean;
  isProduct?: boolean;
  image?: string;
  details?: string[];
};