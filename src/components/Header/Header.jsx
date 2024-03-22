import Styles from './Header.module.scss';
import { useEffect, useState } from "react";
import FormPopup from '../ui/FormPopup/FormPopup';
import { Link } from 'react-router-dom';


const Header = ({ formBlockRef, isMainHeader }) => {
  const [isVisible, setIsVisible] = useState(true);
  // const [height, setHeight] = useState(0)
  const [menuActive, setMenuActive] = useState(false)
  const [popup, setPopup] = useState(false)


  const scrollToFormBlock = () => {
    formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    // setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>

      <div className={Styles.Header}>
        <div className={isMainHeader ? Styles.Wrapper : Styles.SecondaryWrapper}>
          <div className={isMainHeader ? Styles.PageLinks : Styles.SecondaryPageLinks}>
            <Link className={Styles.Link} to="/about">О нас</Link>
            <Link className={Styles.Link} to="/agreements">Документация</Link>
          </div>
          <Link to='/' className={Styles.Logo}>
            <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
          </Link>
          {/*<b>height: {height} - {isVisible?"show":"hide"}</b>*/}
          {isMainHeader
            &&
            <a id={"hide"} className={Styles.Btn} onClick={scrollToFormBlock} style={isVisible ? { opacity: "0", pointerEvents: "none", cursor: "auto" } : { opacity: "1", pointerEvents: "auto", cursor: "pointer" }} >
              Оставить заявку
            </a>
          }
        </div>
      </div>

      <div className={Styles.MobileHeader}>
        <div className={Styles.MobileWrapper}>
          <Link to='/' className={Styles.Logo}>
            <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
          </Link>
          <div className={Styles.Burger} onClick={() => setMenuActive(!menuActive)}>
            {!menuActive && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
              <g clipPath="url(#clip0_2479_16088)">
                <path d="M6 9.20996H30" stroke="white" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M6 18.21H30" stroke="white" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M6 27.21H30" stroke="white" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_2479_16088">
                  <rect width="36" height="36" fill="white" transform="translate(0 0.209961)" />
                </clipPath>
              </defs>
            </svg>
            }

            {menuActive && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none">
              <g clipPath="url(#clip0_2495_7892)">
                <path d="M1.51465 27.3901L18.4852 10.4196" stroke="white" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M1.51465 27.3901L18.4852 10.4196" stroke="white" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M1.51465 10.4199L18.4852 27.3905" stroke="white" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="round" />
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
            <Link className={Styles.Link} to="/about">О нас</Link>
            <Link className={Styles.Link} to="/agreements">Документация</Link>
          </div>
          <div className={Styles.MobileBtn} onClick={() => { setPopup(true) }}>
            Оставить заявку
          </div>
        </div>
        <FormPopup active={popup} setActive={setPopup} />
      </div>
    </>
  );
};

export default Header;
