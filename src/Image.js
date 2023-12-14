import React from 'react';
import { useState } from 'react';

const Image = ({ src }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    console.log(`You clicked on ${src}`);
    setIsSelected(selected => !selected);
    
  };
  
  return (
    <img
      onClick={handleClick}
      src={src}
      alt="person"
      className={isSelected ? "selected image-card" : "image-card"}
    />
  );
};

export default Image;

