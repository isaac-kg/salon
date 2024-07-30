export const formatPriceToZAR = (price: number): string => {
  return price.toLocaleString("en-ZA", {
    style: "currency",
    currency: "ZAR",
  })
}
