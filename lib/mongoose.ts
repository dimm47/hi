import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL)
    return console.log('MISSING MONGODB_URL');

  if (isConnected)
    return console.log('MONGODB IS ALREADY CONNECTED');

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'devflow'
    });

    isConnected = true;

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);
  }
};