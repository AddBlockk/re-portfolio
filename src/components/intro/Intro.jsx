import "./intro.scss";
import { ArrowDownward } from "@mui/icons-material";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="Me" className="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Dima Boltach</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div>
            <a href="#portfolio">
              <ArrowDownward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
