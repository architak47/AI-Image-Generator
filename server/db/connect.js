import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.error("MONGODB Connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;