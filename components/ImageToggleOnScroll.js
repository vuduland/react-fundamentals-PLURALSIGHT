import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    setInView(isInView());
    // this calls setInView and sets isInView() to true when component first mounts, so // that the images you first see inside the view are colorized
    setIsLoading(false);
    // after setInView is called, then we call this to set isLoading to false, in order // to NOT render the default (black and white) image just before the useEffect() hook // sets the renderred image to color b/c it is in view
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
    // when isLoading **changes** from true to false, we want the component to re-render
    // so we add it to the dependency array of useEffect() above
  }, [isLoading]);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <img src={inView ? secondaryImg : primaryImg} alt='' ref={imageRef} width='320' height='240' />
  );
  // if isLoading is true, do not render anything to page, if false render the image based on its inView state

  // width and height resize picture when pulled from the internet, b/c the static assets // could be pulled from the internet XOR they are technically pulled from the internet // when renderred server-side, not sure which
};

export default ImageToggleOnScroll;
