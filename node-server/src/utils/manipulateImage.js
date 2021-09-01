const sharp = require("sharp");
const base64 = require("base64-img");
const { v4: uuid } = require("uuid");
const imageTypeFinder = require("./imageTypefinder");

const manipulateImage = async (image) => {
  const uniqueImageName = uuid();
  const imageType = imageTypeFinder(image);
  base64.imgSync(image, "./public/images/uploads/temp", uniqueImageName);
  const manipulatedImage = sharp(
    "./public/images/uploads/temp/" + uniqueImageName + "." + imageType
  )
    .resize({
      height: 224,
      width: 224,
      fit: "contain",
    })
    .toColorspace("bgr")
    .raw()
    .toBuffer({ resolveWithObject: true });
  return await manipulatedImage;
};

module.exports = manipulateImage;
