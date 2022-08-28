import { parse } from "node:path/win32";
import { useEffect, useRef, useState } from "react";
import "./ParseDisplay.css";
import ParseDisplaySlider from "./ParseDisplaySlider";

interface Props {
  mouseEvent: any;
}

function ParseDisplay(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  let [dragging, setDragging] = useState(false);

  const parseDisplaySpace = ref.current;
  const passUpTrue = (e: boolean) => {
    setDragging(true);
  };

  useEffect(() => {
    window.addEventListener("mouseup", () => {
      setDragging(false);
    });
  }, []);

  useEffect(() => {
    if (dragging) {
      console.log(props.mouseEvent.clientX)
      const widthPercentage = props.mouseEvent.target.parentNode.clientWidth - props.mouseEvent.clientX;
      if (parseDisplaySpace!=undefined) {
        parseDisplaySpace.style.width = `${widthPercentage}px`;

      }
    }
  }, [props.mouseEvent]);

  return (
    <div ref={ref} className="parse-display">
      <ParseDisplaySlider startDrag={passUpTrue} />
    </div>
  );
}

export default ParseDisplay;
