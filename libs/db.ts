import mongoose from 'mongoose';

const connectMongoDb = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string, {
            serverSelectionTimeoutMS: 30000, // Adjust timeout as needed
            // Remove useNewUrlParser and useUnifiedTopology if using Mongoose 6.x or later
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB'); // Rethrow error to handle it upstream
    }
};

export default connectMongoDb;