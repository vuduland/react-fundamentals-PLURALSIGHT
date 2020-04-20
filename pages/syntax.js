import React, { useState, useEffect } from 'react';

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  // if this state changes it causes a rerender of the component and that causes the function in useEffect to be called again

  useEffect(() => {
    console.log('in useEffect');
    return () => {
      console.log('in useEffect Cleaup; the second functional component');
    };
  }, [checkBoxValue]);
  /*this array is a list of dependencies of the hook; if empty useEffect() is just run once
  if you want it to run again before this component is unmounted (Syntax), then you must
  fill the array with all the values that change, i.e. the values in which the renderred output is dependent on */

  return <div></div>;
};

export default Syntax;
