import Styles from './Header.module.scss';
import Container from '../ui/Container/Container';
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize"
import FormPopup from '../ui/FormPopup/FormPopup';
import { Link } from 'react-router-dom';


const Header = ({ formBlockRef }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  const { windowWidth } = useWindowSize();
  const [menuActive, setMenuActive] = useState(false)
  const [popup, setPopup] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToFormBlock = () => {
    formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])
  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>

    <div className={Styles.Header}>
        <div className={Styles.Wrapper}>
          <div className={Styles.PageLinks}>
            <Link className={Styles.Link} to={"/about"}>О нас</Link>
            <Link className={Styles.Link} to={"/documents"}>Документация</Link>
          </div>
          <Link to={'/'} className={Styles.Logo}>
            <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
          </Link>
          {/*<b>height: {height} - {isVisible?"show":"hide"}</b>*/}
          <a id={"hide"} className={Styles.Btn} onClick={scrollToFormBlock} style={isVisible ? { opacity: "0", pointerEvents: "none", cursor: "auto" } : { opacity: "1", pointerEvents: "auto", cursor: "pointer" }} >
            Оставить заявку
          </a>
        </div>
      </div> 

        <div className={Styles.MobileHeader}>
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
            <Link className={Styles.Link} to={"/about"}>О нас</Link>
            <Link className={Styles.Link} to={"/documents"}>Документация</Link>
          </div>
          <a className={Styles.MobileBtn} onClick={() => { setPopup(true) }}>
            Оставить заявку
          </a>
        </div>
        <FormPopup active={popup} setActive={setPopup} />
      </div>
    </>
  );
};

export default Header;
