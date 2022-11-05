export const gramToKiloPrice = (gram: number, price: number) => {
  return Number(((price / gram) * 1000).toFixed(0))
}
