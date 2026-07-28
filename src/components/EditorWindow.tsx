import React from "react";

interface EditorWindowProps {
  tab: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}

const EditorWindow: React.FC<EditorWindowProps> = ({
  tab,
  dark,
  children,
  className,
}) => {
  return (
    <div className={`editor-window ${dark ? "editor-window--dark" : ""} ${className || ""}`}>
      <div className="editor-window__titlebar">
        <span className="editor-window__dot" style={{ background: "#f2a93b" }} />
        <span className="editor-window__dot" style={{ background: "#2bb8a3" }} />
        <span className="editor-window__dot" style={{ background: "#3b4cca" }} />
        <span className="editor-window__tab mono">{tab}</span>
      </div>
      <div className="editor-window__body">{children}</div>
    </div>
  );
};

export default EditorWindow;
