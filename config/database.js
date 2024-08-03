import mongoose from "mongoose";

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))