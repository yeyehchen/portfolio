
import React, { useState, useEffect } from 'react';


const WindowContext = React.createContext({
  width: 0,
  height: 0,
  isLandscape: false,
})


export const WindowContextProvider = (props) => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth >= window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsLandscape(window.innerWidth >= window.innerHeight);
  };

  useEffect(() => {
    updateWidthAndHeight();
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <WindowContext.Provider 
      value={{
        width: width,
        height: height,
        isLandscape: isLandscape,
      }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};

export default WindowContext;