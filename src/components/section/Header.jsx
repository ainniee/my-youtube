import React from 'react'

import { CiApple } from "react-icons/ci";
import { BiCameraMovie } from "react-icons/bi";
import { LuFileMusic } from "react-icons/lu";
import { BiMoviePlay } from "react-icons/bi";
import { LuBookCheck } from "react-icons/lu";
import { ImEvil } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import { FaCat } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";



const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className="header__logo">
            <a href="/">
            
            <em aria-hidden='true'></em>
            <span>my<br/>youtube</span>
            </a>

        </h1>
        <nav className="header__menu">
            <ul className="menu">
                <li className="active">
                    <a href="/"><CiApple />홈</a>
                </li>
                <li>
                    <a href="/today"><BiCameraMovie />추천 영상</a>
                </li>
                <li>
                    <a href="/music"><LuFileMusic />추천 음악</a>
                </li>
                <li>
                    <a href="/movie"><BiMoviePlay />추천 영화</a>
                </li>
                <li>
                    <a href="/book"><LuBookCheck />추천 도서</a>
                </li>
                <li>
                    <a href="/anime"><ImEvil />추천 애니</a>
                </li>
                <li>
                    <a href="/youtube"><GrYoutube />유튜브 사이트</a>
                </li>

            </ul>
            <ul className="keyword">
                <li>
                    <a href="/search/youtube">MyYoutube</a>
                </li>
                <li>
                    <a href="/search/html">HTML</a>
                </li>
                <li>
                    <a href="/search/css">CSS</a>
                </li>
                <li>
                    <a href="/search/javascript">JavaScript</a>
                </li>
                <li>
                    <a href="/search/react.js">React.js</a>
                </li>
                <li>
                    <a href="/search/java">JAVA</a>
                </li>
                <li>
                    <a href="/search/oracle">ORACLE</a>
                </li>
                <li>
                    <a href="/search/spring">SPRING</a>
                </li>

            </ul>
        </nav>
        <div className="header__sns">
            <ul>
                <li>
                    <a href="https://github.com"><FaCat /></a>
                </li>
                <li>
                    <a href="https://youtube.com"><GrYoutube /> </a>
                </li>
                <li>
                    <a href="https://google.com"><RiGoogleFill /></a>
                </li>
                <li>
                    <a href="https://instagram.com"><FaInstagram /></a>
                </li>
            </ul>
        </div>
    
    </header>
  )
}

export default Header