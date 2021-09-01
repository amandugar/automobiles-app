import axios from "axios";
import apiDomain from "../constants/domain";

const setResponse = (response, status) => {
  return { response, status };
};

const requestApi = async (path, method, data) => {
  let response;
  const url = apiDomain + path;
  if (method === "get") {
    response = await axios
      .get(url, { params: data })
      .then((response) => {
        return setResponse(response, "success");
      })
      .catch((err) => {
        return setResponse(err, "error");
      });
  } else if (method === "post") {
    response = await axios
      .post(url, data)
      .then((response) => {
        return setResponse(response, "success");
      })
      .catch((err) => {
        return setResponse(err, "error");
      });
  }
  return response;
};

export default requestApi;
