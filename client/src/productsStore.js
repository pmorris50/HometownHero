const productsArray = [
    {
      id: 1,
      name: 'Registration Fee',
      description:
        'Camp Registration',
      image: '#',
      price: 50,
      quantity: 20
    },
    {
      id: 2,
      name: 'Sweatshirt',
      description:
        'Sweatshirt with camp logo.',
      image: '#',
      price: 14.99,
      quantity: 20
    },
    {
      id: 3,
      name: 'Long Sleeve Shirt',
      description:
        'Long-sleeve shirt with camp logo.',
      image: '#',
      price: 17.99,
      quantity: 20
    },
    {
      id: 4,
      name: 'Mouthguard',
      description:
        'Mouthguard protection.',
      image: '#',
      price: 3.99,
      quantity: 20
    },
    {
      id: 5,
      name: 'Baseball Cap',
      description:
        'Baseball Cap with camp logo.',
      image: '#',
      price: 12.99,
      quantity: 20
    },
  ]

  function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
      console.log("This product does not exist")
      return undefined;
    }
    return productData;
  }

  export { productsArray, getProductData };