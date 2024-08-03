import mongoose from "mongoose";

const schema = new mongoose.Schema({

    dni: { type: Number, require: true, unique: true },
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    edad: { type: String, require: true },
    foto: { type: String, require: true }

}, {
    timestamps: true
})

export const User = mongoose.model('users', schema)