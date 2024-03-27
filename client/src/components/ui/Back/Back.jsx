import React from 'react';
import { Link } from 'react-router-dom';

const Back = ({ className }) => {
    return (
        <Link className={className} style={{ lineHeight: '27px' }} to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Назад</Link>
    );
}

export default Back;