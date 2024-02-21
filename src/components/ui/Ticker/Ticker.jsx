import React from 'react';
import Styles from './Ticker.module.scss';

const Ticker = ({ text }) => {
    return (
        <div className={Styles.Ticker}>
            <p>{text}</p>
        </div>
    );
}

export default Ticker;