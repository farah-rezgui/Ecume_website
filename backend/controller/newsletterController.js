const newsLetter = require('../models/newsletterShema');

// Function to add an email to the newsletter
exports.addToNewsletter = async (req, res) => {
  const { email } = req.body;
  try {
    const newEmail = new newsLetter({ email });
    await newEmail.save();
    res.status(200).json({ message: "Email added to newsletter" });
  } catch (error) {
    res.status(500).json({ message: "Error adding email to newsletter" });
  }
};

// Function to get all emails from the newsletter

exports.getNewsletter = async (req, res) => {
  try {
    const emails = await newsLetter.find();
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: "Error fetching newsletter emails" });
  }
}
