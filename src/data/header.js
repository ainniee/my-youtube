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


export const headerMenus =[

    {
        title:"홈",
        icon:<CiApple />,
        src:"/"
    },
    {
        title:"추천 영상",
        icon:<BiCameraMovie />,
        src:"today"
    },
    {
        title:"추천 음악",
        icon:<LuFileMusic />,
        src:"/music"
    },
    {
        title:"추천 영화",
        icon:<BiMoviePlay />,
        src:"/movie"
    },
    {
        title:"추천 도서",
        icon:<LuBookCheck />,
        src:"/book"
    },
    {
        title:"추천 애니",
        icon:<ImEvil />,
        src:"/anime"
    },
    {
        title:"유튜브 사이트",
        icon:<GrYoutube />,
        src:"/youtube"
    }
];

export const searchKeyword =[
    {
        title:"MyYoutube",
        src:"/search/youtube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React.js",
        src:"/search/react.js"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    }

];

export const snsLink =[
    {
        icon:<FaCat />,
        src:"https://github.com"
    },
    {
        icon:<GrYoutube />,
        src:"https://youtube.com"
    },
    {
        icon:<RiGoogleFill />,
        src:"https://google.com"
    },
    {
        icon:<FaInstagram />,
        src:"https://instagram.com"
    },
]