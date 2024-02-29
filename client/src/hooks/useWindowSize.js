import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  const mobile = 440;
  const tablet = 768;
  const desktop = 1200;
  const miniDesk = 1100;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const smallMobileWidth = windowWidth >= 0 && windowWidth < mobile;
  const mobileWidth = windowWidth >= 0 && windowWidth < tablet;
  const tabletWidth = windowWidth >= tablet && windowWidth < desktop;
  const desktopWidth = windowWidth >= desktop;

  return { windowWidth, mobileWidth, tabletWidth, desktopWidth, smallMobileWidth };
};
