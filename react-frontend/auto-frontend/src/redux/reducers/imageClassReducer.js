import {
  FINDING_IMAGE_CLASS,
  FOUND_IMAGE_CLASS,
} from "../types/imageClassTypes";

const initialState = {
  loading: null,
  error: false,
  data: null,
  error_msg: null,
  status: null,
};

const imageClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOUND_IMAGE_CLASS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        status: "success",
      };
    case FINDING_IMAGE_CLASS:
      return {
        ...state,
        data: null,
        loading: true,
        status: "loading",
      };
    default:
      return initialState;
  }
};

export default imageClassReducer;
