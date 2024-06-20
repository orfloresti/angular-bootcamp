export interface Product {
  id: string,
  title: string,
  prices: { [tag: string]: number },
  photos: string [],
  description: string,
}