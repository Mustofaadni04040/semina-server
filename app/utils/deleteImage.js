const path = require("path");
const fs = require("fs/promises");

const deleteImage = async (image) => {
  const imagePath = path.join(__dirname, "../../public/", image.name);

  try {
    await fs.unlink(imagePath); //hapus file image
    console.log(`File ${image.name} deleted successfully.`);
  } catch (error) {
    console.log(error);
  }

  await image.deleteOne();
};

module.exports = deleteImage;
