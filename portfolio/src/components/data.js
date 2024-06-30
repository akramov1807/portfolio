import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'

export const links=[
    {
        id:1,
        name:'Home',
        icon: <FaHome className='nav__icon'/>,
        path:'/'
    },
    {
        id:2,
        name:'About',
        icon: <FaUser className='nav__icon'/>,
        path:'/about'
    },
    {
        id:1,
        name:'Portfolio',
        icon: <FaFolderOpen className='nav__icon'/>,
        path:'/portfolio'
    },
    {
        id:1,
        name:'Contact',
        icon: <FaEnvelopeOpen className='nav__icon'/>,
        path:'/contact'
    }
];

export const personalInfo=[
    {
        id:1,
        title:'First Name : ',
        description:'Husniddin',
    },
    {
        id:2,
        title:'Last Name : ',
        description:'Akramov',
    },
    {
        id:3,
        title:'Age : ',
        description:'17 Years',
    },
    {
        id:4,
        title:'Nationality : ',
        description:'Uzbek',
    },
    {
        id:5,
        title:'Freelance : ',
        description:'Available',
    },
    {
        id:6,
        title:'Address : ',
        description:'Ferghana Kokand',
    },
    {
        id:7,
        title:'Phone : ',
        description:'+998994841807',
    },
    {
        id:8,
        title:'Email : ',
        description:'akramovh1807@gmail.com',
    },
    {
        id:9,
        title:'Telegram : ',
        description:'https://t.me/akramov_h1807',
    },
    {
        id:10,
        title:'Languages : ',
        description:'Uzbek, English beginner',
    },
]