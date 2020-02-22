import React from "react";
import Suggestion from "./Suggestion";


const Suggestions = ({
  places,
  hasResults,
  clickHandler,
  cursorIdx,
  mouseInSuggestions,
  getMouseInSuggestions,
  selectColor,
  isTouch
}) => {
  const handleMouseEnter = () => {
    getMouseInSuggestions(true);
  };

  const handleMouseLeave = () => {
    getMouseInSuggestions(false);
  };

  return (
    <div style={{
      'position': 'relative',
      'display': hasResults ? 'flex':'none',
      'z-index': '9999',
      'background-color': '#fff',
      'border': '1px solid #ccc',
      'border-top': 'none',
      'border-color': '#d3d3d3',
      'border-bottom-left-radius': '3px',
      'border-bottom-right-radius': '3px',
    }}>
      <div
        style={{
          width:'100%'
        }}
        onMouseEnter={!isTouch && handleMouseEnter}
        onMouseLeave={!isTouch && handleMouseLeave}
      >
        {places.map((place, idx) => (
          <Suggestion
            selectColor={selectColor}
            mouseInSuggestions={mouseInSuggestions}
            idx={idx}
            isTouch={isTouch}
            cursorIdx={cursorIdx}
            clickHandler={clickHandler}
            key={place.id}
            place={place}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
