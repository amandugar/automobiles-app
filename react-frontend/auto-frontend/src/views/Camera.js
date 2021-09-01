import WebCam from "react-webcam";

const CameraParent = (props) => {
  return (
    <div
      className="flex bg-black h-screen relative"
      style={{ flexFlow: "row" }}
    >
      <div className="flex items-center justify-center">
        <WebCam
          audio={false}
          width={props.width}
          ref={props.webcamRef}
          height={props.height}
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          videoConstraints={props.videoConstraints}
        />
      </div>
      <div className="absolute w-full flex flex-center items-center justify-center mx-auto bottom-20">
        <button
          className="p-8 items-center bg-white rounded-full"
          onClick={props.capture}
        ></button>
      </div>
    </div>
  );
};

export default CameraParent;
