const productsArray = [
  {
    id: 'price_1McABdAoWLJeiXgFTAtI1KbZ',
    name: "Registration Fee",
    description: "Camp Registration",
    image: "./images/Footballimage.png",
    price: 50,
    quantity: 20,
  },
  {
    id: 'price_1McAGQAoWLJeiXgFHE5iDvhe',
    name: "Sweatshirt",
    description: "Sweatshirt with camp logo.",
    image: "./images/sweatshirt.png",
    price: 14.99,
    quantity: 20,
  },
  {
    id: 'price_1McAHdAoWLJeiXgF7XKzxjGK',
    name: "Long Sleeve Shirt",
    description: "Long-sleeve shirt with camp logo.",
    image: "./images/longsleeve.png",
    price: 17.99,
    quantity: 20,
  },
  {
    id: 'price_1McAITAoWLJeiXgFAotqPC4d',
    name: "Mouthguard",
    description: "Mouthguard protection.",
    image: "./images/mouthguard.png",
    price: 3.99,
    quantity: 20,
  },
  {
    id: 'price_1McAF2AoWLJeiXgFFmA6NpHK',
    name: "Baseball Cap",
    description: "Baseball Cap with camp logo.",
    image: "./images/baseballcap.png",
    price: 12.99,
    quantity: 20,
  },
];

  function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
      console.log("This product does not exist")
      return undefined;
    }
    return productData;
  }

  export { productsArray, getProductData };