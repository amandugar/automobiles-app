const imageClassFinder = require("../../helpers/imageClassFinder");

module.exports = async (req, res) => {
  const image = req.body.image.base64;
  const type = await imageClassFinder(image);
  console.log({ type });
  res.send({ type });
};
