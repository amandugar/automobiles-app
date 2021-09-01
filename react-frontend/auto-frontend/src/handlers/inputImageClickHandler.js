import getBase64File from "../helpers/getBase64File";

const InputImageClickHandler = async (e) => {
  e.preventDefault();
  let file = e.target[0].files[0];
  const image = await getBase64File(file)
    .then((result) => {
      file["base64"] = result;
      return file;
    })
    .catch((err) => {
      console.log(err);
    });
  return image;
};

export default InputImageClickHandler;
