import React from 'react'
import { snsLink } from '../../data/header';

    const Sns = () => {  return (
        <ul className="header__sns">
        {snsLink.map((sns, key) => (
            <li key={key}>
            <a href={sns.src} target="_blank" rel="noopener noreferrer">
                <span>{sns.icon}</span>
            </a>
            </li>
        ))}
        </ul>
    );
    };

export default Sns;
