import { useSelector, useDispatch } from "react-redux";
import { postImage } from "../redux";

const InputImage = () => {
  const imageClass = useSelector((state) => state.imageClass);
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postImage(e));
        }}
      >
        <input type="file" accept="image/png,image/jpeg,image/jpg" />
        <button type="submit">Submit</button>
      </form>
      {imageClass.loading !== null && (
        <p>
          {imageClass.loading === false
            ? imageClass.data.data.type
            : "Loading...."}
        </p>
      )}
    </div>
  );
};

export default InputImage;
