import mongoose from "mongoose";

const schema = new mongoose.Schema({

    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    street: { type: String, require: true },
    number: { type: String, require: true },
    city: { type: String, require: true },
}, {
    timestamps: true
})

export const Address = mongoose.model('addresses', schema)