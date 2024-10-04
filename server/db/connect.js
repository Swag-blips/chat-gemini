import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongo db ${connection.connection}`);
  } catch (error) {
    console.error(`error from connect to mongo ${error.message}`);
  }
};

export default connectToMongo;
