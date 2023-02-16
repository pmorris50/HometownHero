const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Camper,
  Emergency,
  Camps,
  Products,
  Order,
} = require("../models");
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
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
        });

        return user.orders.id(_id);
      }
    },

    checkout: async (parent, args, context) => {
      console.log("in checkout with products: ", args.products);
      try {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        console.log("order", order);

        const line_items = [];

        const { products } = await order.populate("products");

        console.log("products", products);
        for (let i = 0; i < products.length; i++) {
          const products = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`],
          });

          console.log("products created", product);

          const price = await stripe.prices.create({
            products: products.id,
            unit_amount: products[i].price * 100,
            currency: "usd",
          });

          console.log("price created", price);

          line_items.push({
            price: price.id,
            quantity: 1,
          });
        }

        console.log("line items", line_items);

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: reqbody.items.map((item) => {
            const storeItem = storeItems.get(item.ids);
            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: storeItem.name,
                  images: [storeItem.image],
                },
                unit_amount: storeItem.price * 100,
              },
              quantity: item.quantity,
            };
          }),

          mode: "payment",
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });

        console.log("session", session);
      } catch (error) {
        console.log("error", error);
      }

      return { session: session.id };
    },
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
      const camp = await Camps.create({
        title,
        location,
        date,
        price,
        campers,
      });
      return camp;
    },

    addCamper: async (
      parent,
      {
        firstName,
        lastName,
        age,
        gradeFinished,
        tshirtSize,
        emergencyContact,
        waiverSigned,
        campId,
      },
      context
    ) => {
      console.log(context.user);
      if (context.user) {
        const camper = await Camper.create({
          firstName,
          lastName,
          age,
          gradeFinished,
          tshirtSize,
          emergencyContact,
          waiverSigned,
          campId,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { campers: camper._id } },
          { new: true, runValidators: true }
        );

        // await Camps.findOneAndUpdate(
        //   { _id: campId },
        //   { $addToSet: { campers: camper._id } }
        // )

        return camper;
      }
    },

    addEmergency: async (
      parent,
      { fullName, phoneNumber1, phoneNumber2, camperId }
    ) => {
      const emergency = await Emergency.create({
        fullName,
        phoneNumber1,
        phoneNumber2,
        camperId,
      });

      await Camper.findOneAndUpdate(
        { _id: camperId },
        { $addToSet: { emergencyContact: emergency._id } }
      );

      return emergency;
    },

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    // updateProduct: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Product.findByIdAndUpdate(
    //     _id,
    //     { $inc: { quantity: decrement } },
    //     { new: true }
    //   );
    // },

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
