const { Schema, model } = require('mongoose')

const wineSchema = new Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
module.exports = model('Wine', wineSchema)
