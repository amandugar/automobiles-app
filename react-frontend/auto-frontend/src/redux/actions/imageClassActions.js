import requestApi from "../../config/apiHandler";
import InputImageClickHandler from "../../handlers/inputImageClickHandler";
import {
  FOUND_IMAGE_CLASS,
  FINDING_IMAGE_CLASS,
} from "../types/imageClassTypes";

export const foundImageClass = (data) => {
  return {
    type: FOUND_IMAGE_CLASS,
    payload: data,
  };
};

export const findingImageClass = () => {
  return {
    type: FINDING_IMAGE_CLASS,
  };
};

export const cameraImage = (base64) => {
  return async (dispatch) => {
    dispatch(findingImageClass());
    const data = {
      image: {
        base64,
      },
      imageInfo: {
        lastModified: Date.now(),
      },
    };
    const imageResponse = await requestApi("/find-image-class", "post", data);
    if (imageResponse.status === "success") {
      dispatch(foundImageClass(imageResponse.response));
    }
  };
};

export const postImage = (e) => {
  return async (dispatch) => {
    dispatch(findingImageClass());
    const preProcessedImageData = await InputImageClickHandler(e);
    const { lastModified, base64, lastModifiedDate, name, size, type } =
      preProcessedImageData;
    const data = {
      image: {
        base64,
      },
      imageInfo: {
        lastModified,
        lastModifiedDate,
        name,
        size,
        type,
      },
    };
    const imageResponse = await requestApi("/find-image-class", "post", data);
    console.log(imageResponse);
    if (imageResponse.status === "success") {
      dispatch(foundImageClass(imageResponse.response));
    }
  };
};
