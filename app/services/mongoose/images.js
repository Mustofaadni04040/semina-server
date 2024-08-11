const Images = require("../../api/v1/images/model");

// cara pertama
const generateUrlImage = async (req) => {
  const result = `/uploads/${req.file.filename}`;

  return result;
};

// cara kedua
const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/default.jpeg",
  });

  return result;
};

module.exports = { createImages, generateUrlImage };
