const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected successfully `);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;