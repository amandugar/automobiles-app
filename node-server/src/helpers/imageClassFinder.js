const encode = require("./encodeImage");
const manipulateImage = require("../utils/manipulateImage");
const findClassNameFromArray = require("./findClassNamefromArray");
const predictOutput = require("./predictOutput");

const imageClassFinder = async (imageBase64) => {
  const resizeImage = await manipulateImage(imageBase64);
  const encImage = encode(resizeImage);
  const transposedArrayofImage = encImage.transpose(2, 0, 1);
  const predictedIndex = await predictOutput(transposedArrayofImage);
  const name = findClassNameFromArray(predictedIndex);
  return name;
};
module.exports = imageClassFinder;
