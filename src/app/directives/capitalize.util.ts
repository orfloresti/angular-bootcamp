export const capitalizeUtil = (text?: string): string => {
  let capitalizedText = '' 
  if(text) {
    capitalizedText = text
      .split(' ')
      .reduce( 
        (accumulator: string, current: string) => {
          const capitalized = current.charAt(0).toUpperCase() + current.slice(1);
          return accumulator = `${accumulator}${capitalized} `;
        }, '' 
      )
  }
  return capitalizedText;
}