import React, { ReactNode, useEffect } from "react";

const Home = (props: { children?: ReactNode }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  useEffect(() => {
    let currentRef: null | HTMLVideoElement = null;
    if (videoRef.current) {
      currentRef = videoRef.current;
      currentRef.onended = () => {
        currentRef!.play();
      };
    }
    return () => {
      if (currentRef) {
        currentRef.onended = null;
      }
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay={true}
        height={"100%"}
        width={"100%"}
        muted
      >
        <source
          src={
            "https://res.cloudinary.com/gdance-cloud/video/upload/v1687010131/cover-vid.9f721ac5.mp4"
          }
          type="video/mp4"
        />
      </video>
      {props.children ?? "Home"}
    </div>
  );
};

export default Home;
