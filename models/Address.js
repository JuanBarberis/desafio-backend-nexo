import mongoose from "mongoose";

const schema = new mongoose.Schema({

    street: { type: String, require: true },
    number: { type: String, require: true },
    city: { type: String, require: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
})

export const Address = mongoose.model('addresses', schema)