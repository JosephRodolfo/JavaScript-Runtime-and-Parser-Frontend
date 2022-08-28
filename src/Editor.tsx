import { useEffect, useRef, useState } from "react";
import { createNumberLineString, lineCounter } from "./controllers/editorControllerLogic";
import "./Editor.css";

function Editor() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [lines, setLinesCount] = useState("1\n");

  const editorSpace = editorRef.current;



  return (
    <div className="Editor">
      <p>
        <textarea
          ref={ref}
          id="line-space"
          wrap="off"
          readOnly
          value={lines}
        />

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
      </p>
      <button>Submit</button>
    </div>
  );
}

export default Editor;
