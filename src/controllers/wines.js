const wines = {}
const Wine = require('../models/Wine')

wines.getWines = async (req, res) => {
  const wines = await Wine.find()
  res.json(wines)
}

wines.createWIne = async (req, res) => {
  const wine = new Wine(req.body)

  await wine.save()
  res.send({ message: wine.id })
}

wines.getWine = async (req, res) => {
  const wine = await Wine.findById(req.params.id)
  res.send(wine)
}

wines.updateWine = async (req, res) => {
  const wine = await Wine.findByIdAndUpdate(req.params.id, req.body)
  res.send({ updated: wine.id })
}

wines.deleteWine = async (req, res) => {
  const wine = await Wine.findByIdAndDelete(req.params.id)
  res.json(wine)
}

module.exports = wines
