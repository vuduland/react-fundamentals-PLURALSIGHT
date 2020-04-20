import React from 'react';
import ImageToggleOnScroll from '../components/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((imageId) => {
        return (
          <div key={imageId}>
            <ImageToggleOnScroll
              primaryImg={`/pictures/bw/image-${imageId}.jpg`}
              secondaryImg={`/pictures/color/image-${imageId}.jpg`}
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
