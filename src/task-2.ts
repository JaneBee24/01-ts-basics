interface Product {
  readonly productId: number;
  title: string;
  description?: string;
}

const product: Product = {
  productId: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
