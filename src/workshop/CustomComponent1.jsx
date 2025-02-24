import * as React from 'react';

const CustomComponent1 = ({ fontSize = '16px', backgroundColor = 'white', fontColor = 'black', fontStyle = 'normal', items = [] }) => {
  const listStyle = {
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    color: fontColor,
    fontStyle: fontStyle,
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomComponent1;
