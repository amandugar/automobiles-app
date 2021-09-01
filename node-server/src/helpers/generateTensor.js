const ndarray = require("ndarray");
const onnx = require("onnxjs-node");

const generateTensor = (image) => {
  const c = image.shape[0];
  const h = image.shape[1];
  const w = image.shape[2];
  b = ndarray(new Float32Array(w * h * c), [c, h, w]);

  for (let hi = 0; hi < h; hi++) {
    for (let wi = 0; wi < w; wi++) {
      for (let ci = 0; ci < c; ci++) {
        b.set(ci, hi, wi, image.get(ci, hi, wi) / 255);
      }
    }
  }
  const tensor = new onnx.Tensor(new Float32Array(c * w * h), "float32", [
    1,
    c,
    h,
    w,
  ]);
  tensor.data.set(b.data);
  return tensor;
};

module.exports = generateTensor;
