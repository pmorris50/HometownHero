const db = require('./connection');
const { User, Product} = require('../models');

db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Baseball Cap',
      description:
        'Baseball Cap with camp logo.',
      image: 'cookie-tin.jpg',
      price: 12.99,
      quantity: 20
    },
    {
      name: 'Sweatshirt',
      description:
        'Sweatshirt with camp logo.',
      image: 'canned-coffee.jpg',
      price: 14.99,
      quantity: 20
    },
    {
      name: 'Long Sleeve Shirt',
      description:
        'Long-sleeve shirt with camp logo.',
      image: 'toilet-paper.jpg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Mouthguard',
      description:
        'Mouthguard protection.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 20
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
