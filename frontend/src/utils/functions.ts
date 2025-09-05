import type { Product } from "../interfaces/interfaces";
export function findProduct({ arr, id }: { arr: Product[], id: number }) {
  return arr.find((p) => p.id === id);
}
