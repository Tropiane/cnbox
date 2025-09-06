// src/data/products.ts
import type {Product} from "../interfaces/interfaces";

export const products: Product[] = [
  {
    id: 1,
    title: "Brownie",
    description: "Brownie de dulce de leche, decorado con merengue suizo",
    price: 790,
    image: "1z7Iwtkh8nR7BdhF-NsnSVNC4oMPmp0Ga",
  },
  {
    id: 2,
    title: "Postres Shots",
    description: "Postres decorados con brownies y/o frutillas",
    price: 700,
    image: "1UODV-wkexVw-IETqeR5ap0_0pURTiGUT",
  },
  {
    id: 3,
    title: "Mini bocados salados",
    description: "Hechos con masa de sandwich de miga y rellenos de cheddar",
    price: 300,
    image: "17WL1S6Z2arcNlmBlxKnXgr_q0L0BE2P4",
  },
  {
    id: 4,
    title: "Petits fours",
    description: "Bocados dulces y/o salados",
    price: 800,
    image: "1u-OnPHk4UTADgsT64ZhNuOQOf0nE4qmp",
    details: ["Bownie con dulce de leche y merengue", "Alfajores de masa sable relleno de dulce de leche, decorado con chocolate blanco y nuez", "Pavlova rellena de crema, decorada con arándanos", "Alfajor de masa de vainilla, relleno de dulce de leche, decorado con azucar impalpable", "Pavlova rellena de crema de frutilla"],
  },
  {
    id: 5,
    title: "Galletas decoradas",
    description: "Hechas a base de: Masa de vainilla, Fondant, Lamina comestible",
    price: 450,
    image: "1Nn9tk45HOcuylpAn0Ny3rVMpfH4LCha4",
  },
  {
    id: 6,
    title: "Torta de cumpleaños",
    description: "Torta de cumpleaños para 20 personas aprox.",
    price: 1600,
    image: "1tfcKsyHLBT9twPgND4WwDtVtVD6RWBwg",
    details: ["2 rellenos", "Relleno 1: Nutella y Oreos", "Relleno 2: Dulce de leche y Nuez", "Decorada con crema de vainilla en color blanco y amarillo"],
  }
];

export default products;
