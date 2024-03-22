import React from 'react';
import Styles from '../FagBlock.module.scss';
const FagItem = ({ title, content, onItemClick, isActive }) => {
  return (
    <div className={Styles.FaqBlock}>
      <div className={Styles.FaqTitle} onClick={onItemClick}>
        <p className={Styles.FaqText}>{title}</p>
        <div className={Styles.IconBg}>
          <svg
            width='23'
            height='23'
            viewBox='0 0 23 23'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ rotate: isActive ? '45deg' : '0deg', transition: 'rotate .3s' }}
          >
            <path className={Styles.plusIcon} fillRule='evenodd' clipRule='evenodd' d='M11 18L11 5L12 5L12 18L11 18Z' fill='#868686' />
            <path
              className={Styles.plusIcon}
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.0001 12L5.00006 12L5.00006 11L18.0001 11L18.0001 12Z'
              fill='#868686'
            />
          </svg>
        </div>
      </div>

      <div
        className={Styles.Content}
        style={{
          maxHeight: isActive ? '1000px' : '0px',
          marginBottom: isActive ? '24px' : '0px',
          opacity: isActive ? '1' : '0',
          transition: 'max-height .5s, opacity .3s, margin .5s',
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default FagItem;
