import React, { useState } from "react";

const Dropdown = ({ labels, onSelect }) => {
  const [isToggle, setIsToggle] = useState(false);

  const activeLabel = labels && labels.find((item) => item.selected)?.label;

  return (
    <div className="dropdown">
      <div className="dropdown__label" onClick={() => setIsToggle(!isToggle)}>
        <span>{activeLabel}</span>
        <span>{!isToggle ? "+" : "-"}</span>
      </div>

      {isToggle && (
        <div className="dropdown__content">
          <ul>
            {labels &&
              labels.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    onSelect(item);
                    setIsToggle(!isToggle);
                  }}
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
