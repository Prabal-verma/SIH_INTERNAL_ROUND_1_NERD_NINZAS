import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

export default connectMongo;
