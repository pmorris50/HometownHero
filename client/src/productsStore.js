const productsArray = [
    {
      name: 'Baseball Cap',
      description:
        'Baseball Cap with camp logo.',
      image: '#',
      price: 12.99,
      quantity: 20
    },
    {
      name: 'Sweatshirt',
      description:
        'Sweatshirt with camp logo.',
      image: '#',
      price: 14.99,
      quantity: 20
    },
    {
      name: 'Long Sleeve Shirt',
      description:
        'Long-sleeve shirt with camp logo.',
      image: '#',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Mouthguard',
      description:
        'Mouthguard protection.',
      image: '#',
      price: 3.99,
      quantity: 20
    },
  ]

  function getProductData(id) {
    let productData = productsArray.find(product => product._id === id);

    if (productData == undefined) {
      console.log("product does not exist")
      return undefined;
    }
    return productData;
  }

  export { productsArray, getProductData };