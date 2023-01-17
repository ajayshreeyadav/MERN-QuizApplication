import mongoose from 'mongoose';

export default async function conncet() {
  mongoose.set('strictQuery', true); // Optional for warning in console
  await mongoose.connect(process.env.ATLAS_URI);
  console.log('Database Connected!');
}
