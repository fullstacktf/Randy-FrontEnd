import { useState } from "react";

export const DashboardSVG = () => {
  let [color, setColor] = useState("#FFFFFF");

  const hoverColor = () => setColor((color = "#47AB43"));

  return (
    <svg onClick={hoverColor} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21.4286" height="13.0645" rx="2" fill={color} />
      <rect y="15.9677" width="21.4286" height="29.0323" rx="2" fill={color} />
      <rect width="21.4286" height="13.0645" rx="2" transform="matrix(1 0 0 -1 23.5714 45)" fill={color} />
      <rect width="21.4286" height="29.0323" rx="2" transform="matrix(1 0 0 -1 23.5714 29.0323)" fill={color} />
    </svg>
  );
};
