import Styles from './Header.module.scss';
import Container from '../ui/Container/Container';
import {useEffect, useState} from "react";


const Header = ({formBlockRef}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)

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
    <div className={Styles.Header}>
        <div className={Styles.Wrapper}>
          <div className={Styles.Logo}>
            <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
          </div>
          {/*<b>height: {height} - {isVisible?"show":"hide"}</b>*/}
          <a id={"hide"} className={Styles.Btn}  onClick={scrollToFormBlock} style={isVisible ? {opacity:"0", pointerEvents:"none", cursor:"auto"} : {opacity:"1", pointerEvents:"auto", cursor:"pointer"}} >
            Оставить заявку
          </a>
        </div>
    </div>
  );
};

export default Header;
