const imageTypeFinder = (image) => {
  const startIndex = image.indexOf("/");
  const lastIndex = image.indexOf(";", 1);
  let imageType = image.slice(startIndex + 1, lastIndex);
  if (imageType === "jpeg" || imageType === "jpg") {
    imageType = "jpg";
  }
  return imageType;
};
module.exports = imageTypeFinder;
