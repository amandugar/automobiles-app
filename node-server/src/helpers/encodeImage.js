const ndarray = require("ndarray");

const encode = (image) => {
  const height = image.info.height;
  const width = image.info.width;
  const channels = image.info.channels;
  const imageArray = ndarray(new Float32Array(height * width * channels), [
    height,
    width,
    channels,
  ]);
  let counter = 0;
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      for (let c = 0; c < channels; c++) {
        imageArray.set(h, w, c, image.data[counter]);
        counter++;
      }
    }
  }
  return imageArray;
};
module.exports = encode;
