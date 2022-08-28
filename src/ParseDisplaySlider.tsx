import { useEffect, useRef, useState } from "react";
import "./ParseDisplaySlider.css";

interface Props {
  startDrag: Function;
}

function ParseDisplaySlider(props: Props) {


  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    props.startDrag();
  };

  return (
    <div className="parse-display-slider" onMouseDown={handleDragStart}></div>
  );
}

export default ParseDisplaySlider;
