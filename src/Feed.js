import React from 'react';
import Masonry from 'react-masonry-css';
import Image from './Image';
import itemData from './utils/itemData';

const columnBreakpoints = {
  default: 5, 
  1400: 4,
  1100: 3,
  900: 2,    
  500: 1,     
};

const Feed = () => {
  return (
    <div className="image-layout">
      <Masonry
        breakpointCols={columnBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-column"
        gutter="200px"
      >
        {itemData.map((item, index) => (
          <div key={item.img} className={`image-card custom-class-${index}`}>
            <Image src={item.img} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Feed;
