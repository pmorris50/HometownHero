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

    await Camper.deleteMany({});
    await Camper.create(camperSeeds);

    await Emergency.deleteMany({});
    //await Emergency.create(emergencySeeds);

    for (let i = 0; i < emergencySeeds.length; i++) {
      const { _id } = await Emergency.create(emergencySeeds[i]);
      const Camper = await Camper.findOneAndUpdate(
        { _id: Camper },
        {
          $addToSet: {
            camperSeeds: _id,
          },
        }
      );
    }

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
