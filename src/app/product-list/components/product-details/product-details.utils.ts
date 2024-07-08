import { Price } from "../product-card/product-card.component";

export const getPrices = (prices: {[key: string]: number}): Price[] => {
  let values = [];
    for( let key in prices ) {
      values.push( {
        key,
        value: prices[key]
      } )
    }  
  return(values);
}