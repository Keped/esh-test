import React, { useEffect } from "react";
import TabbedView from "../../TabbedView";
import { useNavigate } from "react-router-dom";
import { Fab, styled } from "@mui/material";

const FabParent = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  }, []);

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
  }, [videoRef]);

  return (
    <TabbedView>
      <video
        ref={videoRef}
        autoPlay={true}
        height={"100%"}
        width={"100%"}
        muted
      >
        <source src={"assets/cover-vid.mp4"} type="video/mp4" />
      </video>
      <FabParent>
        {showButton && (
          <Fab
            variant="extended"
            onClick={() => {
              navigate("/blog");
            }}
          >
            See latest news
          </Fab>
        )}
      </FabParent>
    </TabbedView>
  );
};

export default Home;
