import React, { useState } from "react";

type MyProps = {
  index: number;
  func: (someInt: number) => void;
};
const HoverCopyButton = ({ index, func }: MyProps) => {
  const [hoverState, setHoverState] = useState(false);
  const toggleHover = () => {
    setHoverState(!hoverState);
  };
  return (
    <button onClick={() => func(index)} onMouseEnter={toggleHover} onMouseOut={toggleHover}>
      Copy!
    </button>
  );
};

export default HoverCopyButton;
