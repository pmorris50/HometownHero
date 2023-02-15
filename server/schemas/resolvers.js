const { AuthenticationError } = require("apollo-server-express");
const { User, Camper, Emergency, Camps, Product, Order } = require("../models");
const Camp = require("../models/Camps");
const { signToken } = require("../utils/auth");

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      const user = await User.findById(_id);

      return user;
    },

    users: async () => {
      return User.find();
    },

    camps: async () => {
      return Camps.find();
    },

    camp: async (parent, { _id }) => {
      const camp = await Camps.findById(_id);

      return camp;
    },

    camper: async () => {
      return Camper.find();
    },

    emergency: async () => {
      return Emergency.find();
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {

      console.log("LOGIN!!!!");

      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    signUp: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ email, password, firstName, lastName });
      const token = signToken(user);
      return { token, user };
    },

    addCamp: async (parent, { title, location, date, price, campers }) => {
      const camp = await Camps.create({ title, location, date, price, campers });
      return camp;
    },

    addCamper: async (parent, { firstName, lastName, age, gradeFinished, tshirtSize, emergencyContact, waiverSigned, campId }, context) => {
      console.log(context.user);
      if (context.user) {

        const camper = await Camper.create({ firstName, lastName, age, gradeFinished, tshirtSize, emergencyContact, waiverSigned, campId, userId: context.user._id });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { campers: camper._id } },
          { new: true, runValidators: true, }
        )

        // await Camps.findOneAndUpdate(
        //   { _id: campId },
        //   { $addToSet: { campers: camper._id } }
        // )

        return camper;
      }

    },

    addEmergency: async (parent, { firstName, lastName, phoneNumber1, phoneNumber2, camperId }) => {
      const emergency = await Emergency.create({ firstName, lastName, phoneNumber1, phoneNumber2, camperId });

      await Camper.findOneAndUpdate(
        { _id: camperId },
        { $addToSet: { emergencyContact: emergency._id } }
      )

      return emergency;
    }

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
};

module.exports = resolvers;
