import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: {
    type: String,
    required: true,
  },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: "Desconocido" },
  debilidad: { type: String },
  poderes: { type: String },
  aliados: { type: String },
  enemigos: { type: String },
  createdAT: { type: Date, default: Date.now },
});

export default mongoose.model("SuperHero", superheroSchema, "Grupo-17");
