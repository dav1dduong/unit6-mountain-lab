export interface Product {
  name: string;
  price: number;
}
export const products: Product[] = [
  { name: "TV", price: 1000 },
  { name: "laptop", price: 800 },
  { name: "headphones", price: 300 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let counter = 0;
  if (array.length === 0) {
    return 0;
  } else {
    array.forEach((product) => {
      counter += product.price;
    });
    return counter / array.length;
  }
};
