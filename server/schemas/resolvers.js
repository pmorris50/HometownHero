const { AuthenticationError } = require('apollo-server-express');
const { User, Camper, emergency, Camps, Product, Order } = require('../models');
const { signToken } = require('../utils/auth');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'user.campers',
                    populate: 'Camper'
                });
                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        // order: async (parent, { _id }, context) => {
        //     console.log(JSON.parse(JSON.stringify(context)));

        //     if (context.order) {
        //         const Orders = await Order.findById(context.Order._id).populate({
        //             path: 'orders.products',
        //             populate: 'Product'
        //         });

        //         return Orders.id(_id);
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },
        // checkout: async (parent, args, context) => {
        //     const url = new URL(context.headers.referer).origin;
        //     const order = new Order({ products: args.products });
        //     const line_items = [];

        //     const { products } = await order.populate('products');

        //     for (let i = 0; i < products.length; i++) {
        //         const product = await stripe.products.create({
        //             name: products[i].name,
        //             description: products[i].description,
        //             images: [`${url}/images/${products[i].image}`]
        //         });

        //         const price = await stripe.prices.create({
        //             product: product.id,
        //             unit_amount: products[i].price * 100,
        //             currency: 'usd',
        //         });

        //         line_items.push({
        //             price: price.id,
        //             quantity: 1
        //         });
        //     }

        //     const session = await stripe.checkout.sessions.create({
        //         payment_method_types: ['card'],
        //         line_items,
        //         mode: 'payment',
        //         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        //         cancel_url: `${url}/`
        //     });

        //     return { session: session.id };
        // }
    },
}

module.exports = resolvers;
