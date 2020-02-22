import React, {useState} from "react";

const Suggestion = ({
  place,
  clickHandler,
  cursorIdx,
  idx,
  selectColor,
  mouseInSuggestions,
  isTouch
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      selectColor={selectColor}
      onMouseEnter={e => setHover(true)}
      onMouseLeave={e => setHover(false)}
      style={
        {
          ...(cursorIdx === idx && !mouseInSuggestions && !isTouch
          ? { 
            color: "white", 
            background: selectColor 
          }
          : null),
          'font-size': '14px',
          'padding': '1rem 1.5rem 1rem 1.5rem',
          'cursor': 'pointer',
          'width': '100%',
        ...(hover ? {color:'white', 'background-color': selectColor}:{})
      }}
      onMouseDown={event => clickHandler({ location: place, event })}
    >
      {place.place_name}
    </div>
  );
};

export default Suggestion;
