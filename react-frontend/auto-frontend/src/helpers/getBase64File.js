const getBase64File = (file) => {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let baseUrl;
      baseUrl = reader.result;
      resolve(baseUrl);
    };
  });
};

export default getBase64File;
