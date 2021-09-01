const MobileLaptop = () => {
  let videoConstraints = {
    aspectRatio: 1 / 1,
  };
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (videoConstraints = {
      ...videoConstraints,
      facingMode: {
        exact: "environment",
      },
    });
  } else {
    return (videoConstraints = {
      ...videoConstraints,
      facingMode: "user",
    });
  }
};

export default MobileLaptop;
