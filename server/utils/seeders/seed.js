const db = require("../../config/connection");
const { Camper, Camps, User, Emergency } = require("../../models");
const camperSeeds = require("./camperSeeds.json");
const campSeeds = require("./campSeeds.json");
const userSeeds = require("./userSeeds.json");
const emergencySeeds = require("./emergencySeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    await Camps.deleteMany({});
    await Camps.create(campSeeds);

    // create campers with camp and user fields
    // const campers = [];
    // for (const camperSeed of camperSeeds) {
    //   const camp = await Camps.findOne({ name: camperSeed.title });
    //   const user = await User.findOne({ email: camperSeed.email });
    //   campers.push({
    //     ...camperSeed,
    //     camp: camp._id,
    //     //user: user._id,
    //   });
    // }
    // await Camper.deleteMany({});
    // await Camper.create(camperSeeds);

    // // update camp field of each camper
    // for (const camper of campers) {
    //   await Camper.findOneAndUpdate(
    //     { _id: camper._id },
    //     { $set: { camp: camper.camp } }
    //   );
    // }

    // // update user field of each camper
    // for (const camper of campers) {
    //   await Camper.findOneAndUpdate(
    //     { _id: camper._id },
    //     { $set: { user: camper.user } }
    //   );
    // }

    // // create emergencies
    // await Emergency.deleteMany({});
    // await Emergency.create(emergencySeeds);

    // // update emergency field of each camper
    // for (const camper of campers) {
    //   const emergency = await Emergency.findOne({ name: camper.emergency });
    //   await Camper.findOneAndUpdate(
    //     { _id: camper._id },
    //     { $set: { emergency: emergency._id } }
    //   );
    // }

    console.log("All done seeding!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});