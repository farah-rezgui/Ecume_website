const Actualite = require("../models/actualiteShema");

exports.getAllActualites = async (req, res) => {
  try {
    const actualites = await Actualite.find();
    res.status(200).json(actualites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getActualiteById = async (req, res) => {
  try {
    const { id } = req.params;
    const actualite = await Actualite.findById(id);
    if (!actualite) {
      return res.status(404).json({ message: "Actualite not found" });
    }
    res.status(200).json(actualite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getActualiteHome = async (req, res) => {
  try {
    const actualites = await Actualite.find().limit(3);
    console.log(actualites);
    

    res.status(200).json(actualites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
