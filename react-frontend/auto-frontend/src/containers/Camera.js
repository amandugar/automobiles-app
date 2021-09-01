import CameraParent from "../views/Camera";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import MobileLaptop from "../utils/MobileLaptop";
import { postImage } from "../redux";
import { cameraImage } from "../redux/actions/imageClassActions";

const Camera = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.screen.availWidth);
  const [height, setHeight] = useState(window.screen.availHeight);
  const webcamRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.screen.availWidth);
      setHeight(window.screen.availHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const videoConstraints = MobileLaptop();
  const capture = useCallback(() => {
    if (webcamRef) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      dispatch(cameraImage(imageSrc));
    }
  }, [webcamRef]);
  return (
    <CameraParent
      videoConstraints={videoConstraints}
      height={height}
      width={width}
      capture={capture}
      webcamRef={webcamRef}
    />
  );
};

export default Camera;
