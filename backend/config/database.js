import mongoose from 'mongoose';

const connectToDB = async (baseURL) => {
    try {
        await mongoose.connect(baseURL);
        console.log("Database connection Established..!");
    } catch (error) {
        console.log(error);
    };
};

export default connectToDB;