import { useEffect, useRef, useState } from "react";
import {
  createNumberLineString,
  lineCounter,
} from "./controllers/editorControllerLogic";
import "./Editor.css";
import ParseDisplay from "./ParseDisplay";

interface Props {
  currentTab: number
}

function Editor(props: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [lines, setLinesCount] = useState("1\n");
  const [mouseEvent, setMouseEvent] = useState(null);

  const editorSpace = editorRef.current;

  const handleMouseMove = (e: any) => {
    setMouseEvent(e);
  };



  return (
    <div className="editor" onMouseMove={handleMouseMove}>
      <textarea ref={ref} id="line-space" wrap="off" readOnly value={lines} />

      <textarea
        ref={editorRef}
        id="editor-space"
        onChange={(e) => {
          const linesCount = lineCounter(editorSpace);
          const linesString = createNumberLineString(linesCount);
          setLinesCount(linesString);
        }}
        wrap="off"
      ></textarea>
      <ParseDisplay mouseEvent={mouseEvent} />
    </div>
  );
}

export default Editor;
