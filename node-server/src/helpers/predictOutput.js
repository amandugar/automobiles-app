const onnx = require("onnxjs-node");
const accs = require("../constants/arrays/classes");
const generateTensor = require("./generateTensor");

const predictOutput = async (image) => {
  const session = new onnx.InferenceSession({ backendHint: "wasm" });
  await session.loadModel("auto-170new.onnx");
  const inputs = generateTensor(image);
  const output = await session.run([inputs]);
  const outputData = output.values().next().value.data;
  let arr = [];
  accs.forEach((acc, i) => {
    arr.push({ className: acc, strength: outputData[i] });
  });
  arr = arr.sort((a, b) => {
    return b.strength - a.strength;
  });
  console.log(arr);
  const indexofOutput = outputData.indexOf(Math.max(...outputData));
  return indexofOutput;
};

module.exports = predictOutput;
