import Styles from './SecondaryHeader.module.scss';
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize"
import { Link } from 'react-router-dom';


const SecondaryHeader = ({links}) => {
  const { windowWidth } = useWindowSize();
  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      {windowWidth <= 1024
        ? <div className={Styles.MobileHeader}>
          <div className={Styles.MobileWrapper}>
            <Link to={'/'} className={Styles.Logo}>
              <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
            </Link>
            <div className={Styles.Burger} onClick={() => setMenuActive(!menuActive)}>
              {!menuActive && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                <g clip-path="url(#clip0_2479_16088)">
                  <path d="M6 9.20996H30" stroke="white" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="round" />
                  <path d="M6 18.21H30" stroke="white" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="round" />
                  <path d="M6 27.21H30" stroke="white" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2479_16088">
                    <rect width="36" height="36" fill="white" transform="translate(0 0.209961)" />
                  </clipPath>
                </defs>
              </svg>
              }

              {menuActive && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none">
                <g clip-path="url(#clip0_2495_7892)">
                  <path d="M1.51465 27.3901L18.4852 10.4196" stroke="white" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="round" />
                  <path d="M1.51465 27.3901L18.4852 10.4196" stroke="white" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="round" />
                  <path d="M1.51465 10.4199L18.4852 27.3905" stroke="white" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2495_7892">
                    <rect width="20" height="36" fill="white" transform="translate(0 0.209961)" />
                  </clipPath>
                </defs>
              </svg>
              }
            </div>
          </div>
          <div className={!menuActive ? Styles.Menu : Styles.Menu + ' ' + Styles.Active}>
            <div className={Styles.PageLinks}>
              <Link className={Styles.Link} to={links[0].href}>{links[0].text}</Link>
              <Link className={Styles.Link} to={links[1].href}>{links[1].text}</Link>
            </div>
          </div>
        </div>
        : 
        <div className={Styles.Header}>
          <div className={Styles.Wrapper}>
            <Link to={'/'} className={Styles.Logo}>
              <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
            </Link>
          </div>
        </div>
      }
    </>
  );
};

export default SecondaryHeader;
