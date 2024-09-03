import { Mountain, mountains, findNameOfTallestMountain } from "./mountains";
import { Product, products, calcAverageProductPrice } from "./products";
import { InventoryItem, inventory, calcInventoryValue } from "./inventory";
const mtHood: Mountain = {
  name: "Mt. Hood",
  height: 14000,
};

console.log(findNameOfTallestMountain(mountains));

console.log(calcAverageProductPrice(products));

console.log(calcInventoryValue(inventory));
