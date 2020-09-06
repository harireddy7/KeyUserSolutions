import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const unlistenRoute = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlistenRoute();
    };
  });

  return <></>;
};

export default ScrollToTop;
